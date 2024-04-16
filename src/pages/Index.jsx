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

  const handlePlay = () => {
    setIsPlaying(true);
    // TODO: Implement text-to-speech functionality
  };

  const handlePause = () => {
    setIsPlaying(false);
    // TODO: Implement pause functionality
  };

  const handleStop = () => {
    setIsPlaying(false);
    // TODO: Implement stop functionality
  };

  return (
    <Box maxWidth="800px" margin="auto" padding={8}>
      <Heading as="h1" size="2xl" marginBottom={8}>
        Text to Speech Generator
      </Heading>
      <Image src="https://images.unsplash.com/photo-1642764984371-cc6185b05bbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZXh0JTIwdG8lMjBzcGVlY2glMjBpbGx1c3RyYXRpb258ZW58MHx8fHwxNzEzMjU5Mzk0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Text to Speech" marginBottom={8} />
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
      <Flex>
        <Button leftIcon={<FaPlay />} colorScheme="blue" marginRight={4} onClick={handlePlay} isDisabled={!text}>
          {isPlaying ? "Playing" : "Play"}
        </Button>
        <Button leftIcon={<FaPause />} onClick={handlePause} isDisabled={!isPlaying}>
          Pause
        </Button>
        <Button leftIcon={<FaStop />} colorScheme="red" marginLeft={4} onClick={handleStop} isDisabled={!isPlaying}>
          Stop
        </Button>
      </Flex>
    </Box>
  );
};

export default Index;
