import { Box, Container, Stack, Heading, Text, Button, HStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle?: string;
  description: string;
  ctaButtons?: Array<{
    label: string;
    path: string;
    variant?: 'solid' | 'outline';
  }>;
}

const Hero = ({
  title,
  subtitle,
  description,
  ctaButtons,
}: HeroProps) => {
  return (
    <Box
      as="section"
      bg="bg.default"
      py={{ base: 16, md: 24 }}
      borderBottomWidth="1px"
      borderBottomColor="border.default"
    >
      <Container maxW="1100px">
        <Stack gap={6} maxW="800px">
          {subtitle && (
            <Text
              fontSize="sm"
              fontWeight="600"
              color="fg.muted"
              textTransform="uppercase"
              letterSpacing="wide"
            >
              {subtitle}
            </Text>
          )}

          <Heading
            as="h1"
            fontSize={{ base: '42px', md: '56px', lg: '64px' }}
            fontWeight="700"
            lineHeight="tight"
            color="fg.default"
          >
            {title}
          </Heading>

          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            lineHeight="relaxed"
            color="fg.muted"
            maxW="700px"
          >
            {description}
          </Text>

          {ctaButtons && ctaButtons.length > 0 && (
            <HStack gap={4} pt={2}>
              {ctaButtons.map((btn) => (
                <RouterLink key={btn.path} to={btn.path}>
                  <Button
                    size="lg"
                    fontWeight="600"
                    fontSize="sm"
                    bg={btn.variant === 'outline' ? 'transparent' : 'brand.default'}
                    color={btn.variant === 'outline' ? 'fg.default' : 'white'}
                    borderWidth={btn.variant === 'outline' ? '1px' : '0'}
                    borderColor={btn.variant === 'outline' ? 'border.default' : 'transparent'}
                    _hover={{
                      bg: btn.variant === 'outline' ? 'bg.muted' : 'brand.hover',
                    }}
                    transition="all 0.2s"
                    px={6}
                    py={3}
                  >
                    {btn.label}
                  </Button>
                </RouterLink>
              ))}
            </HStack>
          )}
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
