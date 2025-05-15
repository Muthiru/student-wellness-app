import React from 'react';
import { 
  Box, 
  Heading, 
  Text, 
  Container, 
  SimpleGrid,
  Button,
  VStack,
  useColorMode,
  Image
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { categories } from '../data/resources/mentalHealthResources';

const HomePage: React.FC = () => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === 'light' ? 'blue.50' : 'blue.900';

  return (
    <Box>
      {/* Hero Section */}
      <Box bg={bgColor} py={12} px={4}>
        <Container maxW="1200px">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing="10">
            <VStack align="flex-start" spacing="5">
              <Heading size="xl">Supporting Your Mental Wellbeing</Heading>
              <Text fontSize="lg">
                Access trusted resources to help you navigate the challenges of student life
                at John Paul II Catholic University of Lublin.
              </Text>
              <Link to="/resources">
                <Button colorScheme="teal" size="lg">
                  Explore Resources
                </Button>
              </Link>
            </VStack>
            <Box position="relative" height="300px">
              {/* Placeholder image - replace with an actual image when available */}
              <Box 
                bg="gray.300" 
                h="300px" 
                borderRadius="md" 
                backgroundImage="url('https://images.unsplash.com/photo-1605106702734-205df224ecce?q=80&w=700')"
                backgroundSize="cover"
                backgroundPosition="center"
              />
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Featured Categories */}
      <Container maxW="1200px" py={12}>
        <Heading size="lg" mb={6}>How can we help you today?</Heading>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing="8">
          {categories.map((category) => (
            <Box 
              key={category.id} 
              p={5} 
              shadow="md" 
              borderWidth="1px" 
              borderRadius="lg"
              _hover={{ shadow: 'lg', transform: 'translateY(-5px)' }}
              transition="all 0.3s"
            >
              <Heading size="md" mb={2}>{category.name}</Heading>
              <Text color="gray.600" mb={4}>{category.description}</Text>
              <Link to={`/resources?category=${category.id}`}>
                <Button colorScheme="blue" size="sm">
                  Explore
                </Button>
              </Link>
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      {/* Daily Wellness Tip */}
      <Box bg="green.50" py={8} px={4}>
        <Container maxW="1200px">
          <Heading size="md" mb={2}>Daily Wellness Tip</Heading>
          <Text fontSize="lg" fontStyle="italic">
            "Take five minutes today to practice deep breathing. Inhale for 4 counts, hold for 4, 
            and exhale for 6. This simple practice can help reduce your stress response."
          </Text>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;