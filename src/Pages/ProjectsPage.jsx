import { Grid, Container } from "@mui/material";
import ProjectCard from "../Components/ProjectCard";
import { projects } from "../Data/projects";

export default function ProjectsPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 10 }}>
      <Grid container spacing={3} padding={3} alignContent={"center"}>
        {projects.map((project) => (
          <Grid item xs={12} md={4} key={project.id}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
