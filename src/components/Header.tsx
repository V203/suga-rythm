import { SearchIcon } from "@chakra-ui/icons";
import { Flex,HStack, Heading, Input, InputGroup, InputLeftElement ,Spacer,Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom"; 

const Header = () => {
    const navigate = useNavigate();
    return (<>

        <Flex zIndex={10} position={"fixed"} justifyContent={'center'} alignItems={"center"} left={0} top={0} right={0} bgGradient={"linear(to-b,brown,#E85298,#FF0080,brown)"} mb={".5em"}>
            <HStack >
                <Image onClick={()=> navigate("/")} w={"50px"} pl={".3em"} h={"50px"} src={"./sugaRythm.svg"} />
                <Heading as={"h3"}  color={"white"}  >
                    Sugar Rhythm!
                </Heading>
            </HStack>
            <Spacer />
            <HStack>
                <InputGroup size={"xs"} mt={"auto"} mb={"auto"} >
                    <InputLeftElement  >
                        <SearchIcon color={"white"} />
                    </InputLeftElement>
                    <Input variant='outline' mr={"1em"}size={"xs"} placeholder={"Search..."} color={"white"} background={"pink.400"} type={"search"} />
                </InputGroup>
                
            </HStack>
        </Flex >


    </>)
}

export default Header;