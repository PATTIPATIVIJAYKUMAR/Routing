import React, { useState, useEffect } from 'react';

function SearchPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        fetch(`https://dummyjson.com/products/search?q=${searchTerm}`)
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                setProducts(res.products);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    };

    const handleAddToCart = (productId) => {
        fetch('https://dummyjson.com/carts/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userId: 1,
                products: [
                    {
                        id: productId,
                        quantity: 1,
                    },
                ],
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log('Product added to cart:', data);
                // Here you can handle the response accordingly
                window.location.href = '/cart'; // Corrected the URL path
            })
            .catch((error) => {
                console.error('Error adding to cart:', error);
            });
    };

    return (
        <div className="App" style={{ textAlign: 'center', color: 'green' }}>
            <input
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
            />
            <br />
            <button className="button" onClick={getProducts}>
                Search
            </button>

            <ul>
                {Array.isArray(products) &&
                    products.map((product) => (
                        <li key={product.id}>
                            {product.title} - {product.price}
                            <button onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default SearchPage;