import React from "react";
import { Card,Button,CardDeck,CardBody } from "reactstrap";

const Home = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-8">
          <div class="jumbotron paral paralsec">
            <span>
              <h1 class="display-3" align="left">
                NEW YEAR
              </h1>
            </span>
            <h1 class="display-3" align="right">
              NEW YOU
            </h1>

            {/* <p class="lead #0000 solid ">Grab yourself some bundles</p> */}
            <p class="lead">
              {/* <a class="btn btn-info btn-header" href="#" role="button">
           Shop Now
          </a> */}
            </p>
          </div>
        </div>
        <div className="col-md jumbo2" align="center">
          <h2>Get Ksh5000 off when you spend Ksh50000 and above!</h2>
          <h5>Use Code: SLAYQUEEN</h5>
          <button className="btn ">SAVE NOW</button>
        </div>
      </div>
      <CardDeck style={{padding:"1%", marginTop:"-1.2rem"}}>
        <Card
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/1029803/pexels-photo-1029803.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)"
          }}
        >
          <CardBody>
            <div align="center">
              <h5 style={{ paddingTop: "30%" }}>Visit our Store</h5>
              <Button>Location</Button>
            </div>
          </CardBody>
        </Card>
        <Card style={{backgroundImage:"url(https://images.pexels.com/photos/264787/pexels-photo-264787.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)"}}>
         
          <CardBody align="center">
            <h5 style={{ paddingTop: "30%" }}>Gift your loved one some Hair</h5>
            <Button>Shop now</Button>
          </CardBody>
        </Card>
        <Card style={{backgroundImage: "url(https://cdn.pixabay.com/photo/2017/07/25/10/37/hair-2537564__340.jpg)"}}>
         
          <CardBody align="center">
            <h5 style={{ paddingTop: "30%" }}>Wholesale Bundles</h5>
            <Button>Shop now</Button>
          </CardBody>
        </Card>
      </CardDeck>
      <div class="row" style={{padding:"1%", paddingLeft:"2%"}}>

<div align= "center" class="col-md-6" style={{color: "white", backgroundImage:"url(https://images.pexels.com/photos/3186386/pexels-photo-3186386.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)", height: "50rem"}}>
    <h5 style={{ paddingTop: "30%"}}>Looking for your first wig. We got you</h5>
    <button className = "btn">Shop now</button>
</div>

<div class="col-md-6">
<div align= "center" style={{color: "white", backgroundImage:"url(https://images.pexels.com/photos/1619488/pexels-photo-1619488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)", height: "24.5rem", marginBottom:"1rem"}}>
    <h5 style={{ paddingTop: "30%"}}>Oils Available</h5>
    <button className = "btn">Shop now</button>
</div>

          
<div align= "center" style={{color: "white", backgroundImage:"url(https://cdn.pixabay.com/photo/2019/12/01/18/04/hairdresser-4666064_960_720.jpg)", height: "24.4rem"}}>
    <h5 style={{ paddingTop: "30%"}}>Tools Available</h5>
    <button className = "btn">Shop now</button>
</div>
    
</div>

</div>
    </div>
  );
};

export default Home;
