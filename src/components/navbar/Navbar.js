import {
  AppBar,
  Toolbar,
  Container
} from '@mui/material';

import AutocompleteSearch from './Search';
import Menubar from './Menu';
import Logo from './Logo';

function NavBar({routes}) {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo hasLogo={true}></Logo>
          <Menubar routes={routes}/>
          <AutocompleteSearch />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;