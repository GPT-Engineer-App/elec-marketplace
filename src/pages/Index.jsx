import { Box, Button, Container, Flex, Heading, Image, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justify="space-between" align="center">
        <Heading as="h1" size="lg">ElectroShop</Heading>
        <Flex>
          <Link href="#" p={2}>Home</Link>
          <Link href="#" p={2}>Products</Link>
          <Link href="#" p={2}>About Us</Link>
          <Link href="#" p={2}>Contact</Link>
        </Flex>
      </Flex>

      {/* Hero Section */}
      <Box as="section" position="relative" height="60vh" bg="gray.700">
        <Image src="/images/hero-banner.jpg" alt="Hero Banner" objectFit="cover" width="100%" height="100%" />
        <Flex position="absolute" top="0" left="0" width="100%" height="100%" align="center" justify="center" bg="rgba(0, 0, 0, 0.5)">
          <VStack spacing={4} color="white">
            <Heading as="h2" size="xl">Welcome to ElectroShop</Heading>
            <Text fontSize="lg">Your one-stop shop for the latest electronics</Text>
            <Button colorScheme="teal" size="lg">Shop Now</Button>
          </VStack>
        </Flex>
      </Box>

      {/* Featured Products Section */}
      <Box as="section" py={10}>
        <Heading as="h3" size="lg" textAlign="center" mb={6}>Featured Products</Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={10}>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Product 1" />
            <Box p={6}>
              <Heading as="h4" size="md">Product 1</Heading>
              <Text mt={4}>Description of product 1.</Text>
              <Button mt={4} colorScheme="teal">Buy Now</Button>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Product 2" />
            <Box p={6}>
              <Heading as="h4" size="md">Product 2</Heading>
              <Text mt={4}>Description of product 2.</Text>
              <Button mt={4} colorScheme="teal">Buy Now</Button>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Product 3" />
            <Box p={6}>
              <Heading as="h4" size="md">Product 3</Heading>
              <Text mt={4}>Description of product 3.</Text>
              <Button mt={4} colorScheme="teal">Buy Now</Button>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" py={10}>
        <Flex justify="space-between" align="center" direction={["column", "row"]}>
          <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
          <Flex>
            <Link href="#" p={2}><FaFacebook size="24" /></Link>
            <Link href="#" p={2}><FaTwitter size="24" /></Link>
            <Link href="#" p={2}><FaInstagram size="24" /></Link>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;