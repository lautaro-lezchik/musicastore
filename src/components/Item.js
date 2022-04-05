import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActions } from '@mui/material';
import { Button } from '@mui/material';




export default function Item ({id, image , name, price, excerp}) {
    return (
        <>
        <Card sx={{ maxWidth: 400 }} key={id} >
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt=""
                    />

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    
                    <Typography gutterBottom variant="h6" component="div">
                        ${price}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        {excerp}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="big">Add to Cart</Button>
                </CardActions>
        </Card> 
        </>
    );
}

//export default Item; 