
import RenderModels from "../components/GLTFModel";
import Header from "../components/Header";
import { products } from "../Products"



const Home = () => {

    return (
        <>
            <Header />
            

            <RenderModels products={products} />
            
        </>)
};


export default Home;