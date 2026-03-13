import {
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react';
import SEO from '@/components/SEO';
import MainLayout from '@/layouts/MainLayout';
import Ticker from '@/components/Ticker';
import { FaBook, FaPodcast } from 'react-icons/fa';
import { LuSheet, LuPinOff, LuDatabase, LuComputer, LuFerrisWheel, LuNewspaper } from 'react-icons/lu';
import ButtonSet from '@/components/ButtonSet';

const Sources = () => {
  const links = [
    {
      title: "族語 E 樂園",
      url: "https://web.klokah.tw/",
      icon: <LuFerrisWheel />,
      color: "",
    },
    {
      title: "原住民族語言學習詞表系統",
      url: "https://glossary.ilrdf.org.tw/",
      icon: <LuSheet />,
      color: ""
    },
    {
      title: "原住民族語言資料庫",
      url: "https://ailt.ilrdf.org.tw/",
      icon: <LuDatabase />,
      color: ""
    },
    {
      title: "族語 AI 成果網",
      url: "https://ai-labs.ilrdf.org.tw",
      icon: <LuComputer />,
      color: "",
    },
    {
      title: "財團法人原住民族語言研究發展基金會",
      url: "https://ilrdf.org.tw",
      icon: <LuComputer />,
      color: "",
    },
    {
      title: "How do you Tu 木土杜的接客聽 ",
      url: "https://www.facebook.com/p/How-do-you-Tu-%E6%9C%A8%E5%9C%9F%E6%9D%9C%E7%9A%84%E6%8E%A5%E5%AE%A2%E8%81%BD-100071705744271/",
      icon: <FaPodcast />,
      color: "pink"
    },
    {
      title: "巴賽凱達格蘭語線上辭典",
      url: "/dictionary",
      icon: <FaBook />,
      color: "pink"
    },
    {
      title: "巴賽凱達格蘭期刊 Journal of Basay Ketangalan Studies",
      url: "#",
      icon: <LuNewspaper />,
      color: "yellow"
    },
    {
      title: "巴賽凱達格蘭語線上課程（籌備中）",
      url: "#",
      icon: <LuPinOff />,
      color: "yellow"
    },
    {
      title: "巴賽凱達格蘭語詞彙表（籌備中）",
      url: "#",
      icon: <LuPinOff />,
      color: "yellow"
    },
    {
      title: "巴賽凱達格蘭語故事集（籌備中）",
      url: "#",
      icon: <LuPinOff />,
      color: "yellow"
    },
    {
      title: "巴賽凱達格蘭語線上辭典（籌備中）",
      url: "#",
      icon: <LuPinOff />,
      color: "yellow"
    },
  ]

  return (
    <>
      <SEO
        title="資源 Source"
        description="收錄巴賽凱達格蘭族（Basay Ketangalan）相關的語言、文化、歷史等文獻、學術論文、田野錄音與數位典藏資料。"
        canonical="/sources"
        keywords="巴賽語文獻, 數位典藏, 田野調查, 語言學研究, 伊能嘉矩, 淺井惠倫"
      />
      <MainLayout>
        <Container w="full" px={0}>
          <Stack gap={2}>
            <Ticker
              bgColor="#a71f6e"
              items={["資源 Sources", "巴賽凱達格蘭研究學會 Society for Basay Ketangalan Studies"]}
            />
            <Heading
              as="h1"
              fontSize={"2xl"}
              borderColor="#a71f6e"
              borderLeftWidth={4}
              pl={2}
            >
              資源 Sources
            </Heading>
            <Text>
              以下提供了一些資源～
            </Text>

            <ButtonSet
              items={links}
            />
          </Stack>
        </Container>
      </MainLayout>
    </>
  );
};

export default Sources;

