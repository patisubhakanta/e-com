import React from 'react';

const products = [
    { id: 1, name: 'Product 1', description: 'Description for product 1', price: 29.99, image: 'https://via.placeholder.com/150' },

];

const ProductDetails = () => {
    const product = products[0]
    return (
      <div className='h-[70vh] w-full flex items-cneter mt-[200px]'>
          <div className="container mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="flex justify-center">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full max-w-md object-cover rounded-lg shadow-lg"
                    />
                </div>


                <div className="flex flex-col justify-between">
                    <div>
                        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                        <p className="text-gray-700 text-base mb-4">{product.description}</p>
                        <span className="text-2xl font-semibold text-green-600">${product.price}</span>
                    </div>


                    <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
      </div>
    );
};

export default ProductDetails;
