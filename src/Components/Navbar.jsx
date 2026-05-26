import { AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { defaultFont, secondaryFont, NeutralGrey } from "../assets/defaults";

export default function Navbar() {
  const navButton = {
    fontFamily: secondaryFont,
    color: "white",
    "&:hover": {
      color: NeutralGrey,
    },
  };

  return (
    <AppBar
      position="absolute"
      sx={{
        background: "transparent",
        boxShadow: "none",
      }}
    >
      <Toolbar>
        <Button sx={navButton} component={Link} to="/">
          Welcome
        </Button>

        <Button sx={navButton} component={Link} to="/projects">
          Projects
        </Button>

        <Button sx={navButton} component={Link} to="/about">
          About Me
        </Button>
      </Toolbar>
    </AppBar>
  );
}
