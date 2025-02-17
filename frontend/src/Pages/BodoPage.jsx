import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
function BodoCart({ imgURL, name, des, price, productId }) { // Accept productId as a prop
    return (
        <div className="col-lg-4 col-md-4 col-sm-6 col-6">
            <div className="card mb-4">
                <img className="tribe-image" src={`http://localhost:4000${imgURL}`} alt={name} /> 
                <div className="details">
                    <p> <span style={{ fontWeight: "bold" }}>{name}</span> - {des} </p>
                    <div className="d-flex justify-content-between">
                        <p style={{ fontWeight: "bold" }}>{price}</p>
                        <button style={{ backgroundColor: "#0aad0a" }} type="button" className="btn btn-outline-primary hover btn-buy">
                            <Link style={{ textDecoration: "none" }} className="text-light" to={`/buypage/${productId}`}>
                                Buy
                            </Link>
                        </button>
                    </div>
                </div>   
            </div>  
        </div>   
    );
}

 
function BodoPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:4000/api/products/category/bodo");
                setProducts(response.data);
            } catch (error) {
                console.log("Error while fetching data", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <Header />
            <Navbar />
            <div className="container">
                <h2 className="my-2" style={{ textAlign: "center" }}>Bodo</h2>
                <div className="row">
                {products.map((product) => (
                <BodoCart
                    key={product._id}
                    imgURL={product.photo}
                    name={product.name}
                    des={product.description}
                    price={`₹${product.price}`}
                    productId={product._id}  // Pass the product ID
                />
                ))}
                </div>
            </div>
            <Footer /> 
        </div>
    );
}

export default BodoPage;
