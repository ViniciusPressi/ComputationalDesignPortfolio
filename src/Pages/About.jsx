import { Container, Grid, Typography, Box } from "@mui/material";
import ProjectCard from "../Components/ProjectCard";
import { projects } from "../Data/projects";
import profileImage from "../assets/images/profile.jpg";
import { defaultFont, secondaryFont } from "../assets/defaults";

export default function About() {
  return (
    <Container maxWidth="lg" sx={{ py: 10 }}>
      <Grid container spacing={6} alignItems="top">
        {/* LEFT - IMAGE */}
        <Grid size={{ xs: 12, md: 5 }} display="flex" justifyContent="center">
          <Box
            component="img"
            src={profileImage}
            alt="Profile"
            sx={{
              width: 280,
              height: 280,
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
        </Grid>

        {/* RIGHT - TEXT */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Typography
            fontFamily={defaultFont}
            color={"white"}
            variant="h3"
            sx={{
              mb: 3,
            }}
          >
            About Me
          </Typography>

          <Typography
            fontFamily={secondaryFont}
            color={"white"}
            variant="body1"
            sx={{
              lineHeight: 1.8,
              fontSize: "1.1rem",
            }}
          >
            I am a Computational Designer with a background in Architecture and
            Urbanism, specializing in parametric design, geometry processing,
            and design automation.
          </Typography>

          <Typography
            fontFamily={secondaryFont}
            color={"white"}
            variant="body1"
            sx={{
              lineHeight: 1.8,
              fontSize: "1.1rem",
            }}
          >
            My interest in design began early through building and experimenting
            with Lego, where I developed a fascination for creating structures
            and exploring spatial ideas. This curiosity naturally led me to
            pursue Architecture, but during my academic journey I became
            increasingly interested in exploring more complex geometries and
            generative design approaches beyond traditional architectural
            workflows. Discovering parametric design was a turning point, as it
            provided the tools and mindset to combine design, computation, and
            problem-solving.
          </Typography>

          <Typography
            fontFamily={secondaryFont}
            color={"white"}
            variant="body1"
            sx={{
              mt: 3,
              lineHeight: 1.8,
              fontSize: "1.1rem",
            }}
          >
            I graduated in Architecture and Urbanism from Unisinos University
            (Brazil) and later completed a postgraduate specialization in
            Parametric Design for Architecture at PUC Minas, where I deepened my
            knowledge in computational design, digital fabrication, and
            programming applied to architectural workflows.
          </Typography>

          <Typography
            fontFamily={secondaryFont}
            color={"white"}
            variant="body1"
            sx={{
              mt: 3,
              lineHeight: 1.8,
              fontSize: "1.1rem",
            }}
          >
            During this period, I began working as a Computational Designer at
            Urbia Urban Tech, a startup focused on urban design and planning
            technologies. My work focused on developing parametric workflows in
            Rhino and Grasshopper to automate urban design processes, enabling
            faster generation of urban layouts, blocks, and land-use
            configurations while integrating real-time data feedback.
          </Typography>
          <Typography
            fontFamily={secondaryFont}
            color={"white"}
            variant="body1"
            sx={{
              mt: 3,
              lineHeight: 1.8,
              fontSize: "1.1rem",
            }}
          >
            As projects grew in complexity, I expanded my role from script
            development to software development within the Rhino/Grasshopper
            ecosystem. I developed custom Grasshopper components using Python
            and C#, optimized computational workflows, and contributed to the
            development of a proprietary Grasshopper plugin written in C# used
            internally by the team.
          </Typography>
          <Typography
            fontFamily={secondaryFont}
            color={"white"}
            variant="body1"
            sx={{
              mt: 3,
              lineHeight: 1.8,
              fontSize: "1.1rem",
            }}
          >
            My work sits at the intersection of design and software development,
            where I build tools that extend the capabilities of design platforms
            and enable more efficient and data-driven design processes.
          </Typography>
          <Typography
            fontFamily={secondaryFont}
            color={"white"}
            variant="body1"
            sx={{
              mt: 3,
              lineHeight: 1.8,
              fontSize: "1.1rem",
            }}
          >
            Currently, I am expanding this approach toward web-based
            computational design, developing parametric tools using JavaScript,
            React, and Rhino3dm, bringing parametric workflows to interactive
            web environments and enabling new ways to share and interact with
            generative design systems.
          </Typography>
          <Typography
            fontFamily={secondaryFont}
            color={"white"}
            variant="body1"
            sx={{
              mt: 3,
              lineHeight: 1.8,
              fontSize: "1.1rem",
            }}
          >
            I am particularly interested in roles that combine computational
            design, geometry processing, and software development, where I can
            contribute to building tools and workflows that support innovative
            design processes.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
