/* eslint-disable @typescript-eslint/no-explicit-any */
import {createContext, Dispatch } from "react";

interface IProductsContext {
    handleClickAdd(arg0:string): any;
    handleClickSub(arg0:string): any;
    customerDetails:{name:string, surname:string, address:string,phone:string};
     setCustomerDetails: any;
     cartTotal():number;
     setCartTotal:any;
     setCart:any;
     isOpen:any;
     cart:any;
     onOpen:any;
     onClose():any;
     product:any;
     setProducts:any;
     cartQTYItems:any;
     setCartQTYItems:any
    
}
interface ICustomerDetails {
    name:string;
    surname:string;
    address:string;
    phone:string;
    customerDetails:{name:string, surname:string, address:string,phone:string};
    setCustomerDetails: any;

}

 const ProductsContext = createContext<ICustomerDetails |IProductsContext | Dispatch<any>>(null);
 export default ProductsContext;