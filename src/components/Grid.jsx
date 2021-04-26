import React from 'react'
import {
    Center,
    Table,
    Tbody,
    Th,
    Thead,
    Tr,
    Td,
    
  } from '@chakra-ui/react';
  

function Grid({data}) {
  const{id, types, name} = data
  
    return (
        <Center>
          <Table variant="simple" size="lg" width="80%">
            <Thead>
              <Tr>
                <Th>Number</Th>
                <Th>Name</Th>
                <Th>Type</Th>
                <Th>Type 2</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>{id}</Td>
                <Td>{name}</Td>
                {types && types.map((row) => <Td>{row.type.name}</Td>)}
                
              </Tr>
            </Tbody>
          </Table>
        </Center>
    )
}

export default Grid
