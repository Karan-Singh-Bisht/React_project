import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";
import axios from "../utils/axios";

function Home() {
	const [product] = useContext(ProductContext);
	const { search } = useLocation();
	const category = decodeURIComponent(search.split("=")[1]); //decodeURIComponent changes code to string

	const [filteredProducts, setFilteredProducts] = useState(null);

	const getProductCategory = async () => {
		try {
			const { data } = await axios.get(`/products/category/${category}`);
			setFilteredProducts(data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		if (!filteredProducts || category == "undefined") setFilteredProducts(product);
		if (category != "undefined") {
			getProductCategory();
		}
	}, [category, product]);

	return product ? (
		<>
			<Nav />
			<div className="w-[85%] overflow-x-hidden overflow-y-auto flex flex-row flex-wrap">
				{filteredProducts &&
					filteredProducts.map((item, index) => {
						return (
							<Link
								to={`/description/${item.id}`}
								key={index}
								className="card transition-all shadow w-[18vw] h-[45vh] ml-10 mt-8 rounded-md bg-white"
							>
								<div className="image-container p-2 m-auto h-[80%] w-[80%] rounded-t-md overflow-hidden">
									<img
										className="hover:scale-105 w-full h-full object-bottom object-contain"
										src={item.image}
										alt="Image"
									/>
								</div>
								<div className="mt-2 rounded-b-md bg-zinc-100 h-[20%] px-2 py-1 object-details w-[100%] text-sm">
									<h1>{item.title}</h1>
								</div>
							</Link>
						);
					})}
			</div>
		</>
	) : (
		<Loading />
	);
}

export default Home;
