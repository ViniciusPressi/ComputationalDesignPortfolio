import { Box, Grid, Typography } from "@mui/material";
import ProjectCard from "../Components/ProjectCard";
import { projects } from "../Data/projects";

export default function ProjectsPage() {
  return (
    <Box sx={{ py: { xs: 3, md: 5 } }}>
      <Typography className="eyebrow fade-up">Portfolio</Typography>
      <Typography className="section-title fade-up stagger-1">
        Selected computational design projects for architecture and urban
        systems created in a urban tech startup company.
      </Typography>
      <Typography className="section-copy fade-up stagger-2" sx={{ mb: 4 }}>
        A curated set of tools and workflows developed for architecture and
        urban systems, from Grasshopper automation to interactive web
        applications.
      </Typography>

      <Grid container spacing={{ xs: 2, md: 2.5 }} alignItems="stretch">
        {projects.map((project) => (
          <Grid
            size={{ xs: 12, sm: 6, lg: 4 }}
            key={project.id}
            sx={{ display: "flex" }}
          >
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
