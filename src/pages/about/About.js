import{
  Grid,
  Typography,
  Card,
  CardContent,
} from '@mui/material'

import Groups2Icon from '@mui/icons-material/Groups2';
import InsightsIcon from '@mui/icons-material/Insights';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import {aboutUsData} from './data';

function About() {
  const getIcon = (title) => {
    switch(title) {
      case 'LIDERSHIP':
        return (<Groups2Icon />);
      case 'CAREERS':
        return (<InsightsIcon />);
      case 'PARTNERSHIP':
        return (<Diversity3Icon />);
      default:
        return null;
    }
  }

  return (
    <Grid
      container
      spacing={2}
      direction='column'
      justifyContent='center'
      alignItems='center'
      sx={{marginTop: '10%'}}
    >
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography gutterBottom variant='h5' component='div'>
          GET TO KNOW US
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Grid container spacing={2}>
          {aboutUsData.map(data => (
            <Grid item xs={4} key={data.id}>
              <Card variant="outlined">
                <CardContent sx={{ textAlign: 'center' }}>
                  {getIcon(data.title)}
                  <Typography
                    sx={{ fontSize: 14 }}
                    color='text.secondary'
                    gutterBottom
                  >
                    {data.title}
                  </Typography>
                  <Typography variant='body2'>
                    {data.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default About;