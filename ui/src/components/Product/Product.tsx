import React from "react";
import ProductCard from "./ProductCard";


const ProductPage = () => {
    return (
        <>
            <div className="max-w-[1600px] mx-0 my-auto px-0 py-0 w-[100%] bg-[#fffdf9]">
                <div className="w-full flex justify-center items-center mt-10 md:mt-20 py-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                        {Array.from({ length: 9 }).map((_, index) => (
                            <ProductCard key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductPage;
