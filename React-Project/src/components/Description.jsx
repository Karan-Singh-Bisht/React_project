import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductContext } from "../utils/Context"; //Use nhi hoga
import axios from "../utils/axios";
import Loading from "./Loading";

function Description() {

	const [singleProduct,setSingleProduct] = useState(null);

	const {id} = useParams();

	const getSingleProduct = async() => {
		try {
			const {data} = await axios.get(`/products/${id}`);
            setSingleProduct(data);
        } catch (error) {
            console.log(error);
        }
	}

	useEffect(() => {
		getSingleProduct();
	},[]);

	return singleProduct ? (
		<div className="w-full h-screen bg-white">
			<div className="w-[70%] h-screen m-auto p-[10%] flex gap-[7vw]">
				<img
					className=""
					src={singleProduct.image}
					alt=""
				/>
				<div className="content mt-[5.5vw]">
					<h1 className="text-3xl font-semibold mb-2">
						{singleProduct.title}
					</h1>
					<h3 className="text-md font-semibold mb-2">men's clothing</h3>
					<h2 className="text-md font-semibold mb-2 text-red-300">109.95</h2>
					<p className="text-sm font-semibold mb-2">
						{singleProduct.description}
					</p>
                    <br></br>
					<Link className="mt-3 mr-3 border-green-300 px-6 py-2 border rounded text-green-300 hover:bg-green-300 hover:text-blue-800">
						Edit
					</Link>
					<Link className="mt-3 border-red-300 px-6 py-2 border rounded text-red-300 hover:bg-red-300 hover:text-red-800">
						Delete
					</Link>
				</div>
			</div>
		</div>):(<Loading/>
	);
}

export default Description;
