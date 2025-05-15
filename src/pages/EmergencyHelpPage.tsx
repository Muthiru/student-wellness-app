import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Divider,
  Link as ChakraLink,
  Card,
  CardHeader,
  CardBody,
  Badge
} from '@chakra-ui/react';
import { PhoneIcon, ExternalLinkIcon } from '@chakra-ui/icons';

interface EmergencyContact {
  id: number;
  name: string;
  description: string;
  phone: string;
  hours: string;
  website?: string;
  language?: string[];
  type: 'crisis' | 'campus' | 'community';
}

const emergencyContacts: EmergencyContact[] = [
  {
    id: 1,
    name: 'Emergency Services',
    description: 'Police, ambulance, and fire emergency services',
    phone: '112',
    hours: '24/7',
    type: 'crisis'
  },
  {
    id: 2,
    name: 'Centrum Wsparcia dla Osób w Kryzysie Psychicznym',
    description: 'National support center for people in mental crisis',
    phone: '800 70 2222',
    hours: '24/7',
    website: 'https://centrumwsparcia.pl/',
    language: ['Polish'],
    type: 'crisis'
  },
  {
    id: 3,
    name: 'Telefon Zaufania dla Młodzieży',
    description: 'Youth helpline for emotional support',
    phone: '116 111',
    hours: '24/7',
    website: 'https://116111.pl/',
    language: ['Polish'],
    type: 'crisis'
  },
  {
    id: 4,
    name: 'KUL Psychological Counseling Center',
    description: 'Free psychological support for KUL students',
    phone: '+48 81 445 40 45',
    hours: 'Mon-Fri 8:00-15:00',
    website: 'https://www.kul.pl/poradnia-psychologiczna,11322.html',
    language: ['Polish', 'English'],
    type: 'campus'
  },
  {
    id: 5,
    name: 'KUL Student Affairs Office',
    description: 'Support for student welfare and crisis situations',
    phone: '+48 81 445 42 16',
    hours: 'Mon-Fri 9:00-14:00',
    website: 'https://www.kul.pl/dział-spraw-studenckich,11439.html',
    language: ['Polish', 'English'],
    type: 'campus'
  },
  {
    id: 6,
    name: 'University Chaplaincy',
    description: 'Spiritual support and counseling for students',
    phone: '+48 81 445 40 12',
    hours: 'Mon-Fri 8:00-16:00',
    website: 'https://www.kul.pl/duszpasterstwo-akademickie,11361.html',
    language: ['Polish', 'English'],
    type: 'campus'
  },
  {
    id: 7,
    name: 'Lublin Mental Health Center',
    description: 'Psychiatric emergency services and counseling',
    phone: '+48 81 744 52 00',
    hours: '24/7 for emergencies',
    website: 'https://snzoz.lublin.pl/',
    language: ['Polish'],
    type: 'community'
  },
  {
    id: 8,
    name: 'Przychodnia Psychiatryczna Lublin',
    description: 'Mental health clinic providing psychiatric services',
    phone: '+48 81 747 57 67',
    hours: 'Mon-Fri 8:00-18:00',
    language: ['Polish'],
    type: 'community'
  },
  {
    id: 9,
    name: 'ITAKA Foundation - Crisis Intervention',
    description: 'Support for people in crisis and their families',
    phone: '+48 22 654 70 70',
    hours: 'Mon-Fri 8:00-20:00',
    website: 'https://www.itaka.org.pl/',
    language: ['Polish'],
    type: 'community'
  }
];

