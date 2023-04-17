import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      backgroundColor="white"
      borderRadius="lg"
      boxShadow="lg"
      padding="4"
      width="100%"
    >
      <Image
       rounded={"md"}
        src={imageSrc}
      />
      <VStack
        alignItems="flex-start"
        justifyContent="flex-start"
        padding="4"
        width="100%"
      >
        <Heading as="h3" fontSize="xl" fontWeight="bold" color={"black"}>
          {title}
        </Heading>
        <Text color="gray.500">{description}</Text>
        <HStack>
          <Text fontWeight="bold" color={"black"}>
            See more
          </Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" color="black"/>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
