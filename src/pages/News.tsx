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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Society of Basay Ketangalan Studies",
    alternateName: "巴賽凱達格蘭研究學會",
    description:
      "A scholarly and cultural organization dedicated to the research, preservation, and revitalization of Basay Ketangalan language, history, and cultural heritage.",
    url: "https://ketangalan.com",
  };

  return (
    <>
      <SEO
        title="最新消息 News | 巴賽凱達格蘭研究學會 Society for Basay Ketangalan Studies"
        description="Learn about our mission to preserve and advance Basay Ketangalan language, history, and culture through research, digital archives, and community collaboration."
        ogType="website"
        structuredData={structuredData}
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