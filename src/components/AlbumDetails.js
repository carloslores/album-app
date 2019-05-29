import React from "react"
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';

const AlbunDetails = album => {

    console.log(album.album)
return(
   
    <article className="col-sm-6 col-md-6 col-lg-6">
        <Card
            className="card card-album" >
            <CardActionArea className="card ">
                
                <img className="album-img" src={album.album.url}/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {album.album.title}
                        
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        {album.album.albumId}
                        
                    </Typography>
                  {/* <Link className="details" to={`/${album.id}`}> Detalles</Link> */}
                </CardContent>
               
            </CardActionArea>
           
        </Card>
 
    
    </article>
)

}

export default AlbunDetails