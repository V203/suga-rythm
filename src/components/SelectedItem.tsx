
import { Modal, ModalBody, ModalHeader, useDisclosure } from "@chakra-ui/react";
import { TDoughnut } from "../Products";

const SelectedItem = (param: TDoughnut) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (

        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalHeader>
                {param.name}
            </ModalHeader>

            <ModalBody>

            </ModalBody>

        </Modal>
    )
}

export default SelectedItem;