import { Container, Typography } from "@mui/material";
import React from "react";

export default function CampusListagemComponent(){

    return (
        <Container sx= {{p:3}}>
            <Paper elevation={2} sx={{
            p:3,
            m:3
         }} >
                <Box>
                    <Typography>
                        Consultta de Campi
                    </Typography>
                </Box>
            </Paper>
        </Container>
    )
}