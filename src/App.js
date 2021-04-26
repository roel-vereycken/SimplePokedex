import React from 'react';

import Form from './components/Form';

import { ChakraProvider, Heading, Center } from '@chakra-ui/react';

function App() {
  return (
    <>
      <ChakraProvider resetCSS>
        <Center>
          <Heading mb={22}>Simple Pokédex</Heading>
        </Center>

        <Form />
      </ChakraProvider>
    </>
  );
}

export default App;
