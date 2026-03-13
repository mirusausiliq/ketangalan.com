import {
  Heading,
  Text,
  Container,
  Box,
  VStack,
  Badge,
  HStack,
  IconButton,
  Button,
  Flex,
  Center,
  SimpleGrid,
  Link as ChakraLink
} from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router';
import { useColorModeValue } from '@/components/ui/color-mode';
import { LuPlay, LuChevronLeft, LuExternalLink, LuLanguages } from "react-icons/lu";
import SEO from '@/components/SEO';
import MainLayout from '@/layouts/MainLayout';
import Ticker from '@/components/Ticker';

// 匯入資料
import dictionaryData from "@/data/li2014dict.json";

interface Entry {
  "Basay": string;
  "Basay.IPA": string;
  "ZH_TW": string;
  "ENG": string;
  "id": string;
}

const WordDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // 查找對應的詞條
  const entry = (dictionaryData as Entry[]).find(item => item.id === id);

  // 設計變數 (同步 Dictionary.tsx)
  const brandGreen = "#3ecf8e";
  const borderColor = useColorModeValue("gray.200", "gray.800");
  const secondaryBg = useColorModeValue("gray.50", "#1c1c1c");
  const mainBg = useColorModeValue("white", "#121212");
  const mutedText = useColorModeValue("gray.500", "gray.400");

  const playAudio = (audioId: string) => {
    const audioPath = `/audio/${audioId}.webm`;
    const audio = new Audio(audioPath);
    audio.play().catch((err) => {
      console.warn(`Audio for ${audioId} not found`, err);
      alert("此詞彙尚未錄音 No recording yet.");
    });
  };

  if (!entry) {
    return (
      <MainLayout>
        <Center py={20}><Text>找不到該詞條 Entry Not Found.</Text></Center>
      </MainLayout>
    );
  }

  return (
    <>
      <SEO
        title={`${entry.Basay} (${entry.ZH_TW})`}
        description={`巴賽語詞彙：${entry.Basay}。中文釋義：${entry.ZH_TW}。英文翻譯：${entry.ENG}。`}
        canonical={`/dictionary/${entry.id}`}
        ogType="article"
        keywords={`${entry.Basay}, 巴賽語, Basay, ${entry.ZH_TW}, 辭典`}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "DefinedTerm",
          "name": entry.Basay,
          "description": entry.ZH_TW,
          "inDefinedTermSet": "https://ketangalan.com/dictionary",
          "termCode": entry.id
        }}
      />

      <MainLayout>
        <Ticker
          bgColor={brandGreen}
          items={[`${entry.Basay}`, "巴賽凱達格蘭研究學會 Society for Basay Ketangalan Studies"]}
        />

        <Container p={0} pt={4} maxW="container.md">
          <VStack align="stretch" gap={6}>
            
            {/* 上方導航 */}
            <Flex justify="space-between" align="center">
              <Button 
                variant="outline"
                colorPalette={"cyan"}
                size="sm" 
                onClick={() => navigate('/dictionary')}
              >
                <LuChevronLeft />
                返回辭典 Back to Dictionary
              </Button>
              <Badge variant="surface" colorPalette="gray" fontFamily="mono">
                ID: {entry.id}
              </Badge>
            </Flex>

            {/* 主要內容卡片 */}
            <Box
              p={{ base: 6, md: 10 }}
              bg={mainBg}
              borderRadius="lg"
              borderWidth="1px"
              borderColor={borderColor}
              shadow="sm"
            >
              <VStack align="flex-start" gap={8}>
                
                {/* 詞彙標題與發音按鈕 */}
                <Flex justify="space-between" align="center" width="full">
                  <VStack align="flex-start" gap={0}>
                    <Heading size="4xl" letterSpacing="tighter">
                      {entry.Basay}
                    </Heading>
                    <Text fontSize="2xl" fontFamily="mono" color={brandGreen} mt={2}>
                      /{entry["Basay.IPA"]}/
                    </Text>
                  </VStack>
                  
                  <IconButton
                    aria-label="Play Audio"
                    size="xl"
                    variant="subtle"
                    colorPalette="green"
                    bg="rgba(62, 207, 142, 0.1)"
                    color={brandGreen}
                    borderRadius="full"
                    onClick={() => playAudio(entry.id)}
                  >
                    <LuPlay size="24px" fill={brandGreen} />
                  </IconButton>
                </Flex>

                {/* 釋義區塊 */}
                <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} width="full">
                  <Box>
                    <HStack mb={2} color={mutedText}>
                      <LuLanguages size="16px" />
                      <Text fontSize="xs" fontWeight="bold" textTransform="uppercase" letterSpacing="widest">
                        Chinese 繁體中文
                      </Text>
                    </HStack>
                    <Text fontSize="2xl" fontWeight="semibold">
                      {entry.ZH_TW}
                    </Text>
                  </Box>

                  <Box>
                    <HStack mb={2} color={mutedText}>
                      <LuExternalLink size="16px" />
                      <Text fontSize="xs" fontWeight="bold" textTransform="uppercase" letterSpacing="widest">
                        English 英文
                      </Text>
                    </HStack>
                    <Text fontSize="2xl" fontWeight="medium" fontStyle="italic">
                      {entry.ENG}
                    </Text>
                  </Box>
                </SimpleGrid>

                {/* 額外資訊提示 */}
                <Box
                  w="full"
                  p={4}
                  bg={secondaryBg}
                  borderRadius="md"
                  borderLeftWidth="4px"
                  borderLeftColor={brandGreen}
                >
                  <Text fontSize="sm" color={mutedText}>
                    此資料源自 <strong>Li (2014)</strong> 整理之巴賽語料。
                    如果您對此詞條有任何補充或修正建議，歡迎聯繫<ChakraLink
                      href="mailto:mirusausiliq@gmail.com"
                      color="cyan"
                    >✧ 本學會研究小組 ✩‧₊˚</ChakraLink>。
                  </Text>
                </Box>
              </VStack>
            </Box>

          </VStack>
        </Container>
      </MainLayout>
    </>
  );
};

export default WordDetail;