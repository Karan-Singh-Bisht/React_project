import React, { createContext, useEffect } from "react";
import { useState } from "react";
import axios from "./axios";

export const ProductContext = createContext(); //to centralize complete data

const Context = (props) => {
	const [product, setProduct] = useState(null);

    const getProduct = async() => {
        try{
            const {data} = await axios.get("/products");
            setProduct(data);
        }catch(e){
            console.log(e);
        }
    }

    useEffect(()=> {
        getProduct();
    },[]);

	return (
		<ProductContext.Provider value={[product, setProduct]}>
			{props.children}
		</ProductContext.Provider>
	);
};

export default Context;
