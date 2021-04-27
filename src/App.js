import React from 'react';

import Form from './components/Form';
import Detail from './components/Detail';

import { ChakraProvider, Heading, Center } from '@chakra-ui/react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <ChakraProvider resetCSS>
          <Route exact path="/">
            <Center>
              <Heading mb={22}>Simple Pokédex</Heading>
            </Center>

            <Form />
          </Route>
          <Route path="/detail/:name">
            <Detail />
          </Route>
        </ChakraProvider>
      </Router>
    </>
  );
}

export default App;
