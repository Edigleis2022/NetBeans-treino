import { Container, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import api, { apiAxios } from "../api/api";


export default function CampusListagemComponent() {
  const [dados, setDados] = React.useState([]);
  const [nome, setNome] = React.useState("");

  const [contagem, setContagem] = React.useState(0);

  React.useEffect(() => {
    apiAxios("/campus",
    {"nome": nome})
      .then(response => {
        // manipula o sucesso da requisição
        setDados(response.data.content);
        setContagem(response.data.numberOfElements);
      })
      .catch((error) => { 
        console.log(error)
      });
  },[nome]);

  return (
    <Container sx={{ p: 3, m: 3 }}>
      <Paper elevation={2}>
        <Box
          sx={{
            p: 3,
            m: 3,
          }}
        >
          <TextField 
                id="nome"
                fullWidth
                value={nome}
                onChange={(event) => setNome(event.target.value)}
                label="Digite um nome para pesquisar"
                />
          <Typography variant="h3">Consulta de Campi</Typography>
        </Box>
        <Stack>
          {dados.map((item) => (
            <Typography variant="subtitle1">
              {item.nome}
            </Typography>
          ))}
        </Stack>
      </Paper>
    </Container>
  );
}
