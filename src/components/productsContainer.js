//import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
//import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Item from './Item';

const productContainer = () => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Item />
        </Grid>
        <Grid item xs={3}>
            <Item />
        </Grid>
        <Grid item xs={3}>
            <Item />
        </Grid>
        <Grid item xs={3}>
            <Item />
        </Grid>
        <Grid item xs={3}>
            <Item />    
        </Grid>
        <Grid item xs={3}>
            <Item />
        </Grid>
        <Grid item xs={3}>
            <Item />
        </Grid>
        <Grid item xs={3}>
            <Item />
        </Grid>
      </Grid>
    </Box>
  );
}


export default productContainer;