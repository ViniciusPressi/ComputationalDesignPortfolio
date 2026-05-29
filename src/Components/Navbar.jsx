import { AppBar, Toolbar, Button, Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { defaultFont } from "../assets/defaults";

export default function Navbar() {
  const navLinkStyle = ({ isActive }) => ({
    fontFamily: "var(--font-body)",
    color: isActive ? "var(--accent)" : "var(--text)",
    borderBottom: isActive ? "1px solid var(--accent)" : "1px solid transparent",
    borderRadius: 0,
    textTransform: "none",
    fontSize: "0.9rem",
    letterSpacing: "0.01em",
    paddingInline: "0.25rem",
    minWidth: "auto",
    "&:hover": {
      background: "transparent",
      color: "var(--accent)",
      borderBottomColor: "var(--accent-soft)",
    },
  });

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "rgba(250, 250, 250, 0.9)",
        backdropFilter: "blur(10px)",
        boxShadow: "none",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <Toolbar
        className="page-shell"
        disableGutters
        sx={{
          minHeight: { xs: "64px", md: "72px" },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography
          component={NavLink}
          to="/"
          sx={{
            fontFamily: defaultFont,
            fontSize: { xs: "0.95rem", md: "1.15rem" },
            letterSpacing: "0.01em",
            color: "var(--text)",
            whiteSpace: "nowrap",
          }}
        >
          Vinicius S. Pressi
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 1.2, md: 3 } }}>
          <Button component={NavLink} to="/" sx={navLinkStyle}>
            Home
          </Button>
          <Button component={NavLink} to="/projects" sx={navLinkStyle}>
            Projects
          </Button>
          <Button component={NavLink} to="/about" sx={navLinkStyle}>
            About
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
