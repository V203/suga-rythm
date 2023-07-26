/* eslint-disable @typescript-eslint/no-explicit-any */
import { Image, Button, Text, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, DrawerCloseButton, Card, CardHeader, CardFooter, CardBody, Heading, Spinner, Stack, DrawerFooter, Flex, Badge, Box, Divider } from "@chakra-ui/react"
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import React, { useContext } from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import ProductsContext from "../context/ProductContext";
import { TDoughnut } from "../Products";
import { useNavigate } from "react-router-dom";



const ViewCart = () => {
    const navigate = useNavigate();
    const handleClick =()=> {
        onClose(onClose);
        navigate("/checkout")
    }
    const { isOpen, onClose, cart, handleClickAdd, handleClickSub, cartQTYItems,cartTotal } = useContext<unknown | any>(ProductsContext);
    
    return (
        <>
            <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton color={"white"} />
                    <DrawerHeader borderBottomWidth='1px' bgGradient={"linear(to-b,brown,#E85298,#FF0080,brown)"} mb={".5em"} color={"white"}><Box fontFamily={"laila"} fontSize={"1xl"} fontStyle={"oblique"}   w={"fit-content"} p={".2em"}>Cart Total <Box color={"green"}>{"R"+cartTotal}</Box> </Box></DrawerHeader>
                    <DrawerBody>
                        {cart.length != 0 ? cart.map((el: TDoughnut) => {
                            return (
                                <Card borderTopRadius={"5px"} mt={".5em"} size='xs' >
                                    <CardHeader textAlign={"center"} borderTopRadius={"5px"} bgGradient={"linear(to-bl,pink.300,orange.300,pink,brown)"} color={"white"}>
                                        <Heading size={"sx"}>{el.name + " Doughnut"} </Heading>
                                    </CardHeader>
                                    <CardBody boxShadow={"0px 0px 14px pink"}>
                                        <Canvas >
                                            <ambientLight />
                                            <OrbitControls />
                                            <ViewModel url={el.doughnut_url} />
                                        </Canvas>
                                    </CardBody>
                                    <CardFooter m={".3em"} border={"1px solid pink"} borderRadius={"3px"} boxShadow={"1px 2px 14px pink"}color={"grey"}>
                                        <Stack m={".5em"} >
                                            <Text>
                                                In cart : {el.qty}
                                            </Text>
                                            <Text>
                                                SubTotal: {el.grand_total().toFixed(2)}
                                            </Text>
                                            
                                            <Flex gap={3}>
                                                <Button boxShadow={"3px 2px 4px pink inset"} w={"1.5"} size={"xs"} colorScheme={"pink"} onClick={() => handleClickSub(el.name)}>
                                                    <h1>
                                                        -
                                                    </h1>
                                                </Button>

                                                <Button boxShadow={"3px 2px 4px pink inset"} w={"1.5"} size={"xs"} colorScheme={"pink"} onClick={() => handleClickAdd(el.name)}>
                                                    <h1>
                                                        +
                                                    </h1>
                                                </Button>
                                            </Flex>

                                        </Stack>

                                    </CardFooter>

                                </Card>
                            )
                        }) : <Spinner size={"lg"} color='red.500' />}
                    </DrawerBody >
                    <DrawerFooter bgGradient={"linear(to-b,brown,#E85298,#FF0080,brown)"}>

                        <Button bg={"purple"} onClick={handleClick}   >
                            <Flex gap={1} alignItems={"center"} onClick={onClose} justifyContent={"center"}>
                                <Image my={"1em"} h={"2.5em"} w={"2.5em"} src={"./sugaRythmCart.svg"} />
                                <Text fontSize={"1.5em"} color={"whitesmoke"}>
                                    Checkout
                                </Text>
                                <Badge alignContent={"center"} p={1} justifyItems={"center"} boxShadow={"3px 2px 4px black inset"} justifyContent={"center"} color={"white"} borderRadius={"50%"} w={"2.2em"} h={"2.2em"} bg={"green"}>
                                    <Text fontSize={"1.5em"} >
                                        {cartQTYItems}
                                    </Text>
                                </Badge>
                            </Flex>
                        </Button>

                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}


export default ViewCart


type GLTFModelProps = {
    url: string;
};


// const GLTFModel: React.FC<GLTFModelProps> = ({ url }) => {
//   const gltf = useGLTF(url);
//   return <primitive object={gltf.scene} />;
// };







const ViewModel: React.FC<GLTFModelProps> = ({ url }) => {

    const gltf = useLoader(GLTFLoader, url);
    console.log(gltf);
    gltf.scene.scale["x"] = 30;
    gltf.scene.scale["y"] = 30
    gltf.scene.scale["z"] = 30


    return <primitive object={gltf.scene} />;
};
useGLTF.preload("./plain_doughnut.glb");