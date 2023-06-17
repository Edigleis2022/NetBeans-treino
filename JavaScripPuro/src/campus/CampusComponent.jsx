import { Box, Button, Container, Grid, Paper, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import api from "../api/api"


export default function CampusComponent(){
   const [ dados,setDados ] = React.useState({id: -1, nome: ''});
   api.get("?campus/list")
   .then(response => {
      // manipula o sucesso da requisição
      console.log(response);
      response.data
    })
    .catch(error => console.log(error));
console.log([dados])
 return (
    <Container maxWidth="md" >
         Helo World!!!
         <Paper elevation={2} sx={{
            p:3,
            m:3
         }} >
            <Box sx={{
               border: "1px solid black",
               m:2,
               p:3
               }}>
               <Typography variante="h3" >
                  Dados Campus
               </Typography>
            </Box>
            <Grid container spacing={1}>
               <Grid item xs={12}>
                  <TextField label="ID"/>
               </Grid>
               <Grid item xs={12}>
                  <TextField fullWidth label=" Digite o nome do campus"/>
               </Grid>
            </Grid>
            <Grid item xs={12} >
               <Stack direction={"row"}>
               <Button>Salvar</Button>
               <Button>Voltar</Button>
               </Stack>
            </Grid>
         </Paper>
    </Container>
 )
    
}