import {
  Box,
  Grid,
  Typography,
  TextField,
  Button
} from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import PlaceIcon from '@mui/icons-material/Place';

function Contact() {

  return (
    <Grid container spacing={2} sx={{marginTop: '10%'}}>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <Typography gutterBottom variant="h5" component="div">
          GET IN TOUCH
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <CallIcon />
        <Typography variant="body1" color="text.secondary">
          Phone +1234567890
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <MailIcon />
        <Typography variant="body1" color="text.secondary">
          Email: company@m
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <PlaceIcon />
        <Typography variant="body1" color="text.secondary">
          7 Mule Trail, Trinity,tx, 35862 United States
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        sx={{ display: "flex", justifyContent: "center", marginTop: "25px" }}
      >
        <form style={{ display: "flex", marginLeft: "25px" }}>
          <Grid item xs={6}>
            <Box sx={{ width: 500, maxWidth: "100%" }}>
              <TextField fullWidth label="Your Name" id="nameFullWidth" />
            </Box>
            <Box sx={{ width: 500, maxWidth: "100%" }}>
              <TextField fullWidth label="Your Email" id="emailFullWidth" />
            </Box>
            <Box sx={{ width: 500, maxWidth: "100%" }}>
              <TextField fullWidth label="Your Phone" id="phoneFullWidth" />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ width: 500, maxWidth: "100%" }}>
              <TextField
                rows={6}
                fullWidth
                multiline
                label="Your Message"
                id="phoneFullWidth"
              />
            </Box>
          </Grid>
        </form>
      </Grid>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <Button variant='contained'>Send Message</Button>
      </Grid>
    </Grid>
  );
}

export default Contact;