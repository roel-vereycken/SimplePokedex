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
import {useHistory} from 'react-router-dom';
  

function Grid({data}) {
  const{id, types, name} = data
  const history = useHistory()

  const handleRowClick = () => {
    history.push(`/detail/${name}`)
  }

    return (
        <Center>
          <Table variant="simple" size="lg" width="80%">
            <Thead>
              <Tr>
                <Th>Number</Th>
                <Th>Name</Th>
                <Th>Type</Th>
                {types && types.length > 1 && <Th>Type 2</Th>}
              </Tr>
            </Thead>
            <Tbody>
              <Tr style={{cursor:'pointer'}} onClick={handleRowClick}>
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
