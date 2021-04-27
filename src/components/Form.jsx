import React, {useState, useEffect} from 'react';
//import useSWR from "swr";
import axios from "axios";
import {
  FormControl,
  Input,
  IconButton,
  Flex,
  Center,
  Button
} from '@chakra-ui/react';
import { SearchIcon, ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

import Grid from './Grid';

/**
 * Bij het gebruik van swr
 */
// const fetcher = url => axios.get(url).then(res => res.data);

function Form() {
    const[search, setSearch] = useState('')
    const[data, setData] = useState({})
    const[error, setError] = useState()
    const[allPokemon, setAllPokemon] = useState()


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
        .finally(() => {
          setSearch("")
        })
    }

      useEffect(() => {
        if (allPokemon){
        axios.get(allPokemon)
        .then(resp => {
            setData(resp.data)
        })
        .catch(error => {
            setError(error)
        })
        }
      },[allPokemon])

    const handleClickNext = () => {
      setAllPokemon(data.next)
    }

    const handleClickPrevious = () => {
      setAllPokemon(data.previous)
    }


    console.log(data)
    
    return (
        <>
        <Center>
          
          <FormControl border="1px" width="80%">
          <form onSubmit={handleFormSubmit}>
            <Flex height={20} align="center">
              <Input value={search} placeholder="Search for Pokémon" ml="5" onChange={e => setSearch(e.target.value)}/>
              <Input display="none" type="submit" />
              <IconButton
                aria-label="icon"
                icon={<SearchIcon />}
                size="md"
                mx="5"
                onClick={handleFormSubmit}
              />
              <Button mr="5"
                      onClick={() => setAllPokemon(`https://pokeapi.co/api/v2/pokemon`)}>
                Get All Pokemon
              </Button>
            </Flex>
          </form>
          </FormControl>
          
          
          
        </Center>
        <Center my="5">
        {error && <h1>De pokemon bestaat niet / De naam is fout geschreven</h1>}
        </Center>
        {data.name && <Grid data={data}/>}
        <Center flexDirection="column">
        {data.count && (
          <>
          {data.results.map((pokemon) => <Link to={`/detail/${pokemon.name}`}><p>{pokemon.name}</p></Link>)}
          <Flex>
            {data.previous && 
            <IconButton 
            aria-label="icon"
            icon={<ArrowBackIcon />}
            size="md"
            mr="2"
            onClick={handleClickPrevious}
            />}
            <IconButton
            aria-label="icon"
            icon={<ArrowForwardIcon />}
            size="md"
            onClick={handleClickNext}
            />
            
          </Flex>
          </>
        )}
        </Center>
        </>
    )
}

export default Form
