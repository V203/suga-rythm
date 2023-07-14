import { Button, Stack, Text, Image, HStack, Flex, SimpleGrid, Box } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
const LandingPageComponent = () => {

    const navigate = useNavigate();

    return (
        <>
            <SimpleGrid minChildWidth={"7em"} borderRadius={"5px"} boxShadow={"2px -7px 18px pink"} bg={"whitesmoke"} h={"80%"} m={"2em"} columnGap={"2em"} columns={2}>






                <Stack m={"1em"} p={"1em"} justifyContent={"center"} alignItems={"center"}>
                    <Image h={"50vh"} src={"./sceneDougnut.png"} />
                    <HStack columnGap={0} width={"100%"} >
                        <Image m={"0em"} h={"5em"} w={"40em"} src={"./sprinkleDougnut.png"} />
                        <Image h={"5em"} m={"1em"} w={"40em"} src={"./plainDougnut.png"} />
                    </HStack>
                    <Button boxShadow={"3px 2px 4px pink inset"} w={"7em"} size={"md"} onClick={() => navigate("/shop")} color={"whitesmoke"} bg={"pink.500"}>
                        Shop Now

                    </Button>


                </Stack>

                <HStack>
                    <Box
                        width="1px"
                        height="98%" // Adjust the height as needed
                        bg="pink.500" // Adjust the background color as needed
                        mx={4} // Adjust the horizontal margin as needed
                        boxShadow={"12px -17px 18px pink.500"}
                    />
                    <Flex textAlign={"center"} >


                        <Text color={"pink.500"} fontFamily={'Rubik Bubbles'} fontSize={"3em"}>
                            Indulge in Heavenly Rings of Delight!
                        </Text>


                    </Flex>
                </HStack>


            </SimpleGrid>


        </>)
}


export default LandingPageComponent