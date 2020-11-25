<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React, { useEffect, useState } from 'react';
import NavigateBeforeSharpIcon from '@material-ui/icons/NavigateBeforeSharp';
>>>>>>> 8681d81c3c8c9462150dff1707bc168e48d16365
import NavigateNextSharpIcon from '@material-ui/icons/NavigateNextSharp';

import './carousel.css'
import { NavigateBeforeSharp } from '@material-ui/icons';
import { Carousel } from 'react-bootstrap';

function CarouselApp(props) {
  const [imageData, setImage] = useState({})


  let carArr = [
<<<<<<< HEAD
    1, 
    2,
    3, 
    4, 
=======
    <div className="slide-container">
    <Container>
      <Typography variant="h4" className="brand-title">
        {/* {sneakers.results[0].brand} */}
        Nike
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="card">
            <CardActionArea>
              <CardMedia
                className="media"
                image={"https://images.pexels.com/photos/5596125/pexels-photo-5596125.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}
                // image={}
              />
              <CardContent>
                {/* <h5>{sneakers.results[0].name}</h5> */}
                <h5>Air Max</h5>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="card">
            <CardActionArea>
              <CardMedia
                className="media"
                // image={sneakers.results[1].media.imageUrl}
              />
              <CardContent>
              {/* <h5>{sneakers.results[1].name}</h5> */}
              <h5>Air Max</h5>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="card">
            <CardActionArea>
              <CardMedia
                className="media"
                // image={sneakers.results[2].media.imageUrl}
              />
              <CardContent>
                {/* <h5>{sneakers.results[2].name}</h5> */}
                <h5>Air Max</h5>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
      </Container>
    </div> 
    ,
    <div className="slide-container">
      <Container>
        <Typography variant="h4" className="brand-title">
          {/* {sneakers.results[0].brand} */}
        Adidas
      </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className="card">
              <CardActionArea>
                <CardMedia
                  className="media"
                  // image={sneakers.results[0].media.imageUrl}
                  image={"https://images.pexels.com/photos/5596125/pexels-photo-5596125.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}
                />
                <CardContent>
                  {/* <h5>{sneakers.results[0].name}</h5> */}
                  <h5>Air Max</h5>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className="card">
              <CardActionArea>
                <CardMedia
                  className="media"
                // image={sneakers.results[1].media.imageUrl}
                />
                <CardContent>
                  {/* <h5>{sneakers.results[1].name}</h5> */}
                  <h5>Air Max</h5>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className="card">
              <CardActionArea>
                <CardMedia
                  className="media"
                // image={sneakers.results[2].media.imageUrl}
                />
                <CardContent>
                  {/* <h5>{sneakers.results[2].name}</h5> */}
                  <h5>Air Max</h5>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
    ,
    3,
    4,
>>>>>>> 8681d81c3c8c9462150dff1707bc168e48d16365
    5

  ];


  const [x, setX] = useState(0);
  const goLeft = () => {
    x === 0 ? setX(-100 * (carArr.length - 1)) : setX(x + 100);

  };
  const goRight = () => {
    x === -100 * (carArr.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <div className="slider">
      {
        carArr.map((item,index, props)=>{
          return(


            <div key={index} className="slide" style={{transform:`translateX(${x}%)` }}>
              {item}
            </div>
          );
        })
      }


      <button className="sliderBtn" id="leftBtn" onClick={goLeft}>
        <NavigateBeforeSharp></NavigateBeforeSharp>
      </button>
      <button className="sliderBtn" id="rightBtn" onClick={goRight}>
        <NavigateNextSharpIcon></NavigateNextSharpIcon>
      </button>
    </div>
  );
}

export default CarouselApp;