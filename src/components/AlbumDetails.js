import React from "react"
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';

const AlbunDetails = album => {

  
return(
   
    <article className="col-sm-6 col-md-6 col-lg-6">
        <Card
            className="card card-album" >
            <CardActionArea className="card ">
                
                <img className="album-img" alt="album" src={album.album.url} />
                <CardContent>
                <Typography gutterBottom variant="h3" component="h2">
                       <span className="photo-title">Photo album:</span>
                        
                    </Typography>
                    <Typography gutterBottom variant="h4" component="h2">
                    <span className="photo-title"> {album.album.title}</span>
                        
                    </Typography>
                   
                  
                </CardContent>
               
            </CardActionArea>
           
        </Card>
 
    
    </article>
)

}

export default AlbunDetails