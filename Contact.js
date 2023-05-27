import { Container,Button, Card, CardBody } from "reactstrap";
import React,{ useEffect} from "react";
const Contact=()=>{
    useEffect(()=>{
        document.title="LaptopShop ";
},[]);
    return(        
        <div>
             <Card className="text-center" border="success" >
             <CardBody>     
                 <p>Email Id - laptopshop123@gmail.com </p>
                 Phone Number - 987654123 / 9454590973 <p/>
                    
                 
            <Container className="text-center">
            <Button color="primary" outline>Thank You...</Button>     
            </Container>
        </CardBody>
        </Card>  
        </div>
          );
        };
export default Contact;