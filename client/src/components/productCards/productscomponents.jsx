import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView
} from "mdbreact";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActionArea,
  CardMedia
} from "@material-ui/core";

const ProductCards = () => {
  const products = [
    {
      id: 1,
      title: "Sneaker Pack 1",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZzMVOJLMUw7CtodH7BpOMPK-YMrkuzVieL6I9p9nb6Lgjd-nuZzySfpprvZGYPko8nD1MAIg&usqp=CAc"
    },
    {
      id: 2,
      title: "Leather Pack 1",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZzMVOJLMUw7CtodH7BpOMPK-YMrkuzVieL6I9p9nb6Lgjd-nuZzySfpprvZGYPko8nD1MAIg&usqp=CAc"
    },
    {
      id: 3,
      title: "Male Lace 1",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZzMVOJLMUw7CtodH7BpOMPK-YMrkuzVieL6I9p9nb6Lgjd-nuZzySfpprvZGYPko8nD1MAIg&usqp=CAc"
    },
    {
      id: 4,
      title: "Female Lace 1",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZzMVOJLMUw7CtodH7BpOMPK-YMrkuzVieL6I9p9nb6Lgjd-nuZzySfpprvZGYPko8nD1MAIg&usqp=CAc"
    },
    {
      id: 4,
      title: "Female Lace 1",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZzMVOJLMUw7CtodH7BpOMPK-YMrkuzVieL6I9p9nb6Lgjd-nuZzySfpprvZGYPko8nD1MAIg&usqp=CAc"
    }
  ];
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item>
        <Typography variant="h5" gutterBottom>
          Products
        </Typography>
      </Grid>
      <Grid item>
        <Grid container direction="row" justify="center" spacing="2">
          {products.map(product => (
            <Grid item>
              <Card>
                <CardActionArea>
                  <CardMedia
                    image={product.img}
                    style={{ height: 150, width: 150 }}
                  />
                </CardActionArea>
                <CardContent>
                  <Typography variant="h6">{product.title}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductCards;
