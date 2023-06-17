import { Container, Typography } from "@mui/material";
import React from "react";
import api from "../api/api"
export default function CampusListagemComponent(){

    const [ dados,setDados ] = React.useState({id: -1, nome: ''});

   React.useEffect(async() => )
   api.get("/campus/list")
   .then(response => {
      // manipula o sucesso da requisição
        setDados(response.data);
    })
    .catch(error => console.log(error));
console.log(dados);

    return (
        <Container sx= {{p:3}}>
            <Paper elevation={2} sx={{
            p:3,
            m:3
         }} >
                <Box>
                    <Typography>
                        Consulta de Campi
                    </Typography>
                </Box>
            </Paper>
        </Container>
    )
}