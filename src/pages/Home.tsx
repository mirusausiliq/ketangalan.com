import {
  Stack,
  Heading,
  Text,
  Container,
  Box,
  VStack
} from '@chakra-ui/react';
import { useColorModeValue } from '@/components/ui/color-mode';
import SEO from '@/components/SEO';
import MainLayout from '@/layouts/MainLayout';
import Ticker from '@/components/Ticker';
import ButtonSet from '@/components/ButtonSet';
import { LuSailboat, LuFlower } from 'react-icons/lu';

const Home = () => {
  const links = [
    {
      title: "關於本學會 About the Society",
      url: "/about",
      icon: <LuSailboat />,
      color: "",
    },
    {
      title: "本學會資源 Sources",
      url: "/sources",
      icon: <LuFlower />,
      color: ""
    },
  ]
  const headingColor = useColorModeValue("black", "white");
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Ketangalan",
    "description": "Research, essays, and resources on Ketangalan language and culture",
    "url": "https://ketangalan.com",
  };

  return (
    <>
      <SEO
        title="首頁 Home | 巴賽凱達格蘭研究學會 Society for Basay Ketangalan Studies"
        description="Research, essays, and resources dedicated to preserving Ketangalan language and culture through academic scholarship and community collaboration."
        ogType="website"
        structuredData={structuredData}
        keywords="Ketangalan, indigenous language, linguistics, research, cultural preservation"
      />
      <MainLayout>
        <Container top={0} px={0}>
          <Stack gap={2}>
            <Ticker
              bgColor="#1d6668"
              items={["首頁 Home", "巴賽凱達格蘭研究學會 Society for Basay Ketangalan Studies"]}
            />

            <Box
              minH="25vh"
              display="flex" alignItems="center" justifyContent="center"
            >
              <VStack gap={4}>
                <Heading
                  as="h1"
                  fontSize="4xl"
                  color={headingColor}
                >
                  巴賽凱達格蘭研究學會
                </Heading>
                <Heading
                  as="h1"
                  fontSize="2xl"
                >
                  Society for Basay Ketangalan Studies
                </Heading>
                <Heading
                  as="h2"
                  fontSize="1xl"
                  color={headingColor}
                >
                  致力於巴賽凱達格蘭族族群語言、文化、與歷史的研究、保存與復振。
                </Heading>
              </VStack>
            </Box>

            <ButtonSet items={links} />

            <Heading
              as="h2"
              fontSize="1xl"
              borderColor="#1d6668"
              borderLeftWidth={4}
              pl={2}
            >
              關於本平台
            </Heading>
            <Stack gap={2} color="fg.muted">
              <Text>
                巴賽（凱達格蘭）族為歷史上分布於臺灣北部的重要臺灣原住民之一，其語言巴賽（凱達格蘭）語曾廣泛使用於臺北盆地、桃園臺地、北海岸、東北角、以及蘭陽平原等地。
              </Text>
              <Text>
                The Basay Ketangalan people were one of the Austronesian groups historically inhabiting northern Taiwan, particularly the Taipei Basin, Taoyuan Tableland, Northern and Northwest Coast, Kebalan Plain, and surrounding regions.
              </Text>
              <Text>
                雖然巴賽語今日已不再作為日常語言使用，但透過語言學研究與歷史文獻，仍可重建其語音、語法與口傳文化。
              </Text>
              <Text>
                巴賽（凱達格蘭）族為歷史上分布於臺灣北部的重要臺灣原住民之一，其語言巴賽（凱達格蘭）語曾廣泛使用於臺北盆地、桃園臺地、北海岸、東北角、以及蘭陽平原等地。
              </Text>
              <Text>
                雖然巴賽（凱達格蘭）語今日已不再作為日常語言使用，但透過語言學研究與歷史文獻，仍可重建其語音、語法與口傳文化。
              </Text>
              <Text>
                Their language, Basay Ketangalan, is now extinct as a daily spoken language, but important documentation survives in historical records and linguistic research.
              </Text>
              <Text>
                本平台致力於整理相關研究資料，建立公開的數位資源，並推動巴賽凱達格蘭族語言與文化的復振。
              </Text>
              <Text>
                This platform aims to provide accessible resources for research, education, and cultural preservation.
              </Text>
            </Stack>
          </Stack>
        </Container>
      </MainLayout>
    </>
  );
};

export default Home;