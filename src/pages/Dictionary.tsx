import {
  Stack,
  Heading,
  Text,
  Container,
  Box,
  VStack,
  Input,
  SimpleGrid,
  Badge,
  HStack,
  Center,
  InputGroup
} from '@chakra-ui/react';
import { useState, useMemo } from 'react';
// Chakra v3 uses the "ColorModeButton" or specific hooks from your local ui folder
import { useColorModeValue } from '@/components/ui/color-mode';
import SEO from '@/components/SEO';
import MainLayout from '@/layouts/MainLayout';
import Ticker from '@/components/Ticker';
import { LuSearch } from "react-icons/lu";

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

  // Design Tokens
  const brandTeal = "#269397";
  const headingColor = useColorModeValue("black", "white");
  const cardBg = useColorModeValue("white", "gray.800");

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "name": "Basay Ketangalan Dictionary",
    "description": "A searchable database of the Basay language based on Li (2014) research.",
    "url": "https://ketangalan.com/dictionary",
  };

  // Improved Filter logic with null checks
  const filteredData = useMemo(() => {
    const s = query.toLowerCase().trim();
    const data = dictionaryData as Entry[];

    if (!s) return data.slice(0, 40); // Increased initial view

    return data.filter(item =>
      (item["Basay"]?.toLowerCase().includes(s)) ||
      (item["Basay.IPA"]?.toLowerCase().includes(s)) ||
      (item["ZH_TW"]?.includes(s)) ||
      (item["ENG"]?.toLowerCase().includes(s))
    );
  }, [query]);

  return (
    <>
      <SEO
        title="辭典 Dictionary | 巴賽凱達格蘭研究學會"
        description="Searchable Basay Ketangalan dictionary database featuring IPA transcriptions and orthography."
        ogType="website"
        structuredData={structuredData}
        keywords="Basay, Ketangalan, dictionary, indigenous language, Taiwan"
      />

      <MainLayout>
        <Container w="full" px={0}>
          <Stack gap={2}>
            <Ticker
              bgColor={brandTeal}
              items={["辭典 Dictionary", "巴賽凱達格蘭研究學會 Society for Basay Ketangalan Studies"]}
            />

            <VStack align="stretch">
              <Box

              >
                <Heading
                  size="2xl"
                  fontWeight="800"
                  color={headingColor}
                >
                  巴賽凱達格蘭語辭典
                </Heading>
                <Heading
                  size="xl"
                  fontWeight="800"
                  color={headingColor}
                >
                  Basay Ketangalan Dictionary
                </Heading>
              </Box>

              {/* Search Bar - Fixed z-index and background */}
              <Box
                position="relative"
                zIndex="docked"
                bg="transparent"
                transition="background 0.2s"
              >
                <InputGroup
                  flex="1"
                  width="full"
                  startElement={<LuSearch color={brandTeal} />}
                >
                  <Input
                    placeholder="搜尋 Search ..."
                    borderRadius="2xl"
                    size="lg"
                    fontFamily={"monospace"}
                    bg={cardBg}
                    _focus={{ borderColor: brandTeal, ringColor: brandTeal }}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </InputGroup>
                <Text mt={2} fontSize="xs" color="gray.500" fontWeight="medium">
                  找到 {filteredData.length} 筆結果
                </Text>
              </Box>

              {/* Results Grid */}
              <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} gap={6}>
                {filteredData.slice(0, 100).map((entry, index) => (
                  <Box
                    key={entry["id"] || index}
                    p={3}
                    bg={cardBg}
                    borderRadius="2xl"
                    boxShadow="none"
                    borderWidth={2}
                    _hover={{ shadow: "md", borderColor: brandTeal }}
                  >
                    <Stack gap={2}>
                      <HStack
                        align="flex-start"
                      >
                        <Center gap={4}>
                          <Badge
                            variant="solid" colorPalette="pink"
                          >
                            {entry["id"]}
                          </Badge>
                          <Text
                            fontSize="1xl"
                            fontWeight={"bold"}
                            color={brandTeal}
                          >
                            {entry["Basay"]}
                          </Text>
                          <Text
                            fontSize="sm"
                            fontFamily={"monospace"}
                            color="gray.500"
                          >
                            /{entry["Basay.IPA"]}/
                          </Text>
                        </Center>
                      </HStack>
                      <HStack>
                        <Text>{entry["ZH_TW"]}</Text>
                        <Text>{entry["ENG"]}</Text>
                      </HStack>
                    </Stack>
                  </Box>
                ))}
              </SimpleGrid>

              {filteredData.length === 0 && (
                <Box textAlign="center" py={20} border="2px solid" borderColor="gray.200" borderRadius="2xl">
                  <Text color="gray.400" fontSize="lg">找不到與「{query}」相符的結果。</Text>
                  <Text color="gray.400" fontSize="lg">There is no "{query}" in the dictionary.</Text>
                </Box>
              )}
            </VStack>
          </Stack>
        </Container>
      </MainLayout>
    </>
  );
};

export default Dictionary;