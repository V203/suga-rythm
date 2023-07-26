import React from "react"
import ProductsContext from "../context/ProductContext";
import { useState, useContext } from "react";
import { Button, Popover, PopoverTrigger, PopoverContent, Input, InputGroup, InputLeftElement, Text, List, ListItem, Divider, Spacer, useDisclosure } from '@chakra-ui/react';
import { SearchIcon } from "@chakra-ui/icons";
import { TDoughnut } from "../Products";
import Services from "../Services";
import { motion, useAnimation } from 'framer-motion';



interface SearchPopoverProps {
    label: string;
}

const SearchPop: React.FC<SearchPopoverProps> = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const controls = useAnimation()
    const { product } = useContext<any>(ProductsContext);
    const { onOpen } = useDisclosure();
    const { services, searchQuery, setSearchQuery } = useContext<any>(ProductsContext);

    const startOpacity = () => {
        controls.start({ opacity: .5 })
    }

    const endOpacity = () => {
        controls.start({ opacity: 1 })
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        setSearchQuery(event.target.value);
    };

    const handleSearch = () => {

        console.log('Searching for:', searchQuery);
    };

    return (<Popover>
        <PopoverTrigger>
            <InputGroup size={"md"} justifyContent={"center"} alignItems={"center"}  >


                <Button mx={".5em"} value={searchQuery} borderRadius={"50%"} onChange={handleInputChange} size={"md"} placeholder={"Search..."} color={"pink.500"} background={"gray.200"} type={"button"}>

                    <SearchIcon >

                    </SearchIcon>



                </Button>
            </InputGroup>
        </PopoverTrigger>
        <PopoverContent p={4}>
            <InputGroup>
                <InputLeftElement  >
                    <SearchIcon color={"black"} />
                </InputLeftElement>
                <Input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleInputChange}

                />
            </InputGroup>
            {searchQuery != "" ? product.filter((el: TDoughnut) => el.name.toLowerCase().startsWith(searchQuery.toLowerCase().trim())).map((el: TDoughnut) => <List>
                    <ListItem color={"pink.500"} onClick={onOpen}>


                <motion.div onMouseEnter={startOpacity} onMouseLeave={endOpacity} initial={{ opacity: 1 }} animate={controls}>
                        <Text>{el.name + " "}</Text>
                        <Spacer />{"R" + el.price.toFixed(2)}
                        <Divider />
                </motion.div>
                    </ListItem>
            </List>
            ) : ""}

        </PopoverContent>


    </Popover>);
    {/* <InputGroup size={"xs"} mt={"auto"} mb={"auto"} >
                    <InputLeftElement  >
                        <SearchIcon color={"white"} />
                    </InputLeftElement>


                    <Input value={searchItem} onChange={handleSearchItem} variant='outline' mr={"1em"} size={"xs"} placeholder={"Search..."} color={"white"} background={"pink.400"} type={"search"} />

                    {searchItem !== "" ? product.filter((el: any) => el.name.includes(searchItem.toUpperCase())).map((el: any) => <VStack>


                        <Box zIndex={20} bg={"lightgrey"} width={"55%"} position={"static"}>

                            {el.name}
                        </Box>
                    </VStack>







                    ) : ""}


                </InputGroup> */}


}


export default SearchPop;