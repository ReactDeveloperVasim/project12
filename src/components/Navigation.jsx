import { Card, CardContent, Grid,Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const Navigation=()=> {
  return (

    <Card sx={{bgcolor:'lightblue'}}>
        <CardContent>
        <Grid container spacing={2}>
            <Grid item xs={2}>
            <Link to="/">
                <Button variant="contained" fullWidth color="warning">Home</Button>
            </Link>
            </Grid>

            
            <Grid item xs={2}>
            <Link to="/product">
                <Button variant="contained" fullWidth color='warning'>Product</Button>
                </Link>
            </Grid>

            <Grid item xs={2}>
            <Link to="/contact">
                <Button variant="contained" fullWidth color='warning'>Contact</Button>
                </Link>
            </Grid>

            <Grid item xs={2}>
            <Link to="/login">
                <Button variant="contained" fullWidth color='warning'>Login</Button>
                </Link>
            </Grid>


        </Grid>
        </CardContent>
    </Card>
       
  )
}
