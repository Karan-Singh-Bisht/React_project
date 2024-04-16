import React, { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { Link } from "react-router-dom";

function Nav() {
	const [product] = useContext(ProductContext);

	let distinct_category =
		product && product.reduce((acc, cv) => [...acc, cv.category], []); //Finding Categories
	distinct_category = [...new Set(distinct_category)];
	console.log(distinct_category);

	const color = () => {                                  //Changing color of categories
		return(`rgba(${(Math.random() * 255).toFixed()},${(
			Math.random() * 255
		).toFixed()},${(Math.random() * 255).toFixed()},0.4)`);
	};

	return (
		<nav className="gap-5 w-[15%] h-full bg-zinc-50 p-2 flex flex-col items-center">
			<a
				className="mt-3 border-blue-300 px-6 py-2 border rounded text-blue-300 hover:bg-blue-300 hover:text-blue-800"
				href="/create"
			>
				New Product
			</a>
			<hr className="w-[80%] bg-purple-200" />
			<h1 className="text-2xl font-semibold flex flex-col w-[80%] items-start">
				Category Filter
			</h1>
			<div className="flex flex-col items-start w-[80%]">
				{distinct_category.map((item, index) => (
					<Link
						to={`/?category=${item}`}
						className="w-full text-lg my-1 flex items-center"
						key={index}
					>
						<span style={{backgroundColor:color()}} className="rounded-full mr-2 w-[15px] h-[15px] bg-blue-100"></span>
						{item}
					</Link>
				))}
			</div>
		</nav>
	);
}

export default Nav;
