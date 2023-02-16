import {
  useState,
  Fragment,
  useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  TextField,
  Autocomplete,
  Box,
  CircularProgress
} from '@mui/material';
import debounce from 'lodash.debounce';
import { useAppContext } from '../../context/Hooks';
function AutocompleteSearch({
  loading,
	options,
	requests,
}) {
  const [inputValue, setInputValue] = useState('');
  const [open, setOpen] = useState(false);
  const {state} = useAppContext();
  const navigate = useNavigate();
  const debouncedSave = useCallback(
    debounce((newValue) => requests(newValue), 1000),
    []
  );
  const updateValue = (newValue) => {
    setInputValue(newValue);
    debouncedSave(newValue);
  };

  const handleInputChange = (value, reason) => {
    if(reason === 'reset') {
      const post = state.postList.find(p => p.title == value);
      if (post) {
        navigate(`/view-post/${post.id}`);
      }
    }
  }


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
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        options={options}
        sx={{ width: 300 }}
        isOptionEqualToValue={(option, value) => option.title === value.title}
        getOptionLabel={(option) => option.title}
        onInputChange={(event,value,reason) => handleInputChange(value, reason)}
        renderInput={(params) => (
          <Fragment>
            {loading ? <CircularProgress color="inherit" size={20} /> : null}
            <TextField {...params} label='Blogs' onChange={(input) => updateValue(input.target.value)} value={inputValue}/>
          </Fragment>
        )}
      />
      <Button variant='outlined'>Search</Button>
   </Box>
  );
}
export default AutocompleteSearch;

