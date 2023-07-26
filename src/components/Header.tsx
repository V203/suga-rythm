/* eslint-disable @typescript-eslint/no-explicit-any */

import {  Flex, HStack, Heading,  Spacer, Image } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import HoverEffect from "./HoverEffect";
import SearchPop from "./SearchPop";


const Header = () => {
    const navigate = useNavigate();
    
    return (<>

        <Flex zIndex={10} position={"fixed"} justifyContent={'center'} alignItems={"center"} left={0} top={0} right={0} bgGradient={"linear(to-b,brown,#E85298,#FF0080,brown)"} mb={".5em"}>
            <HStack >
                <HoverEffect>
                    <Image onClick={() => navigate("/")} w={"50px"} pl={".3em"} h={"50px"} src={"./sugaRythm.svg"} />

                </HoverEffect>
                <Heading as={"h3"} textShadow={"1px 6px 24px pink"} color={"white"}  >
                    Sugar Rhythm!
                </Heading>
            </HStack>
            <Spacer />
            <HStack>

            <SearchPop label="Search" />
               
            </HStack>
        </Flex >


    </>)
}

export default Header;