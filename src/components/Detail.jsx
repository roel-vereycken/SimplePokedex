import React from 'react'
import axios from'axios'
import useSWR from "swr";
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import {
    Center,
    Box,
    Flex,
    Input
  } from '@chakra-ui/react';

const fetcher = url => axios.get(url).then(res => res.data);

function Detail() {
    const params = useParams()
    const {id, name} = params

    const { data, error } = useSWR(
            `https://pokeapi.co/api/v2/pokemon/${id}`,
            fetcher
          );

    console.log(data)  

    return (
        <>
            <Link to="/">
                <p>Back to Search</p>
            </Link>
            <Center>
            {data && 
            (<> 
                <Flex flexDirection="column">
                    <Box>
                        <img src={data.sprites.front_default}/>
                    </Box>
                    <Box>
                        <ul>
                            <li>ID: {id}</li>
                            <li>NAME: {name}</li>
                            <li>WEIGHT: {data.weight}lbs</li>
                        </ul>
                    </Box>
                </Flex>
            </>)
            }
            </Center>
        </>
    )
}

export default Detail
