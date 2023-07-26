import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";



const HoverEffect =({ children }) => {



    return (<Box
        as={motion.div}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
    >
        {children}
    </Box>)
}

export default HoverEffect