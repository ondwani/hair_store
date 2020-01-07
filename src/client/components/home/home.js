import React from "react";
import { Card,Button,CardDeck,CardBody } from "reactstrap";

const Home = () => {
  return (
    <div>
        <div className="row">
            <div className="col-md-8">
            <div className="jumbotron paral paralsec">
                <h1 className="display-3" align="left">New Year</h1>
                <h1 className="display-3" align="right">New You</h1>
            </div>
        </div>
            <div className="col-md jumbo2" align="center">
                <h1>Get Ksh5000 off when you spend Ksh50000 and above!</h1>
                <h5>Use Code: SLAYQUEEN</h5>
                <button className="btn ">SAVE NOW</button>
            </div>
        </div>
        <CardDeck style = {{padding:"1%", marginTop:"-1.2rem"}}>
            <Card
                style={{
                backgroundImage:
              "url(https://images.unsplash.com/photo-1521250164448-79d809c7cb0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)"}}>
                <CardBody>
                <div align="center">
                <h5 style={{ paddingTop: "30%", color:"white" }}>Visit our Store</h5>
                <Button>Location</Button>
                </div>
                </CardBody>
            </Card>
            <Card style={{
                backgroundImage:
                "url(https://images.unsplash.com/photo-1573818141216-0655c0961534?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)"}}>       
                <CardBody align="center">
                <h5 style={{ paddingTop: "30%" }}>Gift your loved one some Hair</h5>
                <Button>Shop now</Button>
                </CardBody>
            </Card>
            <Card style={{
                backgroundImage: 
                "url(https://images.unsplash.com/photo-1562182856-e39faab686d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)"}}>   
                <CardBody align="center">
                <h5 style={{ paddingTop: "30%", color: "white" }}>Wholesale Bundles</h5>
                <Button>Shop now</Button>
                </CardBody>
            </Card>
        </CardDeck>
     <div className="row" style={{padding:"1%", paddingLeft:"2%"}}>

        <div align= "center" class="col-md-6 image-5-wig" >
            <h5 style={{ paddingTop: "30%"}}>Looking for your first wig. We got you</h5>
            <button className = "btn">Shop now</button>
        </div>
        <div className="col-md-6">
            <div align= "center" style={{
                color: "white", 
                backgroundImage:
                "url(https://www.theballeronabudget.com/wp-content/uploads/2017/03/korean-skincare-1-e1489510083332.jpg)", height: "24.5rem", marginBottom:"1rem"}}>
                <h5 style={{ paddingTop: "30%"}}>Oils Available</h5>
                <button className = "btn">Shop now</button>
            </div>         
            <div className="image-7-tools" align= "center" >
                <h5 style={{ paddingTop: "30%"}}>Tools Available</h5>
                <button className = "btn">Shop now</button>
            </div>
    
        </div>
     </div>
    </div>
);
};
export default Home;
