import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import {Card,CardBody,CardSubtitle,CardText,Button,Container,CardTitle} from "reactstrap";

import base_url from "../api/bootapi";

const Product=({product,update})=>{

  //delete product
  const deleteProduct = (id) => {
    axios.delete(`${base_url}/Products/${id}`)
      .then((response) => {
        // Log the response data
        console.log(response.data);
        toast.success("Product deleted successfully");
        update(id);
      })
      .catch((error) => {
        // Log any error messages
        console.error(error);
        //toast.error("Product not deleted");
      });
  };
      
  
  //form handler function
  const handleForm=(e)=>{
    console.log(product);
    postDatatoServer(product);
    e.preventDefault();
}
//creating function to post data on server
const postDatatoServer=(data)=>{
axios.post(`${base_url}/product`,data).then(
    (response)=>{
        console.log(response);
        console.log("success");
        toast.success("Product deleted successfully",{position:"bottom-center"});
    },
    (error)=>{
        console.log(error);
        console.log("error");
        toast.error("Something went wrong ",{position:"bottom-center"});
    }
);
};
return (
    <Card className="text-center">
    <CardBody>
          <CardSubtitle className="font-weight-bold">{product.prodName}</CardSubtitle>
         
          <CardSubtitle className="font-weight-bold">{product.prodPrice}</CardSubtitle>
          <CardText>{product.description}</CardText>  
          <Container className="text-center">
              <Button color="danger" onClick={()=>{
                deleteProduct(product.id);
              }} >Delete</Button>{' '}

              
              <Button color="warning  ml-5" type="submit" href="/update-product">Update</Button>
          </Container>
    </CardBody>
  </Card>
);  
};
export default Product;