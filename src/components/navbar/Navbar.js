import {
  AppBar,
  Toolbar,
  Container
} from '@mui/material';
import { useState } from 'react';
import AutocompleteSearch from './Search';
import Menubar from './Menu';
import Logo from './Logo';
import axios from 'axios';

function NavBar({routes}) {
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const getSuggestions = async (word) => {
    if (word) {
      setLoading(true);
      const {data} = await axios.post(`http://localhost:3200/posts/search?title=${word}`);
      setOptions(data);
      setLoading(false);
    } else {
      setOptions([]);
    }
  }
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo hasLogo={true}></Logo>
          <Menubar routes={routes}/>
          <AutocompleteSearch
            loading={loading}
            options={options}
            requests={getSuggestions}/>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;