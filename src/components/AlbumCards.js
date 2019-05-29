import React from "react"
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';


import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';


const styles = {
    card: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  };
  

const AlbumCards = album =>{

    return(
       <article className="col-sm-6 col-md-4 col-lg-6">
           <Card
            className="card card-album" >
            <CardActionArea className="card ">
                
                <img className="album-img" src="https://media.idownloadblog.com/wp-content/uploads/2015/06/iTunes-El-Capitan-Wallaper-iPad-By-Jason-Zigrino.png"></img>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {album.title}
                    </Typography>
                  <Link className="details" to={`/${album.id}`}> Detalles</Link>
                </CardContent>
               
            </CardActionArea>
           
        </Card>



       </article>

    )

}

export default withStyles(styles)(AlbumCards)