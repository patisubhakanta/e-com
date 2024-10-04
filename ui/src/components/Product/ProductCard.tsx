import React from "react";


const ProductCard = () => {
    return (
        <>

            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border border-gray-200 p-4">
                <img className="w-full h-48 object-cover"
                    src={""}
                // alt={product.name} 
                />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">nnn</div>
                    <p className="text-gray-700 text-base">
                        nn
                    </p>
                </div>
                <div className="px-6 py-4">
                    <span className="text-xl font-semibold">$20</span>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded ml-4 hover:bg-blue-600">
                        Add to Cart
                    </button>
                </div>
            </div>

        </>
    );
};

export default ProductCard;
