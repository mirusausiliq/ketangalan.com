import {
  Box,
  Container,
  Stack,
  Heading,
  Text,
  List,
} from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";
import SEO from "@/components/SEO";
import MainLayout from "@/layouts/MainLayout";
import Ticker from "@/components/Ticker";

const About = () => {

  const headingColor = useColorModeValue("black", "white")
  const textColor = useColorModeValue("black", "gray.400")

  return (
    <>
      <SEO
        title="關於 About"
        description="了解巴賽凱達格蘭研究學會的成立宗旨、研究團隊以及我們在語言復振工作上的進展。"
        canonical="/about"
        keywords="學會宗旨, 組織架構, 語言復振計畫, 凱達格蘭研究歷史"
      />

      <MainLayout>
        <Container w="full" px={0}>
          <Stack gap={2} color={textColor}>
            <Stack gap={2}>
              <Ticker
                bgColor="#294F2D"
                items={["關於 About", "巴賽凱達格蘭研究學會 Society for Basay Ketangalan Studies"]}
              />

              <Heading
                as="h1"
                fontSize="2xl" fontWeight="800"
                color={headingColor}
                borderColor="#294F2D"
                borderLeftWidth={4}
                pl={2}
              >
                關於巴賽凱達格蘭研究學會 / About the Society of Basay Ketangalan Studies
              </Heading>
            </Stack>

            <Stack gap={2}>
              <Text fontWeight="600">
                巴賽凱達格蘭研究學會（Society for Basay Ketangalan Studies）是一個致力於研究、保存與復振巴賽（凱達格蘭）族語言、文史與文化遺產的學術與文化組織。
              </Text>

              <Text>
                The Society of Basay Ketangalan Studies is a scholarly and cultural initiative dedicated to the study, preservation, and revitalization of the language, history, and cultural heritage
                of the Basay Ketangalan people.
              </Text>

              <Text fontWeight="600">
                巴賽（凱達格蘭）族為歷史上分布於臺灣北部臺北盆地及周邊沿海地區的重要南島語族群之一。其語言巴賽（凱達格蘭）語（Basay Ketangalan）屬於臺灣南島語的一支，對理解南島語族的早期歷史、語言分化與北臺灣族群互動具有重要意義。
              </Text>

              <Text>
                The Basay Ketangalan were historically one of the Austronesian peoples inhabiting the Taipei Basin and surrounding northwestern coastal regions of Taiwan. Their language, Basay (Ketangalan), belongs to the Formosan branch of the Austronesian language family and provides important insights into the early history and diversification of Austronesian languages in Taiwan.
              </Text>
            </Stack>

            <Stack gap={2}>
              <Heading
                as="h2"
                fontSize="1xl" fontWeight="700"
                color={headingColor}
                borderColor="#294F2D"
                borderLeftWidth={4}
                pl={2}
              >
                學會宗旨 / Mission of the Society
              </Heading>

              <Text fontWeight="600">本學會致力於：</Text>
              <Text>The association aims to:</Text>

              <Box pl={4}>
                <List.Root gap={2}>
                  <List.Item>推動巴賽（凱達格蘭）族群相關研究 / Promote research on the Basay Ketangalan people</List.Item>
                  <List.Item>
                    支持語言復振、文化保存與歷史記憶的重建 / Support language revitalization, cultural preservation, and the reconstruction of historical memory
                  </List.Item>
                  <List.Item>建立語言資料與歷史文獻的數位典藏 / Build digital archives of linguistic materials and historical documents</List.Item>
                  <List.Item>
                    提供研究者、學生與社會大眾可使用的教育資源 / Provide educational resources for researchers, students, and the public
                  </List.Item>
                  <List.Item>
                    促進學術研究、社群合作與公共推廣之間的連結 / Foster connections between scholarship, community collaboration, and public outreach
                  </List.Item>
                </List.Root>
              </Box>
            </Stack>

            <Stack gap={2}>
              <Heading
                as="h2"
                fontSize="1xl" fontWeight="700"
                color={headingColor}
                borderColor="#294F2D"
                borderLeftWidth={4}
                pl={2}
              >
                學會願景 / Vision of the Society
              </Heading>

              <Text fontWeight="600">
                我們希望透過學者、社群成員與語言學習者之間的合作，共同促進巴賽（凱達格蘭）族語言、歷史與文化遺產的長期研究、保存與再生，並建立一個兼具學術性、公共性與數位可近性的知識平台。
              </Text>

              <Text>
                Through collaboration among scholars, community members, and
                language learners, we hope to promote the long-term study,
                preservation, and revitalization of Basay Ketangalan language,
                history, and cultural heritage, while building a knowledge
                platform that is scholarly, public-facing, and digitally
                accessible.
              </Text>
            </Stack>
          </Stack>
        </Container>
      </MainLayout>
    </>
  );
};

export default About;