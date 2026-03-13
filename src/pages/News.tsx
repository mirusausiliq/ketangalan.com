import {
  Heading,
  Container,
  Center,
  Stack,
  VStack
} from '@chakra-ui/react';
import MainLayout from '@/layouts/MainLayout';
import Ticker from '@/components/Ticker';
import SEO from '@/components/SEO';

const News = () => {
  return (
    <>
      <SEO
        title="最新消息 News"
        description="掌握巴賽凱達格蘭研究學會的最新活動、學術講座、田野調查進度與公告事項。"
        canonical="/news"
        ogType="website" // 若是特定新聞單篇，可改為 "article"
      />
      <MainLayout>
        <Container w="full" px={0}>
          <Stack gap={2}>
            <Ticker
              bgColor="#a7731f"
              items={["最新消息 News", "巴賽凱達格蘭研究學會 Society for Basay Ketangalan Studies"]}
            />
            <Heading
              fontSize={"2xl"}
              borderColor="#a7731f"
              borderLeftWidth={"2px"}
              pl={2}
            >
              最新消息 News
            </Heading>
          </Stack>
          <VStack h="full" mt={100}>
            <Center>
              <Heading>暫無消息～</Heading>
            </Center>
          </VStack>
        </Container>
      </MainLayout>
    </>
  )
}

export default News;