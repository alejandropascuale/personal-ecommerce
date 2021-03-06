import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './boxProduct.css';
import Header from '../header/Header';

export default function BoxProduct() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const apiProducts = await axios.get('http://localhost:8000/api/products');
    setProducts(apiProducts.data);
  }
  
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Header />
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Customers also purchased</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.slice(0,8).map((product) => (
            <div key={product.idPlato} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={product.imagen}
                  alt={`${product.plato}-${product.idPlato}`}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-900">
                    <a href=''>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.plato}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.productRestaurant.nombre}</p>
                </div>
                <p className="text-sm font-medium text-gray-700">{`$${product.precio}`}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
