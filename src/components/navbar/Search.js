import * as React from 'react';
import {
  Button,
  TextField,
  Autocomplete,
  Box
} from '@mui/material';
import {blogList} from '../data/blogsData';

function AutocompleteSearch() {
  return (
    <Box sx={
      {
        display:'flex',
        justifyItems: 'space-between',
        flexGrow: 0,
      }
    }>
      <Autocomplete
        disablePortal
        id='autocomplete-search'
        options={blogList}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label='Blogs' />}
      />
      <Button variant='outlined'>Search</Button>
   </Box>
  );
}
export default AutocompleteSearch;

