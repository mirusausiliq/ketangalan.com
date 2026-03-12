import {
  Heading,
  Text,
  Container,
  Box,
  VStack,
  Input,
  InputGroup,
  SimpleGrid,
  Badge,
  HStack,
  IconButton,
  Separator,
  Center,
  Flex
} from '@chakra-ui/react';
import { useState, useMemo } from 'react';
import { useColorModeValue } from '@/components/ui/color-mode';
import SEO from '@/components/SEO';
import MainLayout from '@/layouts/MainLayout';
import Ticker from '@/components/Ticker';
import { LuSearch, LuPlay, LuInfo } from "react-icons/lu";

// Import your generated JSON file
import dictionaryData from "@/data/li2014dict.json";

interface Entry {
  "Basay": string;
  "Basay.IPA": string;
  "ZH_TW": string;
  "ENG": string;
  "id": string;
}

const Dictionary = () => {
  const [query, setQuery] = useState("");

  // Supabase Design Tokens
  const brandGreen = "#3ecf8e"; // Signature Supabase Green
  const borderColor = useColorModeValue("gray.200", "gray.800");
  const secondaryBg = useColorModeValue("gray.50", "#1c1c1c");
  const mainBg = useColorModeValue("white", "#121212");
  const mutedText = useColorModeValue("gray.500", "gray.400");

  const playAudio = (id: string) => {
    const audioPath = `/audio/${id}.webm`;
    const audio = new Audio(audioPath);
    audio.play().catch((err) => {
      console.warn(`Audio for ${id} not found`, err);
      alert("此詞彙尚未錄音 No recording yet.");
    });
  };

  const filteredData = useMemo(() => {
    const s = query.toLowerCase().trim();
    const data = dictionaryData as Entry[];
    if (!s) return data.slice(0, 40);

    return data.filter(item =>
      (item["Basay"]?.toLowerCase().includes(s)) ||
      (item["Basay.IPA"]?.toLowerCase().includes(s)) ||
      (item["ZH_TW"]?.includes(s)) ||
      (item["ENG"]?.toLowerCase().includes(s)) ||
      (item["id"]?.includes(s))
    );
  }, [query]);

  return (
    <>
      <SEO
        title="辭典 Dictionary | 巴賽凱達格蘭研究學會"
        description="Searchable Basay dictionary featuring orthography and IPA."
        ogType="website"
      />

      <MainLayout>
        <Ticker
          bgColor={brandGreen}
          items={["辭典 Dictionary", "巴賽凱達格蘭研究學會 Society for Basay Ketangalan Studies"]}
        />

        <Container p={0} pt={4}>
          <VStack align="stretch" gap={2}>
            {/* Header Section */}
            <Flex justify="space-between" align="flex-end" wrap="wrap" gap={2}>
              <Box>
                <Heading
                  size="3xl"
                  letterSpacing="tight"
                  fontWeight="bold"
                >
                  巴賽凱達格蘭語辭典
                </Heading>
                <Text
                  color={brandGreen}
                  fontSize="xl"
                  fontFamily="mono"
                  fontWeight="medium"
                >
                  Basay_Ketangalan_Dictionary.v1
                </Text>
              </Box>

              <HStack
                p={2}
                bg={secondaryBg}
                borderRadius="md"
                gap={2}
              >
                <LuInfo color={brandGreen} />
                <Text fontSize="xs" maxW="300px" lineHeight="short">
                  目前資料仍有待確認，語料與音檔僅供參考。
                  Data is preliminary; recordings for reference only.
                </Text>
              </HStack>
            </Flex>

            {/* Supabase-style Search Bar */}
            <InputGroup
              width="full"
              startElement={<LuSearch color={mutedText} />}
            >
              <Input
                placeholder="搜尋詞彙 Search entries..."
                borderRadius={"md"}
                variant="subtle"
                fontSize="md"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                _placeholder={{ color: "gray.500" }}
              />
            </InputGroup>

            <HStack justify="space-between">
              <Text fontSize="xs" fontFamily="mono" color={mutedText} textTransform="uppercase" letterSpacing="widest">
                Showing {filteredData.length} entries
              </Text>
              <Separator flex="1" mx={0} opacity="0.1" />
            </HStack>

            {/* Results Grid */}
            <SimpleGrid columns={{ base: 1, lg: 2 }} gap={4}>
              {filteredData.slice(0, 100).map((entry) => (
                <Box
                  key={entry.id}
                  p={4}
                  bg={mainBg}
                  borderRadius="md"
                  borderWidth="1px"
                  borderColor={borderColor}
                  transition="all 0.2s ease-in-out"
                  _hover={{ borderColor: brandGreen, shadow: "sm", transform: "translateY(-1px)" }}
                  position="relative"
                  overflow="hidden"
                >
                  <HStack justify="space-between" align="flex-start">
                    <VStack align="flex-start" gap={2} width="full">

                      <Center>
                        <HStack gap={2}>
                          <Badge
                            variant="outline"
                            fontFamily="mono"
                            colorPalette="gray"
                            borderRadius="sm"
                            px={2}
                          >
                            {entry.id}
                          </Badge>
                          <Text fontSize="1xl" fontWeight="600" letterSpacing="tight">
                            {entry.Basay}
                          </Text>
                        </HStack>
                      </Center>

                      <Box>
                        <Text fontSize="sm" fontFamily="mono" color={brandGreen} mb={1}>
                          /{entry["Basay.IPA"]}/
                        </Text>
                        <HStack gap={4}>
                          <Text fontWeight="medium" fontSize="lg">{entry.ZH_TW}</Text>
                          <Separator orientation="vertical" h="4" />
                          <Text color={mutedText} fontStyle="italic">{entry.ENG}</Text>
                        </HStack>
                      </Box>
                    </VStack>

                    <IconButton
                      aria-label="Play"
                      variant="ghost"
                      color={brandGreen}
                      _hover={{ bg: "rgba(62, 207, 142, 0.1)" }}
                      borderRadius="md"
                      borderWidth="1px"
                      borderColor={borderColor}
                      onClick={() => playAudio(entry.id)}
                    >
                      <LuPlay fill={brandGreen} />
                    </IconButton>
                  </HStack>
                </Box>
              ))}
            </SimpleGrid>

            {filteredData.length === 0 && (
              <Box
                textAlign="center"
                py={20}
                border="1px dashed"
                borderColor={borderColor}
                borderRadius="xl"
                bg={secondaryBg}
              >
                <Text fontFamily="mono" color={mutedText}>[!] No entries matched your query</Text>
              </Box>
            )}
          </VStack>
        </Container>
      </MainLayout>
    </>
  );
};

export default Dictionary;