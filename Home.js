import { Container,Button, Card, CardBody } from "reactstrap";
import React,{ useEffect} from "react";
const Home=()=>{
    useEffect(()=>{
        document.title="LaptopShop ";
},[]);
    return(        
    <div >
        <div>
       <img src="Images/Laptop.jpg" alt="Laptop" height="350" width="732"/>
       </div>
       <Card className="text-center" border="success" >
        <CardBody>     
            <p> 
                There are many laptops are available in our shop.
            </p>
            <Container className="text-center">     
            </Container>
        </CardBody>
        </Card>  
     </div>
    );
};
export default Home;