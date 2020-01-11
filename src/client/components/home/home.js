import React from "react";
import { Link } from 'react-router-dom';
import "./home.css";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { Card, Button, CardDeck, CardBody } from "reactstrap";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)"
  },
  title: {
    color: theme.palette.primary.light
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  }
}));

const tileData = [
  {
    img: "https://fineartsbd.com/wp-content/uploads/2019/06/fascinating-bob-hairstyles-for-black-women-6.jpg",
    title: "",
    author: "author"
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0269/2245/1047/products/f59ecb2b80b7bd2deac75c54e2894510_fb26cd2f-ffba-469e-8815-e65bea2aef49_590x.png?v=1577970671",
    // title: "Image",
    author: "author"
  },
  {
    img: "https://assets.bigcartel.com/product_images/243414719/__3c+skin++hait10ggg10bbf5222ggfgfgggggfhfggf.jpg?auto=format&fit=max&h=1000&w=1000",
    // title: "Image",
    author: "author"
  },
  {
    img: "https://4.bp.blogspot.com/-0T9Ji-5V2KU/WdXNxbtMQlI/AAAAAAAAH8g/K-mNxM2ICtg2vzDKqXEOrXK1LNcd6P0BgCLcBGAs/s1600/Nancie%2BMwai%2BNew%2BHair%2B%25283%2529.jpg",
    // title: "Image",
    author: "author"
  },
  {
   img: "https://www.sensationnel.com/wp-content/uploads/Empire_WigSAP_S_Jean_main-600x800.jpg",
  //  title: "Image",
   author: "author"
 }
];

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <div className="row" id="home">
        <div className="col-md-8">
          <div className="jumbotron paral paralsec">
            <h1 className="display-3" align="left">
              New Hair
            </h1>
            <h1 className="display-3" align="right">
              New You
            </h1>
          </div>
        </div>
        <div className="col-md jumbo2" align="center">
          <h1>Get Ksh5000 off when you spend Ksh50000 and above!</h1>
          <h5>Use Code: SLAYQUEEN</h5>
          <button className="btn ">SAVE NOW</button>
        </div>
      </div>
      <div className="container review">
        <h1 align="center">Good quality Hair at affordable prices</h1>
        <h5>
          Follow us on instagram page to see more reviews, participate in
          give aways and know more about pop-up stores around you
        </h5>
        </div>
      <CardDeck style={{ padding: "1%", marginTop: "-1.2rem" }}>
        <Card
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/65438/pexels-photo-65438.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)"
          }}
        >
          
          <CardBody>
            <div align="center">
              <h4 style={{ paddingTop: "30%", color: "black" }}>
                Visit our Store
              </h4>
              <Link to="/contact">
              <Button>Location</Button>

              </Link>
            </div>
          </CardBody>
        </Card>
        <Card
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/842876/pexels-photo-842876.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)"
          }}
        >
          <CardBody align="center">
            <h4 style={{ paddingTop: "30%" }}>Gift your loved one some Hair</h4>
            <Link to ="/shop">
            <Button>Shop now</Button>
            </Link>
          </CardBody>
        </Card>
        <Card
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1562182856-e39faab686d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)"
          }}
        >
          <CardBody align="center">
            <h4 style={{ paddingTop: "30%", color: "black" }}>
              Wholesale Bundles
            </h4>
            <Link to = "/shop">
            <Button>Shop now</Button>
            </Link>
           
          </CardBody>
        </Card>
      </CardDeck>
      <div className="container review">
        <h1 align="center">Hair Products and Tools are also available</h1>
        <h5>
          Follow us on instagram page to see more reviews, participate in
          give aways and know more about pop-up stores around you
        </h5>
        </div>
      <div className="row" style={{ padding: "1%", paddingLeft: "2%" }}>
        <div align="center" className="col-md-6 image-5-wig">
          <h4 style={{ paddingTop: "60%", color: "black" }}>
            Looking for your first wig. We got you
          </h4>
          <Link to = "/shop">
          <button className="btn">Shop now</button>
          </Link>
          
        </div>
        <div className="col-md-6">
          <div
            align="center"
            style={{
              color: "white",
              backgroundImage:
                "url(https://images.hellogiggles.com/uploads/2019/03/09142133/suavenaturals.png)",
              height: "24.5rem",
              marginBottom: "1rem"
            }}
          >
            <h5 style={{ paddingTop: "30%", color:"black"  }}>Oils Available</h5>
            <button className="btn">Shop now</button>
          </div>
          <div className="image-7-tools" align="center">
            <h5 style={{ paddingTop: "30%" }}>Tools Available</h5>
            <button className="btn">Shop now</button>
          </div>
        </div>
      </div>
      <div className="container review">
        <h1 align="center">Follow us on Instagram</h1>
        <h5>
          Follow us on instagram page to see more reviews, participate in
          give aways and know more about pop-up stores around you
        </h5>
      </div>
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={2.5}>
          {tileData.map((tile, i) => (
            <GridListTile key={i}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                classes={{
                  root: classes.titleBar,
                  title: classes.title
                }}
                //   actionIcon={
                //     <IconButton aria-label={`star ${tile.title}`}>
                //       <StarBorderIcon className={classes.title} />
                //     </IconButton>
                //   }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
      <footer
        className="container-fluid bg-black py-5"
        style={{ background: "#000000" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6 ">
                  <div className="logo-part">
                    <h1>DEE'S</h1>
                    <p>7637 Laurel Dr. King Of Prussia, PA 19406</p>
                    <p>One stop shop for all your hair needs</p>
                  </div>
                </div>
                <div className="col-md-6 px-4">
                  <h6> About Store</h6>
                  <p></p>
                  <a href="#" className="btn-footer">
                    {" "}
                    More Info{" "}
                  </a>
                  <br />
                  <a href="#" className="btn-footer">
                    {" "}
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6 px-4">
                  <h6> Help us</h6>
                  <div className="row ">
                    <div className="col-md-6 px-4">
                      <ul>
                        <li>
                          <a  href="#home"> Home</a>{" "}
                        </li>
                        <li>
                          <Link to="/shop"> Shop</Link>{" "}
                        </li>
                        <li>
                          <Link to="/about"> About</Link>{" "}
                        </li>
                        <li>
                          <Link to="/sale"> Sale</Link>{" "}
                        </li>
                        <li>
                          <Link to="/contact"> Service</Link>{" "}
                        </li>
                        {/* <li>
                          <Link to="/login"> Log in</Link>{" "}
                        </li> */}
                      </ul>
                    </div>
                    <div className="col-md-6 px-4">
                      <ul>
                        <li>
                          <a href="#"> Fax</a>{" "}
                        </li>
                        <li>
                          <a href="#"> Terms</a>{" "}
                        </li>
                        <li>
                          <a href="#"> Policy</a>{" "}
                        </li>
                        <li>
                          <a href="#"> Refunds</a>{" "}
                        </li>
                        <li>
                          <a href="#"> M-Pesa</a>{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 ">
                  <h6> Newsletter</h6>
                  <div className="social">
                    <a href="#">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                  </div>
                  <form className="form-footer my-3">
                    <input
                      type="text"
                      placeholder="search here...."
                      name="search"
                    />
                    <input type="button" value="Go" />
                  </form>
                  <p>Happy shopping</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Home;
