/* eslint-disable @typescript-eslint/no-explicit-any */
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import { Canvas, useLoader, useFrame } from '@react-three/fiber';

import { Box, OrbitControls, useGLTF } from '@react-three/drei';

import { useContext } from "react";
import { Card, CardBody, Heading, Stack, Text, CardFooter, Button, SimpleGrid, ButtonGroup, CardHeader, Tooltip } from '@chakra-ui/react';
import ProductsContext from '../context/ProductContext';
// import { products } from '../Products';
import { AddIcon, ViewIcon } from '@chakra-ui/icons';


type GLTFModelProps = {
  url: string;
};


// const GLTFModel: React.FC<GLTFModelProps> = ({ url }) => {
//   const gltf = useGLTF(url);
//   return <primitive object={gltf.scene} />;
// };





const GLTFModel: React.FC<GLTFModelProps> = ({ url }) => {

  const gltf = useLoader(GLTFLoader, url);
  
  gltf.scene.scale["x"] = 30;
  gltf.scene.scale["y"] = 30;
  gltf.scene.scale["z"] = 30;

  useFrame(() => { gltf.scene.rotation.y += .01 })

  return <primitive object={gltf.scene} />;
};
useGLTF.preload("./plain_doughnut.glb");




const RenderModels = (props: any) => {
  const { onOpen, handleClickAdd } = useContext<any>(ProductsContext);
  


  return (
    <SimpleGrid minChildWidth={"300px"} columns={2} spacing={5} margin={"1.5em"}>

      {props.products.map((el: any) => <Card boxShadow={"5px 5px 4px pink"} borderRadius={".5em"} size={"xs"} key={el.name} direction={{ base: 'column' }}
        overflow='hidden'
        variant='outline'>
        <Stack >

          <CardHeader textAlign={"center"} bgGradient={"linear(to-bl,pink.300,orange.300,pink,brown)"} color={'white'}>

            <Heading size='md'>{el.name + " Doughnut"}</Heading>
          </CardHeader>
          <CardBody color={"grey"}>
<Tooltip label={el.description}>


            <Canvas style={{ marginRight:"1em", marginLeft:"1em",width: "auto", height: "200px",borderStyle:"none",backgroundImage:"url(./sceneDougnut.png)" }}>
              <ambientLight />
              <OrbitControls />
              <GLTFModel url={el.doughnut_url} />
            </Canvas>
</Tooltip>
            
           
            
            <Stack color={"pink.300"} boxShadow={"0px 0px 14px pink"} borderRadius={"3px"} p={".5em"} m={"1em"} border={"2px pink solid"}>

<Box>
              <Text size={"xs"}>
                PRICE:  R{el.price.toFixed(2)}
              </Text>

              <Text>
                QTY:  {el.qty}
              </Text>
              <Text size={"xs"}>
                Sub-Total:<Text color={ "green"}> R{el.grand_total().toFixed(2)}</Text>
              </Text>

</Box>



            </Stack>

          </CardBody>

          <CardFooter bgGradient={"linear(to-bl,pink.300,orange.300,pink,brown)"}>


            <ButtonGroup m={".5em"}  >

              <Button boxShadow={"3px 2px 4px pink inset"} size={'xs'} leftIcon={<AddIcon />} variant='solid' colorScheme='pink' onClick={(e) => handleClickAdd(el.name, e)}>
                Add to cart
              </Button>
              <Button size={'xs'} boxShadow={"3px 2px 4px pink inset"} leftIcon={<ViewIcon />} variant='solid' colorScheme='pink' onClick={onOpen}>
                View in Cart
              </Button>
            </ButtonGroup>

          </CardFooter>

        </Stack>

      </Card >)
      }
    </SimpleGrid >

  )
}


export default RenderModels

