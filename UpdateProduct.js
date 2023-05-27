import React,{Fragment,useEffect,useState} from "react";
import { Button,Container,Form,FormGroup,Input } from "reactstrap";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";


const UpdateProduct=()=>{
    useEffect(()=>{
        document.title="UPDATE Product ||Learn code with Maithili";
    },[]);
    const [product,setproduct]=useState({});

    //form handler function
    const handleForm=(e)=>{
        console.log(product);
        postDatatoServer(product);
        e.preventDefault();
    }

    //creating function to post data on server
    const postDatatoServer=(data)=>{
        axios.post( `${base_url}/Products` ,data).then(
            (response)=>{
                console.log(response);
                console.log("success");
                toast.success("Product added successfully",{position:"bottom-center"});
            },
            (error)=>{
                console.log(error);
                console.log("error");
                toast.error("something went wrong ",{position:"bottom-center"});
            }
        );
    };


    return(
        <Fragment>
            <h1 className="text-center my-3">Update Your Product details</h1>
            <Form onSubmit={handleForm}>
            <FormGroup>
                <label for ="ProductId">ProductId</label>
                <Input 
                    Type="text"
                    placeholder="Enter Product ID here"
                    name="ProductId"
                    Id="ProductId"
                    onChange={(e)=>{
                        setproduct({...product,id:e.target.value});
                    }}
                />
            </FormGroup>
            <FormGroup>
                <label for="prodName">Product Name</label>
                <Input 
                    Type="text"
                    placeholder="Enter Product name here"
                    name="prodName"
                    Id="prodName"
                    onChange={(e)=>{
                        setproduct({...product,prodName:e.target.value});
                    }}
                    />
            </FormGroup>
            <FormGroup>
                <label for="price">Product Price</label>
                <Input
                    Type="text"
                    placeholder="Enter product price here"
                    Id="price"
                    name="price"
                    onChange={(e)=>{
                        setproduct({...product,prodPrice:e.target.value});
                    }}
                    />
            </FormGroup>
            <Container className="text-center">
                <Button type="submit" color="success">UpdateProduct</Button>{' '}
                <Button type="reset" color="warning ml-2">  Clear  </Button>
            </Container>
            </Form>
        </Fragment>
    );
   
};
export default UpdateProduct;