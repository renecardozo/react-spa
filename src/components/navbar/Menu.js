import { Box, Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Menubar({routes}) {
  const navigate = useNavigate();
  return(
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {routes.map(route => (
        <Button
          key={`${route.path}+${route.name}`}
          onClick={() => navigate(route.path)}
          sx={{ my: 2, color: 'white', display: 'block' }}
        >
          {route.name}
        </Button>
      ))}
    </Box>
  );
}

export default Menubar;