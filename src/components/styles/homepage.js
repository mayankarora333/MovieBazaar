import { CardContent, Grid, Rating, Typography } from "@mui/material";
import Header from "../common/header";

// useInsertionEffect(()=>)

//
function HomePage() {
  return (
    <div>
      <Header />
    </div>
  );
}

export default HomePage;

{/* <Grid container spacing={2}>
    {MovieData.map((movie,index)=>(
        <Grid items xs ={12} sm={6} md={4} key={index}>
            <ink to={`/movie/$movie.id}`}>
    ))}
</Grid>  */}
<card> 
    <cardmedia componenet ="img"
    height="300"
    image={DeviceMotionEvent.image}
    alt={DeviceMotionEvent.title}>
        <CardContent>
            <Typography variant="h6">{movie.title}</Typography>
         <Rating name="movie-rating"
         value={Number(movie.Rating)/2}
         precision={0.5}
         readOnly />
        </CardContent>
    </cardmedia>
</card>