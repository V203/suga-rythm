/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
/* eslint-disable @typescript-eslint/no-explicit-any */
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { useState, useEffect } from 'react';
import { TDoughnut } from './Products';
import ProductsContext from './context/ProductContext';
import { useDisclosure } from "@chakra-ui/react"
import ViewCart from './components/ViewCart';
import Services from './Services';
import Checkout from './pages/Checkout';
import CustomerDetails from './components/CustomerDetails';
import React from 'react';
import { ICustomerDetails } from './interfaces/ICustomerDetails';
import Confirmation from './pages/Confirmation';
import LandingPage from './pages/LandingPage';
import SelectedItem from './components/SelectedItem';


function App() {
  const services = Services();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [cart, setCart] = useState<Array<TDoughnut>>(services.getCart());
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [product, setProducts] = useState<Array<TDoughnut>>(services.getProducts());
  const [cartTotal, setCartTotal] = useState<any>(services.getGrandTotal());
  const [cartQTYItems, setCartQTYItems] = useState<any>(0);
  const [searchItem, setSearchItem] = useState("");
  const [customerDetails, setCustomerDetails] = React.useState<ICustomerDetails>({ name: "", surname: "", address: "", phone: "" })
  const [searchQuery, setSearchQuery] = useState('');


  useEffect(() => {

    setProducts(services.getProducts())
    setCart(services.getCart())
    setCartTotal(services.getGrandTotal())
    setCartQTYItems(services.getSumOfItemsInCart())
    setSearchQuery(searchQuery)
  }, [services]);

  const handleSearchItem = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchItem(event.target.value);
  };
  
  const filteredItems = product.filter((item) =>
  item.name.toUpperCase().includes(searchItem.toUpperCase())
);
  



  function handleClickAdd(name: string): any {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    services.add(name)

    setProducts(() => services.getProducts())

  }

  function handleClickSub(name: string): any {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    services.sub(name)

    setProducts(() => services.getProducts())

  }

  return (
    <ProductsContext.Provider value={{searchQuery, setSearchQuery, searchItem,  filteredItems, handleSearchItem,  customerDetails, setCustomerDetails, cartTotal, setCartTotal, handleClickSub, handleClickAdd, setCart, isOpen, cart, onOpen, onClose, product, setProducts, cartQTYItems, setCartQTYItems }}>
      <Router>
        <ViewCart />
        <CustomerDetails />
        <SelectedItem price={0} name={''} qty={0} grand_total={function (): number {
          throw new Error('Function not implemented.');
        } } doughnut_url={''} description={''} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/shop" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </Router>
    </ProductsContext.Provider>
  )
}

export default App;