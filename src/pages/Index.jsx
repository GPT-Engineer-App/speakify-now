import React, { useState } from "react";
import { Box, Heading, Text, Textarea, Button, Select, Flex, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Image, Checkbox } from "@chakra-ui/react";
import { FaPlay, FaPause, FaStop } from "react-icons/fa";

const Index = () => {
  const [text, setText] = useState("");
  const [voice, setVoice] = useState("male");
  const [speed, setSpeed] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleVoiceChange = (e) => {
    setVoice(e.target.value);
  };

  const handleSpeedChange = (value) => {
    setSpeed(value);
  };

  const handleGenerate = () => {};

  return (
    <Box maxWidth="800px" margin="auto" padding={8} borderWidth={1} borderColor="black">
      <Heading as="h1" size="2xl" marginBottom={8}>
        Text to Speech Generator
      </Heading>

      <Textarea value={text} onChange={handleTextChange} placeholder="Enter your text here..." size="lg" marginBottom={4} />
      <Flex alignItems="center" marginBottom={4}>
        <Text marginRight={4}>Voice:</Text>
        <Select value={voice} onChange={handleVoiceChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Select>
      </Flex>
      <Flex direction="column" marginBottom={8}>
        <Flex alignItems="center" marginBottom={4}>
          <Text marginRight={4}>Stability:</Text>
          <Slider defaultValue={0.5} min={0} max={1} step={0.1}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Flex>
        <Flex alignItems="center" marginBottom={4}>
          <Text marginRight={4}>Similarity:</Text>
          <Slider defaultValue={0.5} min={0} max={1} step={0.1}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Flex>
        <Flex alignItems="center" marginBottom={4}>
          <Text marginRight={4}>Style Exaggeration:</Text>
          <Slider defaultValue={0.5} min={0} max={1} step={0.1}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Flex>
        <Checkbox marginLeft={4}>Speaker boost</Checkbox>
      </Flex>
      <Button colorScheme="blue" onClick={handleGenerate} isDisabled={!text}>
        Generate
      </Button>
    </Box>
  );
};

export default Index;
