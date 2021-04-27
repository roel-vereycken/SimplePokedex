import React, {useState} from 'react';
//import useSWR from "swr";
import axios from "axios";
import {
  FormControl,
  Input,
  IconButton,
  Flex,
  Center
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

import Grid from './Grid';

/**
 * Bij het gebruik van swr
 */
// const fetcher = url => axios.get(url).then(res => res.data);

function Form() {
    const[search, setSearch] = useState('')
    const[data, setData] = useState({})
    const[error, setError] = useState()


    /**
    * Bij het gebruik van swr
    */
    // const { data, error } = useSWR(
    //     shouldFetch ? `https://pokeapi.co/api/v2/pokemon/${search}` : null,
    //     fetcher
    //   );


    const handleFormSubmit = (e) => {
        e.preventDefault();
        setData({})
        setError()

        axios.get(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`)
        .then(resp => {
            setData(resp.data)
        })
        .catch(error => {
            setError(error)
        })
        .finally(() => setSearch(""))
        
    }
    
    
    return (
        <>
        <Center>
          
          <FormControl border="1px" width="80%">
          <form onSubmit={handleFormSubmit}>
            <Flex height={20} align="center">
              <Input placeholder="Search for Pokémon" ml="5" onChange={e => setSearch(e.target.value)}/>
              <Input display="none" type="submit" />
              <IconButton
                aria-label="icon"
                icon={<SearchIcon />}
                size="md"
                mx="5"
                onClick={handleFormSubmit}
                
              />
            </Flex>
          </form>
          </FormControl>
          
          
          
        </Center>
        <Center my="5">
        {error && <h1>De pokemon bestaat niet / De naam is fout geschreven</h1>}
        </Center>
        {data && <Grid data={data}/>}
        
        </>
    )
}

export default Form
