import {
  Grid,
  Paper,
  Button } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import javascriptImg from '../../assets/javascript-illustration.png';
import reactImg from '../../assets/react.jpg';
import nodeImg from '../../assets/nodejs.jpg';

const items = [
  {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      image: reactImg
  },
  {
      name: "Random Name #2",
      description: "Hello World!",
      image: nodeImg
  },
  {
    name: "Random Name #3",
    description: "Hello World!",
    image: javascriptImg
}
]

function Presentation() {
  return (
    <Grid item xs={12}>
      <Carousel
        animation='slide'
        NextIcon={<ArrowForwardIosIcon/>}
        PrevIcon={<ArrowBackIosIcon/>}
      >
        {
          items.map( (item, i) => (
            <Paper key={i} sx={{width: '100%'}}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column-reverse',
                  justifyContent: 'flex-start',
                  width: '100%',
                  height: '40vh',
                  backgroundImage: `url(${item.image})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <Button className="CheckButton">
                    Check it out!
                </Button>
              </div>
          </Paper>
          ))
        }
      </Carousel>
    </Grid>
  );
}

export default Presentation;