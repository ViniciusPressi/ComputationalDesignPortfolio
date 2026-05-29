import { Box, Container, Link, Stack, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: "1px solid var(--line)",
        backgroundColor: "var(--bg-elevated)",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          py: { xs: 5, md: 6 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          gap: 3,
        }}
      >
        <Box>
          <Typography
            sx={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.35rem",
              color: "var(--text)",
              mb: 0.5,
            }}
          >
            Let&apos;s build meaningful tools for design.
          </Typography>
          <Typography sx={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
            Open to international remote roles.
          </Typography>
        </Box>

        <Stack spacing={1} sx={{ color: "var(--text)", fontSize: "0.95rem" }}>
          <Link href="mailto:vinispressi@gmail.com" underline="hover" color="inherit">
            vinispressi@gmail.com
          </Link>
          <Link
            href="https://www.linkedin.com/in/vinicius-steffens-pressi-65aa631ba"
            target="_blank"
            rel="noreferrer"
            underline="hover"
            color="inherit"
          >
            LinkedIn
          </Link>
          <Typography sx={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
            Rio Grande do Sul, Brazil
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
