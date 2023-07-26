/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ChangeEvent, useContext } from 'react';
import { FormControl,  Text } from "@chakra-ui/react"
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Input,
    Stack,
    InputGroup,
    InputLeftAddon,
    RadioGroup,
    Radio
} from '@chakra-ui/react';
import ProductsContext from '../context/ProductContext';
import { useNavigate } from 'react-router-dom';
// import { ICustomerDetails } from '../interfaces/ICustomerDetails';




const CustomerDetails = (props: any) => {
    const { isOpen, onOpen, onClose,onToggle } = useDisclosure();
    const [value, setValue] = React.useState<string>("false");
    const { customerDetails, setCustomerDetails } = useContext<any>(ProductsContext);
    const navigate = useNavigate()
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const { name, value } = e.target;
        setCustomerDetails((prev: any) => ({ ...prev, [name]: value, }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        navigate("/confirmation")

    }




    return (
        <>
            <Button variant={'outline'} onClick={onOpen}>Pay R{props.total}</Button>

            <Modal isOpen={isOpen} onClose={onClose} size={"lg"}>
                <ModalOverlay />
                <form onSubmit={handleSubmit}>
                    <FormControl isRequired>
                        <ModalContent >
                            <ModalHeader color={"White"} bgGradient={"linear(to-b,brown,#E85298,#FF0080,brown)"}>Enter your details</ModalHeader>
                            <ModalCloseButton color={"white"} />
                            <ModalBody >

                                <Stack>
                                    <InputGroup size={"xs"}>

                                        <InputLeftAddon w={"7em"} children={"Name"} />
                                        <Input required onChange={handleChange} value={customerDetails.name} name={"name"} size={"xs"} type={"text"} placeholder={"Steve"} isRequired />

                                    </InputGroup>

                                    <InputGroup size={"xs"}  >
                                        <InputLeftAddon w={"7em"} children={"Surname"} />
                                        <Input required onChange={handleChange} value={customerDetails.surname} name={"surname"} type={"text"} placeholder={"Rodgers"} />
                                    </InputGroup>

                                    <InputGroup size={"xs"}>
                                        <InputLeftAddon w={"7em"} children={"Address"} />
                                        <Input onChange={handleChange} value={customerDetails.address} name={"address"} isRequired type={"text"} placeholder={"Cape Town Langa Zone 2 #73"} />
                                    </InputGroup>

                                    <InputGroup size={"xs"}>
                                        <InputLeftAddon w={"7em"} children={<PhoneIcon color='black.300' />} />

                                        <Input onChange={handleChange} value={customerDetails.phone} name={"phone"} isRequired size={"xs"} type={"phone"} placeholder={"071 123 1234"} />

                                    </InputGroup>

                                    <InputGroup size={"xs"}>
                                        <InputLeftAddon w={"7em"} children={<EmailIcon color='black.300' />} />

                                        <Input onChange={handleChange} value={customerDetails.email} name={"email"} isRequired size={"xs"} type={"email"} placeholder={"some@gmail.com"} />

                                    </InputGroup>

                                    <RadioGroup onChange={setValue} value={value}>
                                        <Stack direction='row'>
                                            <Text>
                                                Delivery:
                                            </Text>
                                            <Radio value={"false"}>
                                                No
                                            </Radio>

                                            <Radio value={"true"}>
                                                Yes
                                            </Radio>
                                        </Stack>

                                    </RadioGroup>


                                </Stack>

                            </ModalBody>
                            <ModalFooter color={"White"} bgGradient={"linear(to-b,brown,#E85298,#FF0080,brown)"}>
                                <Button size={"xs"} variant={"outline"} colorScheme='black' mr={3} onClick={onClose}>
                                    Cancel
                                </Button>
                                <Button type="submit" onClick={onToggle} size={"xs"} variant={"outline"} colorScheme='black'>
                                    Confirm
                                </Button>
                            </ModalFooter>
                        </ModalContent>
                    </FormControl>
                </form>
            </Modal>
        </>
    )
}

export default CustomerDetails