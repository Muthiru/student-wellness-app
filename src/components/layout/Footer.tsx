import React from 'react';
import { Box, Text, Link, HStack, Center } from '@chakra-ui/react';

const Footer: React.FC = () => {
  return (
    <Box as="footer" bg="gray.100" px={4} py={6} mt="auto">
      <Center>
        <HStack spacing="4">
          <Text>© 2025 Student Wellness Hub</Text>
          <Link href="/about">About</Link>
          <Link href="/disclaimer">Disclaimer</Link>
          <Link href="/privacy">Privacy</Link>
        </HStack>
      </Center>
      <Center mt={2}>
        <Text fontSize="sm" color="gray.600">
          This app is not a substitute for professional mental health services.
        </Text>
      </Center>
    </Box>
  );
};

export default Footer;