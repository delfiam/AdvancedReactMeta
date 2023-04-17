import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Delfi!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
      <Avatar
        size="2xl"
        name="Delfi"
        src="https://lh3.googleusercontent.com/a/AGNmyxZmRAcG2sRxmksY4y2vqrIJfZU75dOrv3sfUSPfvw=s96-c-rg-br100"
      />
      <Heading as="h1" size="md" color="white">
        {greeting}
      </Heading>
      <br></br>
      <Heading as="h3" size="lg" color="white">
        {bio1}
      </Heading>
      <Heading as="h2" size="lg" color="white">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
