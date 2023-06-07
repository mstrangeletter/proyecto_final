import React from "react";
import { AppBar, Typography, Grid, Box } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <AppBar
      position="relative"
      color="primary"
      sx={{
        padding:"4rem",
        marginTop:"3rem",
        position: "",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#0C134F',
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
        textTransform: "uppercase",
        height: "40vh",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Grid container alignItems="center" spacing={1}>
            <Grid sx={{
                
            }} item>
            <Box sx={{
                display:"block"
            }}>
              <Typography className="title" variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Harmoni <span className="mark_prop">Prop</span>
            </Typography>

            </Box>
            </Grid>
            <Grid item>
              <FacebookIcon fontSize="small" />
            </Grid>
            <Grid item>
              <TwitterIcon fontSize="small" />
            </Grid>
            <Grid item>
              <InstagramIcon fontSize="small" />
            </Grid>
            <Grid item>
              <LinkedInIcon fontSize="small" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            EMPRESA
          </Typography>
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            <li>ACERCA DE</li>
            <li>Trabaja con nosotros</li>
            <li>Prensa</li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            ENLACES ÚTILES
          </Typography>
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            <li>Soporte técnico</li>
            <li>Contacto</li>
            <li>Vive Plus</li>
          </ul>
        </Grid>
      </Grid>
    </AppBar>
  );
}

export default Footer;
