import React, { useState,useEffect } from "react";
import Product from "./Product";
import base_url from "./../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const AllProducts =() => {

    useEffect(() => {
            document.title="All Products || Learn Code with Maithili";
    });

    //Function to call servers
    const getAllProductsFromServer = () => {
        axios.get(`${base_url}/Products`).then(
            (response) => {
                //For Success
               // console.log("Success");
                console.log(response.data);
                toast.success("Products has been loaded",{position:"bottom-center"});
                setproducts(response.data);
            },
            (error) => {
                //For Error
                console.log("Error");
                toast.error("Something went wrong",{position:"bottom-center"});
            }

        );
    };

    
    //calling loading server function
    useEffect(()=>{
        getAllProductsFromServer();
        },[]);

    const [product,setproducts]=useState([]);

    const updateProduct=(id)=>{
        setproducts(product.filter((c)=>c.id!==id));
    };

    return(
        <div>
            <h1>All Products</h1>
            <p>list of products as follows</p>
           {product.length > 0 
            ? product.map((item) => <Product key={item.id} product={item}/>) 
            :"No Products"};
       </div>

    );
};

export default AllProducts;