const EmergencyHelpPage: React.FC = () => {
  return (
    <Container maxW="1200px" py={8}>
      <Heading mb={3}>Emergency Mental Health Support in Lublin</Heading>
      
      <Alert status="error" variant="solid" mb={6} borderRadius="md">
        <AlertIcon />
        <Box>
          <AlertTitle fontSize="lg">In case of immediate danger</AlertTitle>
          <AlertDescription>
            If you or someone you know is in immediate danger of self-harm or suicide, 
            call emergency services (112) or go to your nearest emergency room immediately.
          </AlertDescription>
        </Box>
      </Alert>

      <Text fontSize="lg" mb={6}>
        If you're experiencing a mental health crisis or need urgent support as a student at 
        John Paul II Catholic University of Lublin, the following resources are available:
      </Text>

      {/* Crisis Resources */}
      <Heading size="md" mb={4}>Crisis Support</Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing="6" mb={8}>
        {emergencyContacts
          .filter(contact => contact.type === 'crisis')
          .map(contact => (
            <Card key={contact.id} variant="outline" borderColor="red.200">
              <CardHeader bg="red.50" pb={2}>
                <Heading size="md">{contact.name}</Heading>
              </CardHeader>
              <CardBody>
                <VStack align="start" spacing={2}>
                  <Text>{contact.description}</Text>
                  <HStack>
                    <PhoneIcon color="red.500" />
                    <Text fontWeight="bold">{contact.phone}</Text>
                  </HStack>
                  <Text fontSize="sm">Available: {contact.hours}</Text>
                  {contact.language && (
                    <HStack>
                      <Text fontSize="sm">Languages:</Text>
                      {contact.language.map(lang => (
                        <Badge key={lang} colorScheme="blue">{lang}</Badge>
                      ))}
                    </HStack>
                  )}
                  {contact.website && (
                    <ChakraLink href={contact.website} isExternal color="blue.500">
                      Visit Website <ExternalLinkIcon mx="2px" />
                    </ChakraLink>
                  )}
                  <Button 
                    as="a" 
                    href={`tel:${contact.phone.replace(/\s/g, '')}`}
                    colorScheme="red" 
                    size="sm" 
                    leftIcon={<PhoneIcon />} 
                    mt={2}
                  >
                    Call Now
                  </Button>
                </VStack>
              </CardBody>
            </Card>
          ))}
      </SimpleGrid>

      {/* Campus Resources - KUL Specific */}
      <Heading size="md" mb={4}>KUL University Resources</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="6" mb={8}>
        {emergencyContacts
          .filter(contact => contact.type === 'campus')
          .map(contact => (
            <Card key={contact.id} variant="outline">
              <CardHeader bg="blue.50" pb={2}>
                <Heading size="md">{contact.name}</Heading>
              </CardHeader>
              <CardBody>
                <VStack align="start" spacing={2}>
                  <Text>{contact.description}</Text>
                  <HStack>
                    <PhoneIcon color="blue.500" />
                    <Text fontWeight="bold">{contact.phone}</Text>
                  </HStack>
                  <Text fontSize="sm">Available: {contact.hours}</Text>
                  {contact.language && (
                    <HStack>
                      <Text fontSize="sm">Languages:</Text>
                      {contact.language.map(lang => (
                        <Badge key={lang} colorScheme="green">{lang}</Badge>
                      ))}
                    </HStack>
                  )}
                  {contact.website && (
                    <ChakraLink href={contact.website} isExternal color="blue.500">
                      More Information <ExternalLinkIcon mx="2px" />
                    </ChakraLink>
                  )}
                  <Button 
                    as="a" 
                    href={`tel:${contact.phone.replace(/\s/g, '')}`}
                    colorScheme="blue" 
                    size="sm" 
                    leftIcon={<PhoneIcon />} 
                    mt={2}
                  >
                    Call
                  </Button>
                </VStack>
              </CardBody>
            </Card>
          ))}
      </SimpleGrid>

      {/* Community Resources in Lublin */}
      <Heading size="md" mb={4}>Lublin Community Resources</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="6" mb={8}>
        {emergencyContacts
          .filter(contact => contact.type === 'community')
          .map(contact => (
            <Card key={contact.id} variant="outline">
              <CardHeader bg="green.50" pb={2}>
                <Heading size="md">{contact.name}</Heading>
              </CardHeader>
              <CardBody>
                <VStack align="start" spacing={2}>
                  <Text>{contact.description}</Text>
                  <HStack>
                    <PhoneIcon color="green.500" />
                    <Text fontWeight="bold">{contact.phone}</Text>
                  </HStack>
                  <Text fontSize="sm">Available: {contact.hours}</Text>
                  {contact.language && (
                    <HStack>
                      <Text fontSize="sm">Languages:</Text>
                      {contact.language.map(lang => (
                        <Badge key={lang} colorScheme="purple">{lang}</Badge>
                      ))}
                    </HStack>
                  )}
                  {contact.website && (
                    <ChakraLink href={contact.website} isExternal color="blue.500">
                      Visit Website <ExternalLinkIcon mx="2px" />
                    </ChakraLink>
                  )}
                  <Button 
                    as="a" 
                    href={`tel:${contact.phone.replace(/\s/g, '')}`}
                    colorScheme="green" 
                    size="sm" 
                    leftIcon={<PhoneIcon />} 
                    mt={2}
                  >
                    Call
                  </Button>
                </VStack>
              </CardBody>
            </Card>
          ))}
      </SimpleGrid>

      <Divider my={8} />

      <Box bg="gray.50" p={6} borderRadius="md">
        <Heading size="md" mb={4}>When to Seek Help</Heading>
        <Text mb={4}>
          It's important to recognize signs that you or someone you know may need urgent mental health support:
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
          <VStack align="start" spacing={2}>
            <Heading size="sm">Warning Signs:</Heading>
            <Text>• Talking about wanting to die or kill oneself</Text>
            <Text>• Looking for ways to kill oneself</Text>
            <Text>• Talking about feeling hopeless or having no purpose</Text>
            <Text>• Talking about feeling trapped or being in unbearable pain</Text>
            <Text>• Increasing use of alcohol or drugs</Text>
          </VStack>
          <VStack align="start" spacing={2}>
            <Heading size="sm">Additional Warning Signs:</Heading>
            <Text>• Withdrawing or feeling isolated</Text>
            <Text>• Showing rage or talking about seeking revenge</Text>
            <Text>• Displaying extreme mood swings</Text>
            <Text>• Having difficulty eating or sleeping</Text>
            <Text>• Acting anxious, agitated, or recklessly</Text>
          </VStack>
        </SimpleGrid>
        <Alert status="info" mt={6}>
          <AlertIcon />
          <Text>
            Remember that seeking help is a sign of strength, not weakness. The KUL community has resources to support you 
            through difficult times. Don't hesitate to reach out.
          </Text>
        </Alert>
      </Box>
      
      <Box mt={8} p={6} bg="blue.50" borderRadius="md">
        <Heading size="md" mb={3}>For International Students</Heading>
        <Text mb={4}>
          If you're an international student at KUL and need support in a language other than Polish:
        </Text>
        <VStack align="start" spacing={3}>
          <Text>• Contact the KUL International Relations Office: +48 81 445 41 91</Text>
          <Text>• The campus psychological counseling center offers services in English</Text>
          <Text>• For emergency situations, the European emergency number 112 has operators who speak English</Text>
          <Text>• The International SOS helpline: +44 20 8762 8008 (subscription required)</Text>
          <ChakraLink 
            href="https://www.kul.pl/international-students,21593.html" 
            isExternal 
            color="blue.500"
          >
            KUL International Student Support <ExternalLinkIcon mx="2px" />
          </ChakraLink>
        </VStack>
      </Box>
    </Container>
  );
};

export default EmergencyHelpPage;