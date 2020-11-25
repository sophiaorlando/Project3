import React from "react";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { CardActionArea, Card, CardMedia, CardContent } from '@material-ui/core';

function SneakerResImg(props) {
  return (
    <div>

      {typeof props.sneakers.results != "undefined" ? (

        <div>
          <Container className="product-container">
            <Typography variant="h4" className="brand-title">
              {props.sneakers.results[0].brand}
            </Typography>
            <Grid container spacing={3}>

              {props.sneakers.results.map(shoeData => (
                <Grid item xs={12} sm={6} md={4}>
                  <Card className="card">
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
                </Grid>
              ))}

            </Grid>

          </Container>

        </div>


      ) : (
          ""
        )}
    </div>

  )
}

export default SneakerResImg;
