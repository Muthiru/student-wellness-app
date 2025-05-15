import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Heading, 
  Text, 
  Container, 
  SimpleGrid, 
  Input, 
  InputGroup, 
  InputLeftAddon,
  Stack,
  Badge,
  HStack,
  VStack,
  Select,
  Button,
  Link as ChakraLink
} from '@chakra-ui/react';
import { SearchIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import { resources, categories, Resource } from '../data/resources/mentalHealthResources';
import { Link } from 'react-router-dom';

const ResourcesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredResources, setFilteredResources] = useState<Resource[]>(resources);

  // Filter resources based on search query and category
  useEffect(() => {
    let result = resources;
    
    // Filter by category if one is selected
    if (selectedCategory) {
      result = result.filter(resource => 
        resource.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }
    
    // Filter by search query if one exists
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(resource => 
        resource.title.toLowerCase().includes(query) || 
        resource.description.toLowerCase().includes(query) ||
        resource.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    setFilteredResources(result);
  }, [searchQuery, selectedCategory]);

  return (
    <Container maxW="1200px" py={8}>
      <Heading mb={2}>Wellness Resources</Heading>
      <Text mb={8}>Browse our collection of mental health and wellness resources</Text>
      
      {/* Search and filters */}
      <Stack direction={{ base: 'column', md: 'row' }} mb={8} spacing="4">
        <InputGroup>
          <InputLeftAddon>
            <SearchIcon color="gray.500" />
          </InputLeftAddon>
          <Input 
            placeholder="Search resources" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </InputGroup>
        
        <Select 
          placeholder="All Categories"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map(category => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </Select>
      </Stack>
      
      {/* Results count */}
      <Text mb={4} fontWeight="medium">
        Showing {filteredResources.length} {filteredResources.length === 1 ? 'resource' : 'resources'}
      </Text>

      {/* Resource list */}
      {filteredResources.length > 0 ? (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="6">
          {filteredResources.map(resource => (
            <Box 
              key={resource.id} 
              p={5} 
              shadow="md" 
              borderWidth="1px" 
              borderRadius="lg"
              _hover={{ shadow: 'lg' }}
              transition="all 0.2s"
            >
              <VStack align="start" spacing="3">
                <Heading size="md">{resource.title}</Heading>
                <Text>{resource.description}</Text>
                
                {/* Category badge */}
                <Badge colorScheme={
                  resource.category === 'Stress' ? 'red' :
                  resource.category === 'Sleep' ? 'blue' :
                  resource.category === 'Mindfulness' ? 'green' :
                  resource.category === 'Depression' ? 'purple' :
                  resource.category === 'Anxiety' ? 'orange' :
                  resource.category === 'Relationships' ? 'pink' :
                  resource.category === 'Study' ? 'cyan' : 'gray'
                }>
                  {resource.category}
                </Badge>
                
                <HStack>
                  <Text fontSize="sm" color="gray.500">Source:</Text>
                  <Text fontSize="sm">
                    {resource.sourceUrl ? (
                      <ChakraLink href={resource.sourceUrl} isExternal>
                        {resource.source} <ExternalLinkIcon mx="2px" />
                      </ChakraLink>
                    ) : resource.source}
                  </Text>
                </HStack>
                
                <Text fontSize="sm" color="gray.500">{resource.timeToRead} read</Text>
                
                <HStack wrap="wrap">
                  {resource.tags.map(tag => (
                    <Badge key={tag} colorScheme="teal" variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </HStack>

                <Link to={`/resource/${resource.id}`}>
                  <Button size="sm" colorScheme="blue" mt={2}>
                    Read More
                  </Button>
                </Link>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      ) : (
        <Box textAlign="center" py={10}>
          <Heading size="md" mb={3}>No matching resources found</Heading>
          <Text>Try adjusting your search or filter criteria</Text>
          <Button mt={4} onClick={() => {
            setSearchQuery('');
            setSelectedCategory('');
          }}>
            Clear filters
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default ResourcesPage;