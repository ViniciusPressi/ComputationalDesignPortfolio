import { Typography, Container } from "@mui/material";
import { defaultFont, secondaryFont } from "../assets/defaults";

export default function Home() {
  return (
    <Container>
      <Typography
        variant="h2"
        color={"white"}
        marginTop={5}
        fontFamily={defaultFont}
      >
        Vinícius Steffens Pressi
      </Typography>

      <Typography variant="h4" color={"white"} marginTop={1}>
        Computational Designer
      </Typography>
    </Container>
  );
}
