/* eslint-disable @typescript-eslint/no-explicit-any */
import { products, TDoughnut } from "./Products";

const Services = () => {

  const add = (paramName: string) => {

    products.find((el: TDoughnut) => el.name === paramName && el.qty++);

  };

  const sub = (paramName: string) => {

    products.find((el: TDoughnut) => el.name === paramName && el.qty !== 0 && el.qty--)

  };

  const getProducts = (): Array<TDoughnut> => {

    return products;

  };

  const getSelectedProduct = (paramName: string) => products.find((el: TDoughnut) => el.name = paramName);

  const getCart = () => {

    const cart = products.filter((el: TDoughnut) => el.qty > 0);
    return cart;
  }

  const getGrandTotal = () => {

    const data: number = products.filter((el: any) => el.qty > 0).reduce((a: any, b: any) => a + b.grand_total(), 0);

    return data.toFixed(2);
  }

  const getSumOfItemsInCart = () => {


    return getCart().reduce((a: any, b: any) => a + b.qty, 0);
  }

  const filterProducts = (param: string) => {
    param[0].toUpperCase()

    return getProducts().filter((el: TDoughnut) => el.name.toLowerCase().startsWith(param.toLowerCase()));


  };


  const clearCart = () => {
    getProducts().forEach((el)=> {
      el.qty = 0
    })
  }

  return {
    add, sub, getProducts,
    getSelectedProduct, getCart,
    getGrandTotal, getSumOfItemsInCart,
    filterProducts,clearCart
  }

}



export default Services;