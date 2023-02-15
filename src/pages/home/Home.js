import {
  Grid,
} from '@mui/material';
import './HomeStyles.scss'
import imageReptile from '../../assets/reptile.jpg';
import Presentation from './Presentation';
import VideoDemo from './VideoDemo';
import CardsSection from './CardsSection';

const listImageCard = [
  { 
    id: 1,
    name: imageReptile
  },
  {
    id: 2,
    name: imageReptile
  },
  {
    id: 3,
    name: imageReptile
  }
]
function Home() {
  return(
    <Grid container spacing={2} className='presentation'>
      <Presentation />
      <VideoDemo />
      <CardsSection listImageCard={listImageCard}/>
    </Grid>
  );
}

export default Home;