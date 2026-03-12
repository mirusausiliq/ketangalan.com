import {
  Stack, Heading, Text, Container, Box, VStack, Input, SimpleGrid,
  Badge, HStack, InputGroup, Button, IconButton, Progress, Center
} from '@chakra-ui/react';
import { useState, useMemo, useRef, useEffect } from 'react';
import { useColorModeValue } from '@/components/ui/color-mode';
import SEO from '@/components/SEO';
import MainLayout from '@/layouts/MainLayout';
import { LuSearch, LuMic, LuSquare, LuPlay, LuChevronLeft, LuChevronRight } from "react-icons/lu";

import dictionaryData from "@/data/li2014dict.json";

interface Entry {
  "Basay": string;
  "Basay.IPA": string;
  "ZH_TW": string;
  "ENG": string;
  "id": string;
}

const Recorder = () => {
  // --- State ---
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [recordingId, setRecordingId] = useState<string | null>(null);
  const [audioUrls, setAudioUrls] = useState<{ [key: string]: string }>({});
  const [isSaving, setIsSaving] = useState<{ [key: string]: boolean }>({});

  // --- Constants & Refs ---
  const itemsPerPage = 100;
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const audioChunks = useRef<Blob[]>([]);

  // --- Design Tokens ---
  const brandTeal = "#269397";
  const brandPink = "#D53F8C";
  const cardBg = useColorModeValue("white", "gray.800");

  // --- NEW: Load existing files from server on mount to persist checked status ---
  useEffect(() => {
    const fetchExistingAudio = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/list-audio');
        if (response.ok) {
          const files: string[] = await response.json();
          const savedMap: { [key: string]: boolean } = {};
          files.forEach(filename => {
            const id = filename.replace('.webm', '');
            savedMap[id] = true;
          });
          setIsSaving(savedMap);
        }
      } catch (error) {
        console.error("Persistence check failed. Is the server running?", error);
      }
    };
    fetchExistingAudio();
  }, []);

  // --- Progress Calculations ---
  const totalTerms = (dictionaryData as Entry[]).length;
  const completedCount = useMemo(() => Object.keys(isSaving).length, [isSaving]);
  const progressPercent = useMemo(() =>
    Math.round((completedCount / totalTerms) * 100),
    [completedCount, totalTerms]
  );

  // --- Filtering & Pagination Logic ---
  const filteredData = useMemo(() => {
    const s = query.toLowerCase().trim();
    const data = dictionaryData as Entry[];
    return s ? data.filter(item =>
      item["Basay"]?.toLowerCase().includes(s) ||
      item["ZH_TW"]?.includes(s) ||
      item["ENG"]?.toLowerCase().includes(s) ||
      item["id"]?.includes(s)
    ) : data;
  }, [query]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(start, start + itemsPerPage);
  }, [filteredData, currentPage]);

  // --- Audio Recording Logic ---
  const startRecording = async (id: string) => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder.current = new MediaRecorder(stream);
    audioChunks.current = [];

    mediaRecorder.current.ondataavailable = (e) => {
      if (e.data.size > 0) audioChunks.current.push(e.data);
    };

    mediaRecorder.current.onstop = async () => {
      const audioBlob = new Blob(audioChunks.current, { type: 'audio/webm' });
      const url = URL.createObjectURL(audioBlob);
      setAudioUrls(prev => ({ ...prev, [id]: url }));
      await autoSaveAudio(id, audioBlob);
    };

    mediaRecorder.current.start();
    setRecordingId(id);
  };

  const stopRecording = () => {
    mediaRecorder.current?.stop();
    setRecordingId(null);
  };

  const autoSaveAudio = async (id: string, blob: Blob) => {
    const formData = new FormData();
    formData.append("file", blob, `${id}.webm`);
    try {
      const response = await fetch('http://localhost:5001/api/save-audio', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) setIsSaving(prev => ({ ...prev, [id]: true }));
    } catch (error) {
      console.error("Save failed:", error);
    }
  };

  const playAudio = (id: string) => {
    const localUrl = audioUrls[id];
    // If not recorded in current session, fetch from server static path
    const serverUrl = `http://localhost:5001/audio-files/${id}.webm`;
    const audio = new Audio(localUrl || serverUrl);
    audio.play();
  };

  return (
    <>
      <SEO
        title="錄音工具 Recorder | 巴賽凱達格蘭"
        description="Learn about our mission to preserve and advance Basay Ketangalan language, history, and culture through research, digital archives, and community collaboration."
        ogType="website"
      />
      <MainLayout>
        <Container w="full" px={0} maxW="container.xl">
          <Stack gap={4} py={0}>

            {/* 1. Progress Dashboard */}
            <Box p={6}
              bg={cardBg}
              borderRadius="2xl"
              borderWidth={2}
              borderColor={brandTeal}
            >
              <VStack align="stretch" gap={4}>
                <HStack justify="space-between" align="flex-end">
                  <VStack align="flex-start" gap={0}>
                    <Heading size="2xl" fontWeight="800" color={brandTeal}>辭典錄音模式</Heading>
                    <Text color="gray.500">正在建立巴賽語語音資料庫 Digital Audio Archive</Text>
                  </VStack>
                  <VStack align="flex-end" gap={0}>
                    <Text fontSize="3xl" fontWeight="800" color={brandTeal}>{progressPercent}%</Text>
                    <Text fontSize="xs" color="gray.500" fontWeight="bold">COMPLETION</Text>
                  </VStack>
                </HStack>

                <Stack gap={2}>
                  <Progress.Root
                    value={progressPercent}
                    size="lg" borderRadius="full" colorPalette="teal"
                    striped animated
                  >
                    <Progress.Track bg="gray.100">
                      <Progress.Range />
                    </Progress.Track>
                  </Progress.Root>
                  <HStack justify="space-between">
                    <Text fontSize="sm" fontWeight="bold">已完成: {completedCount} 筆</Text>
                    <Text fontSize="sm" color="gray.400">總計: {totalTerms} 筆</Text>
                  </HStack>
                </Stack>
              </VStack>
            </Box>

            {/* 2. Search and Pagination Info */}
            <Stack direction={{ base: "column", md: "row" }} gap={4}>
              <InputGroup flex="1" startElement={<LuSearch color={brandTeal} />}>
                <Input
                  placeholder="搜尋編號、單字、翻譯..."
                  bg={cardBg}
                  borderRadius="xl"
                  value={query}
                  onChange={(e) => { setQuery(e.target.value); setCurrentPage(1); }}
                />
              </InputGroup>
              <Center px={4} py={2} bg="gray.50" borderRadius="xl">
                <Text fontSize="xs" fontWeight="bold" color="gray.500">
                  PAGE {currentPage} OF {totalPages || 1}
                </Text>
              </Center>
            </Stack>

            {/* 3. Grid of Cards */}
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
              {currentItems.map((entry) => (
                <Box
                  key={entry.id}
                  p={4}
                  bg={cardBg}
                  borderRadius="2xl"
                  borderWidth={2}
                  borderColor={recordingId === entry.id ? brandPink : "transparent"}
                  _hover={{ borderColor: brandTeal }}
                >
                  <Stack direction="row" justify="space-between" align="center">
                    <VStack align="flex-start" gap={0}>
                      <HStack>
                        <Badge colorPalette={isSaving[entry.id] ? "green" : "pink"}>
                          {isSaving[entry.id] ? entry.id : entry.id}
                        </Badge>
                        <Text fontWeight="bold" fontFamily="monospace" fontSize="lg">
                          /{entry['Basay.IPA']}/
                        </Text>
                      </HStack>
                      <Text fontSize="xs" color="gray.500">{entry.ENG} | {entry.ZH_TW}</Text>
                    </VStack>

                    <HStack>
                      <IconButton
                        aria-label="Record"
                        colorPalette={recordingId === entry.id ? "red" : "teal"}
                        onClick={() => recordingId === entry.id ? stopRecording() : startRecording(entry.id)}
                        borderRadius="full"
                      >
                        {recordingId === entry.id ? <LuSquare /> : <LuMic />}
                      </IconButton>

                      {(audioUrls[entry.id] || isSaving[entry.id]) && (
                        <IconButton
                          aria-label="Play"
                          size="md"
                          variant="subtle"
                          onClick={() => playAudio(entry.id)}
                          borderRadius="full"
                        >
                          <LuPlay />
                        </IconButton>
                      )}
                    </HStack>
                  </Stack>
                </Box>
              ))}
            </SimpleGrid>

            {/* 4. Pagination Controls */}
            <HStack justify="center" gap={4} mt={8} wrap="wrap">
              <Button
                variant="outline"
                disabled={currentPage === 1}
                onClick={() => { setCurrentPage(p => p - 1); window.scrollTo(0, 0); }}
              >
                <LuChevronLeft /> Previous
              </Button>
              <HStack gap={2}>
                <Text fontWeight="bold">Page</Text>
                <Input
                  w="70px"
                  textAlign="center"
                  value={currentPage}
                  onChange={(e) => {
                    const val = parseInt(e.target.value);
                    if (!isNaN(val) && val > 0 && val <= totalPages) setCurrentPage(val);
                  }}
                />
                <Text fontWeight="bold">of {totalPages}</Text>
              </HStack>
              <Button
                variant="outline"
                disabled={currentPage === totalPages}
                onClick={() => { setCurrentPage(p => p + 1); window.scrollTo(0, 0); }}
              >
                Next <LuChevronRight />
              </Button>
            </HStack>

          </Stack>
        </Container>
      </MainLayout>
    </>
  );
};

export default Recorder;