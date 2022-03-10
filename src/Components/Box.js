import { Avatar, Box, CardContent, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Card from '@material-ui/core/Card';


const useStyle = makeStyles({

    root:{
        "& img":{
            width:"100%",
            height:"300px"
        }
    }
})

const Boxs = (props) => {
    const classes = useStyle()
  const { img, text} = props;
  return (
    <Box className={classes.root}>
      <Card >
      <CardContent  sx={{textAlign:'center'}}>
        <Typography >
        <img src={img}/>
        </Typography>
        <Typography variant="body2" textAlign='center'>
         {text}
        </Typography>
      </CardContent>
      </Card>
    </Box>
  );
};
export default Boxs;
