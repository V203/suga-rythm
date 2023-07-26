import { Button, Box, Heading, Stack, Text, Image, HStack } from "@chakra-ui/react"

import { useNavigate } from "react-router-dom";

const Confirmed = () => {
    
    const navigate = useNavigate();

    const handleclick = (e: React.FormEvent) => {
        e.preventDefault();
        navigate("/")
        window.location.reload()
    }

    const handleClickHome = (e: React.FormEvent) => {
        e.preventDefault();
        navigate("/shop")
    }
    return (
        
        <Box alignItems={"center"} justifyContent={"center"} >
                
                <Stack h={"30em"} m={"2em"} borderRadius={"1em"} bg={"pink"} alignItems={"center"} justifyContent={"center"}>
                    <Heading fill={"Background"} color={"whitesmoke"}>
                        Your order has been Placed
                    </Heading>
                    <Image src={"./shoppingbagI.svg"} />

                    <Text>
                        Thank you for your support!
                    </Text>
                    <HStack>
                        <Button onClick={handleClickHome} w={"12em"} colorScheme={"blue"} size={"xs"}>
                            Continue Shopping
                        </Button>

                        <Button onClick={handleclick} w={"12em"} colorScheme={"red"} size={"xs"}>
                            Exit
                        </Button>
                    </HStack>
                </Stack>

        
            </Box>
    )
}


export default Confirmed;