import { Grid } from '@mui/material';
import { useParams } from 'react-router-dom';

function ViewPost() {
  const params = useParams();
  console.log(params);
  return (
    <Grid container spacing={2} sx={{marginTop: '10%'}}>
       <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        View post
       </Grid>
    </Grid>
  );
}

export default ViewPost;