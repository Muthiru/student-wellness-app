import React from 'react';
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  Badge, 
  HStack, 
  Link as ChakraLink,
  Button,
  VStack,
  Divider
} from '@chakra-ui/react';
import { ExternalLinkIcon, ArrowBackIcon } from '@chakra-ui/icons';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { resources } from '../data/resources/mentalHealthResources';

const ResourceDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const resource = resources.find(r => r.id === parseInt(id || '0'));
  
  if (!resource) {
    return (
      <Container maxW="800px" py={8}>
        <VStack spacing={4}>
          <Heading>Resource Not Found</Heading>
          <Text>We couldn't find the resource you're looking for.</Text>
          <Button 
            leftIcon={<ArrowBackIcon />} 
            onClick={() => navigate('/resources')}
          >
            Back to Resources
          </Button>
        </VStack>
      </Container>
    );
  }
  
  // Convert markdown-style content to simple HTML
  const formatContent = (content: string) => {
    return content
      .split('\n\n')
      .map((paragraph, i) => {
        // Handle headings
        if (paragraph.startsWith('## ')) {
          return <Heading key={i} as="h2" size="md" mt={6} mb={3}>{paragraph.substring(3)}</Heading>;
        }
        if (paragraph.startsWith('### ')) {
          return <Heading key={i} as="h3" size="sm" mt={5} mb={2}>{paragraph.substring(4)}</Heading>;
        }
        
        // Handle lists
        if (paragraph.includes('- ')) {
          const items = paragraph.split('- ').filter(Boolean);
          return (
            <Box key={i} my={3}>
              {items.map((item, j) => (
                <HStack key={j} alignItems="flex-start" spacing={2} mb={2}>
                  <Text>•</Text>
                  <Text>{item.trim()}</Text>
                </HStack>
              ))}
            </Box>
          );
        }
        
        // Regular paragraph
        return <Text key={i} mb={4}>{paragraph}</Text>;
      });
  };
  
  return (
    <Container maxW="800px" py={8}>
      {/* Back button */}
      <Link to="/resources">
        <Button leftIcon={<ArrowBackIcon />} variant="ghost" mb={6}>
          Back to Resources
        </Button>
      </Link>
      
      {/* Title and meta info */}
      <Heading size="lg" mb={3}>{resource.title}</Heading>
      
      <HStack spacing={3} mb={6} wrap="wrap">
        <Badge colorScheme={
          resource.category === 'Stress' ? 'red' :
          resource.category === 'Sleep' ? 'blue' :
          resource.category === 'Mindfulness' ? 'green' :
          resource.category === 'Depression' ? 'purple' :
          resource.category === 'Anxiety' ? 'orange' :
          resource.category === 'Relationships' ? 'pink' :
          resource.category === 'Study' ? 'cyan' : 'gray'
        } fontSize="sm">
          {resource.category}
        </Badge>
        
        <Text fontSize="sm" color="gray.500">{resource.timeToRead} read</Text>
        
        <Text fontSize="sm" color="gray.600">
          Source: {resource.sourceUrl ? (
            <ChakraLink href={resource.sourceUrl} isExternal color="blue.500">
              {resource.source} <ExternalLinkIcon mx="2px" />
            </ChakraLink>
          ) : resource.source}
        </Text>
      </HStack>
      
      {/* Description */}
      <Text fontSize="lg" fontStyle="italic" mb={6}>
        {resource.description}
      </Text>
      
      <Divider mb={6} />
      
      {/* Main content */}
      <Box>
        {formatContent(resource.content)}
      </Box>
      
      {/* Tags */}
      <Box mt={8} pt={6} borderTop="1px solid" borderColor="gray.200">
        <Text fontWeight="medium" mb={2}>
          Related Topics:
        </Text>
        <HStack spacing={2} wrap="wrap">
          {resource.tags.map(tag => (
            <Badge key={tag} colorScheme="teal" variant="outline">
              {tag}
            </Badge>
          ))}
        </HStack>
      </Box>
    </Container>
  );
};

export default ResourceDetailPage;