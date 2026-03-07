import { Stack, Heading, Text, Button, Box, Container } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import SEO from '@/components/SEO';
import MainLayout from '@/layouts/MainLayout';
import Ticker from '@/components/Ticker';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <SEO
        title="404 Page Not Found | 巴賽凱達格蘭研究學會 Society for Basay Ketangalan Studies"
        description="The page you are looking for could not be found."
      />

      <MainLayout>
        <Container w="full" px={0}>
          <Ticker
            items={["404 Page Not Found", "404 錯誤", "巴賽凱達格蘭研究學會 Society for Basay Ketangalan Studies"]}
            bgColor="#9b1a27"
          ></Ticker>
          <Box
            minH="50vh"
            display="flex" alignItems="center" justifyContent="center" bg="bg.default"
          >
            <Container maxW="900px">
              <Stack gap={6} align="center" textAlign="center">
                <Heading
                  as="h1"
                  fontSize="7xl"
                  fontWeight="700"
                  color="fg.default"
                >
                  404
                </Heading>
                <Heading
                  as="h2"
                  fontSize="3xl"
                  fontWeight="600"
                  color="fg.default"
                >
                  Page Not Found
                </Heading>
                <Text
                  fontSize="base"
                  color="fg.muted"
                  lineHeight="relaxed"
                  maxW="50vh"
                >
                  此頁面已被移除或暫時無法存取。
                </Text>
                <Text
                  fontSize="base"
                  color="fg.muted"
                  lineHeight="relaxed"
                  maxW="50vh"
                >
                  The page you are looking for might have been removed or is temporarily unavailable.
                </Text>
                <Button
                  onClick={() => navigate('/')}
                  bg="brand.default"
                  color="white"
                  fontSize="sm"
                  fontWeight="600"
                  px={6}
                  py={3}
                  _hover={{
                    bg: 'brand.hover',
                  }}
                  transition="background 0.3s"
                >
                  返回首頁 Return to Home
                </Button>
              </Stack>
            </Container>
          </Box>
        </Container>
      </MainLayout>
    </>
  );
};

export default NotFound;
