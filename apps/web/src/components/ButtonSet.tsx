import type { ReactNode } from "react";
import { Button, VStack, Link } from "@chakra-ui/react";

interface NavItem {
  title: string;
  color: string;
  url: string;
  icon: ReactNode;
}

interface Props {
  items: NavItem[];
}

const ButtonSet = ({ items }: Props) => {
  return (
    <VStack w="full" gap={2}>
      {items.map((item) => (
        <Button
          key={item.url}
          asChild
          width="full"
          variant="solid"
          colorPalette={item.color} 
          _hover={{ opacity: 0.9 }}
        >
          <Link
            fontSize="1xl"
            href={item.url}
            _hover={{ textDecoration: "none" }}
          >
            {item.icon}
            {item.title}
          </Link>
        </Button>
      ))}
    </VStack>
  );
};

export default ButtonSet;