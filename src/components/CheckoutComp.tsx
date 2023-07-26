/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Table, Thead,
    Tbody, Tfoot, Tr, Th, Td,
    TableCaption, TableContainer, Button,  Flex, ButtonGroup, useDisclosure,
} from '@chakra-ui/react';
import ProductsContext from "../context/ProductContext";
import { useContext } from 'react';
import { TDoughnut } from '../Products';
import CustomerDetails from './CustomerDetails';

const CheckoutComp = () => {
    const { cart, cartTotal,handleClickAdd,handleClickSub } = useContext<any>(ProductsContext);
    const {onOpen} = useDisclosure();
    console.log(onOpen);
    
    return (



<Flex alignItems={"center"} justifyContent={"center"} >

        <TableContainer p={".0em"} m={"3em"} h={"100%"} borderRadius={"5px"} boxShadow={"1px 2px 3px "}>


            <Table fontSize={"1.2em"} variant='simple' >
                <TableCaption>
                    An overview of the items in your cart
                </TableCaption>
                <Thead fontSize={"3.4em"} color={"white"}>
                    <Tr fontSize={"3.4em"} color={"white"} bgGradient={"linear(to-bl,pink.300,orange.300,pink,brown)"}>
                        <Th fontSize={"lg"} color={"white"}>
                            Item
                        </Th>
                        <Th fontSize={"lg"} color={"white"}>
                            Value per Item
                        </Th>
                        <Th fontSize={"lg"} color={"white"}>
                            QTY
                        </Th>
                        <Th fontSize={"lg"} color={"white"}>
                            Actions
                        </Th>

                        <Th fontSize={"lg"} color={"white"}>
                            Sub-total
                        </Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {cart && cart.map((el: TDoughnut) => <Tr>
                        <Td color={"white"}>
                            {el.name}
                        </Td>
                        <Td color={"white"}>
                            R{el.price.toFixed(2)}
                        </Td>
                        <Td color={"white"}>
                            {el.qty}
                        </Td>
                        <Td>
                            <ButtonGroup>
                                <Button boxShadow={"3px 2px 4px pink inset"} size={"xs"} onClick={()=> handleClickSub(el.name)} colorScheme={"pink"}>
                                    -
                                </Button>
                                <Button boxShadow={"3px 2px 4px pink inset"} size={"xs"} onClick={()=> handleClickAdd(el.name)} colorScheme={"pink"}>
                                    +
                                </Button>
                            </ButtonGroup>
                        </Td>
                        <Td color={"Yellow"} >
                            R{el.grand_total().toFixed(2)}
                        </Td>
                    </Tr>)}
                </Tbody>
                <Tfoot>
                    <Tr>
                        <Td colSpan={3}>

                        </Td>
                        
                        <Td color={"white"}>
                            Grand Total
                        </Td>
                        <Td color={"Green"} fontWeight={'bold'}>

                            <CustomerDetails total={cartTotal} />
                        </Td>
                    </Tr>
                </Tfoot>
            </Table>

        </TableContainer>
        
</Flex>














    )
}

export default CheckoutComp;