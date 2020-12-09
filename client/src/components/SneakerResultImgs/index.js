import React from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {
  CardActionArea,
  Card,
  CardMedia,
  CardContent
} from "@material-ui/core";

import ShoeInfo from "../shoeInfoDisplay/index";

function SneakerResImg(props) {
  const shoeInfoPage = () => {
    alert("this is a test");
  };

  return (
    <div>
      {console.log(props.sneakers)}

      {typeof props.sneakers.results != "undefined" &&
      props.sneakers &&
      props.sneakers.results.length > 0 ? (
        <div>
          <Container className="product-container">
            <Typography variant="h4" className="brand-title">
              {props.sneakers.results[0].brand}
            </Typography>
            <Grid container spacing={3}>
              {props.sneakers.results.map(shoeData => (
                <Grid item xs={12} sm={6} md={4} key={shoeData.id}>
                  {/* <Link to={"/shoeInfo" + "/" + shoeData.name}> */}
                  <Card className="card" onClick={shoeInfoPage}>
                    <CardActionArea>
                      <CardMedia
                        className="media"
                        image={shoeData.media.imageUrl}
                      />
                      <CardContent>
                        <h5>{shoeData.name}</h5>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                  {/* </Link> */}
                </Grid>
              ))}
            </Grid>
          </Container>

          <ShoeInfo></ShoeInfo>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default SneakerResImg;
