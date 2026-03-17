import {
  Box,
  Stack,
  Heading,
  Text,
  HStack,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import type { BlogPost } from '@/data/posts';

interface ArticleCardProps {
  post: BlogPost;
}

const ArticleCard = ({ post }: ArticleCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <RouterLink to={`/blog/${post.slug}`}>
      <Box
        p={{ base: 5, md: 6 }}
        borderWidth="1px"
        borderColor="border.default"
        borderRadius="sm"
        transition="all 0.2s"
        bg="bg.default"
        cursor="pointer"
        display="block"
        _hover={{
          borderColor: 'brand.default',
          bg: 'bg.muted',
          transform: 'translateY(-2px)',
        }}
      >
        <Stack gap={3}>
          {/* Meta Info */}
          <HStack gap={3} fontSize="sm" color="fg.muted">
            <Text>{formatDate(post.date)}</Text>
            {post.category && (
              <>
                <Box width="4px" height="4px" borderRadius="full" bg="border.default" />
                <Text fontWeight="500">{post.category}</Text>
              </>
            )}
            {post.author && (
              <>
                <Box width="4px" height="4px" borderRadius="full" bg="border.default" />
                <Text fontWeight="500">{post.author}</Text>
              </>
            )}
          </HStack>

          {/* Title */}
          <Heading
            as="h3"
            fontSize={{ base: 'lg', md: 'xl' }}
            fontWeight="600"
            color="fg.default"
            lineHeight="snug"
            css={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 3,
              overflow: 'hidden',
            }}
          >
            {post.title}
          </Heading>

          {/* Description */}
          <Text
            fontSize="base"
            color="fg.muted"
            lineHeight="relaxed"
            css={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2,
              overflow: 'hidden',
            }}
          >
            {post.description}
          </Text>

          {/* Read More Link */}
          <Text
            fontSize="sm"
            fontWeight="600"
            color="brand.default"
            mt={2}
          >
            Read Article →
          </Text>
        </Stack>
      </Box>
    </RouterLink>
  );
};

export default ArticleCard;
