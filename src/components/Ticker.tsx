import type { ReactNode } from "react";
import { AspectRatio, Box, Text, Marquee, Center } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

interface Props {
  items: string[];
  bgColor?: string;
  speed?: number;
  ratio?: number;
  icon?: ReactNode | null;
}

const Ticker = ({
  items = ["巴賽凱達格蘭研究學會 Society of Basay Ketangalan Studies"],
  bgColor = "#294F2D",
  speed = 100,
  ratio = 16 / 4,
  icon = <FaStar />
}: Props) => {
  return (
    <AspectRatio ratio={ratio} w="full">
      <Box
        bgColor={bgColor}
        overflow="hidden"
        position="relative"
        borderRadius="2xl"
      >
        <Box
          position="absolute"
          inset={0}
          display="flex"
          alignItems="center"
          justifyContent="center"
          transform="rotate(-18deg) scale(1.2)"
          transformOrigin="center"
        >
          <Marquee.Root speed={speed}>
            <Marquee.Viewport py={8}>
              <Marquee.Content>
                {items.map((item, index) => (
                  <Box key={index} display="flex" alignItems="center">
                    <Marquee.Item px={4}>
                      <Text
                        color="white"
                        fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
                        fontWeight="900"
                        fontStyle="italic"
                        letterSpacing="0.18em"
                        lineHeight="1.2"
                        whiteSpace="nowrap"
                      >
                        {item}
                      </Text>
                    </Marquee.Item>

                    {/* Render icon if it exists and isn't the last item (optional) */}
                    {icon && (
                      <Center
                        color="white"
                        fontSize="4xl"
                      >
                        {icon}
                      </Center>
                    )}
                  </Box>
                ))}
              </Marquee.Content>
            </Marquee.Viewport>
          </Marquee.Root>
        </Box>
      </Box>
    </AspectRatio>
  );
};

export default Ticker;