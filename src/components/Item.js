import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActions } from '@mui/material';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import PriceFormat from './PriceFormat';




    export default function Item ({id, image , name, price}) {


    return (
        <>
        <Link to={`/item/${id}`}>
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

                        <PriceFormat price= {price}/>

                    </CardContent>
                    <CardActions>
                        <Link to={`/item/${id}`}><Button size="big">Details</Button></Link>
                    </CardActions>
            </Card>
        </Link>
        </>
    );
}

