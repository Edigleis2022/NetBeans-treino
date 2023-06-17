import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import api from "../api/api";
export default function CampusListagemComponent() {
  const [dados, setDados] = React.useState({ id: -1, nome: "" });
  const [contagem, setContagem] = React.useState(0);

  React.useEffect(() => {
    let localUrl = new URL("http://localhost:8080/api/campus");
    localUrl.search = new URLSearchParams({"nome": nome}).toString();
    api.get(lcalUrl)
      .then((response) => {
        // manipula o sucesso da requisição
        setDados(response.data.content);
        setContagem(response.data.numberOfElements);
      })
      .catch((error) => console.log(error));
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
          <Typography variant="h3">Consulta de Campi</Typography>
        </Box>
        <Stack>
          {dados.map((item) => (
            <Typography variant="subtitle1">{item.nome}</Typography>
          ))}
        </Stack>
      </Paper>
    </Container>
  );
}
