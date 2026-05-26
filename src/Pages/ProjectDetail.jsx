import { useParams } from "react-router-dom";
import { projects } from "../Data/projects";
import { Container, Typography, Box, Grid } from "@mui/material";
import { defaultFont, secondaryFont } from "../assets/defaults";

export default function ProjectDetail() {
  const { id } = useParams();

  const project = projects.find((p) => p.id === id);

  if (!project) return <Typography>Project not found</Typography>;

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={5}>
        {/* TITLE */}
        <Grid item xs={12} size={12}>
          <Typography variant="h3" fontFamily={defaultFont}>
            {project.title}
          </Typography>
        </Grid>

        {/* TEXT COLUMN */}
        <Grid item xs={12} md={7} size={12}>
          {project.description?.map((text, index) => (
            <Typography
              key={index}
              variant="body1"
              sx={{ mb: 2, lineHeight: 1.7 }}
              fontFamily={secondaryFont}
            >
              {text}
            </Typography>
          ))}

          <Typography
            variant="subtitle1"
            sx={{ mt: 3, opacity: 0.7 }}
            fontFamily={secondaryFont}
          >
            Tools: {project.tools.join(", ")}
          </Typography>
        </Grid>

        {/* MEDIA COLUMN */}
        <Grid item xs={12} md={12} size={12}>
          {project.videos?.map((video, index) => (
            <Box
              key={index}
              sx={{
                width: "100%",
                aspectRatio: "16 / 9",
                mb: 6,
              }}
            >
              <iframe
                src={video}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "8px",
                  border: "none",
                }}
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </Box>
          ))}
        </Grid>

        {/* IMAGES */}
        <Grid item xs={12} size={6}>
          {project.images?.map((img, index) => (
            <Box key={index} sx={{ mb: 4 }}>
              <img
                src={img}
                alt="project"
                style={{
                  width: "100%",
                  borderRadius: "8px",
                }}
              />
            </Box>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}
