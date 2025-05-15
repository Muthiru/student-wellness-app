import React from 'react';
import { Box, Flex, Heading, Button, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <Box as="header" bg="teal.500" color="white" px={4} py={3}>
      <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
        <Link to="/">
          <Heading size="md">Student Wellness Hub</Heading>
        </Link>
        <HStack spacing="4">
          <Link to="/resources">
            <Button variant="ghost" colorScheme="whiteAlpha">Resources</Button>
          </Link>
          <Link to="/emergency">
            <Button colorScheme="red">Emergency Help</Button>
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;