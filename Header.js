import React from "react";
import { Card, CardBody } from "reactstrap";

function Header({name,title}){
    return(
        <div>
            <Card className="my-2 bg-light">
                <CardBody>
                <h1 className="text-center my-5">Welcome to Lappie World</h1>
                </CardBody>
            </Card>
        </div>
    );
}

export default Header;