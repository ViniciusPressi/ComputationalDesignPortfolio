import { Typography, Box, Stack, Link } from "@mui/material";
import profileImage from "../assets/images/profile.jpg";

export default function About() {
  const coreCompetencies = [
    "Urban feasibility studies, parametric workflows, and computational design strategies",
    "Design automation and digital tool development for architecture and urban planning",
    "Computer-aided design (CAD) and building information modeling (BIM) environments",
    "3D modeling, complex geometry creation, and Boolean operations",
    "CNC-ready file preparation and digital fabrication workflows",
    "Multidisciplinary collaboration with UX developers, design teams, and clients",
    "AI-assisted development, workflow acceleration, and maintainable solution implementation",
  ];

  const technicalSkills = [
    "Computational design and parametric modeling",
    "Urban design and feasibility analysis",
    "BIM- and CAD-driven workflows",
    "3D modeling and digital fabrication",
    "Design automation and generative systems",
    "Visualization and presentation development",
  ];

  const softwareTools = [
    "Rhinoceros 3D",
    "Grasshopper",
    "Archicad",
    "AutoCAD",
    "SketchUp",
    "Lumion",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe InDesign",
  ];

  const programmingLanguages = ["C#", "Python", "JavaScript"];

  const spokenLanguages = ["Portuguese (Native)", "English (C2)"];

  return (
    <Box sx={{ py: { xs: 3, md: 5 } }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "minmax(0, 1.6fr) minmax(320px, 1fr)",
          },
          gap: { xs: 4, md: 5 },
          alignItems: "start",
        }}
      >
        <Box className="fade-up stagger-1">
          <Stack spacing={4.5}>
            <Box>
              <Typography className="eyebrow">About</Typography>
              <Typography className="section-copy">
                Hi, I’m a computational designer with an architecture
                background, focused on parametric systems, geometry processing,
                and digital products for design teams.
              </Typography>
            </Box>

            <Box>
              <Typography className="eyebrow" sx={{ mb: 2 }}>
                Background
              </Typography>
              <Typography sx={{ color: "var(--text-muted)", lineHeight: 1.85 }}>
                I graduated in Architecture and Urbanism from Unisinos
                University (Brazil) and completed a postgraduate specialization
                in Parametric Design for Architecture at PUC Minas. During
                university, I was inspired by architecture offices such as Zaha
                Hadid Architects and BIG. Motivated by this interest, I started
                researching the tools and workflows they used in their projects,
                which led me to independently learn Rhino, Grasshopper, and
                parametric design techniques. After graduating, I pursued a
                postgraduate specialization in Parametric Design to deepen my
                knowledge in these areas. This path shaped my approach to
                combining design logic with programming, digital fabrication,
                and systems thinking.
              </Typography>
            </Box>

            <Box>
              <Typography className="eyebrow" sx={{ mb: 2 }}>
                Professional Experience
              </Typography>
              <Typography sx={{ color: "var(--text-muted)", lineHeight: 1.85 }}>
                At Urbia Urban Tech, I developed parametric workflows in Rhino
                and Grasshopper to automate urban design processes and support
                faster scenario generation. As projects grew in complexity, my
                work expanded from script development to software development,
                including custom Grasshopper components in Python and C# and
                contributions to a proprietary C# plugin used internally by the
                team.
              </Typography>
            </Box>

            <Box>
              <Typography className="eyebrow" sx={{ mb: 2 }}>
                Current Focus
              </Typography>
              <Typography sx={{ color: "var(--text-muted)", lineHeight: 1.85 }}>
                I am currently extending this practice to web-based
                computational design, developing interactive parametric tools
                with JavaScript, React, and Rhino3dm to make generative systems
                more accessible and collaborative.
              </Typography>
            </Box>

            <Box>
              <Typography className="eyebrow" sx={{ mb: 2 }}>
                Core Competencies
              </Typography>
              <Stack spacing={1.2}>
                {coreCompetencies.map((item) => (
                  <Typography key={item} sx={{ color: "var(--text-muted)" }}>
                    - {item}
                  </Typography>
                ))}
              </Stack>
            </Box>

            <Box>
              <Typography className="eyebrow" sx={{ mb: 2 }}>
                Technical Skills
              </Typography>
              <Stack spacing={1.2}>
                {technicalSkills.map((item) => (
                  <Typography key={item} sx={{ color: "var(--text-muted)" }}>
                    - {item}
                  </Typography>
                ))}
              </Stack>
            </Box>

            <Box>
              <Typography className="eyebrow" sx={{ mb: 2 }}>
                Software & Tools
              </Typography>
              <Stack spacing={1.2}>
                {softwareTools.map((item) => (
                  <Typography key={item} sx={{ color: "var(--text-muted)" }}>
                    - {item}
                  </Typography>
                ))}
              </Stack>
            </Box>

            <Box>
              <Typography className="eyebrow" sx={{ mb: 2 }}>
                Programming Languages
              </Typography>
              <Stack spacing={1.2}>
                {programmingLanguages.map((item) => (
                  <Typography key={item} sx={{ color: "var(--text-muted)" }}>
                    - {item}
                  </Typography>
                ))}
              </Stack>
            </Box>

            <Box>
              <Typography className="eyebrow" sx={{ mb: 2 }}>
                Languages
              </Typography>
              <Stack spacing={1.2}>
                {spokenLanguages.map((item) => (
                  <Typography key={item} sx={{ color: "var(--text-muted)" }}>
                    - {item}
                  </Typography>
                ))}
              </Stack>
            </Box>

            <Box>
              <Typography className="eyebrow" sx={{ mb: 2 }}>
                What I Bring
              </Typography>
              <Stack spacing={1.2}>
                <Typography sx={{ color: "var(--text-muted)" }}>
                  - End-to-end computational workflows from concept to tool.
                </Typography>
                <Typography sx={{ color: "var(--text-muted)" }}>
                  - Strong bridge between design teams and engineering teams.
                </Typography>
                <Typography sx={{ color: "var(--text-muted)" }}>
                  - Experience translating advanced logic into usable products.
                </Typography>
              </Stack>
            </Box>
          </Stack>
        </Box>

        <Box className="fade-up stagger-2">
          <Stack
            spacing={2.5}
            sx={{
              position: { md: "sticky" },
              top: { md: 96 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "flex-start", md: "center" },
              }}
            >
              <Box
                component="img"
                src={profileImage}
                alt="Vinicius Steffens Pressi"
                sx={{
                  width: { xs: 180, md: 240 },
                  height: { xs: 180, md: 240 },
                  objectFit: "cover",
                  borderRadius: "50%",
                  border: "1px solid var(--line)",
                  boxShadow: "var(--shadow-soft)",
                }}
              />
            </Box>

            <Box
              sx={{
                p: 2.5,
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--line)",
                backgroundColor: "var(--surface)",
                boxShadow: "var(--shadow-soft)",
                display: "grid",
                gap: 1.3,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.2rem",
                  color: "var(--text)",
                }}
              >
                Open to Work
              </Typography>
              <Typography
                sx={{ color: "var(--text-muted)", fontSize: "0.95rem" }}
              >
                Open to international remote roles.
              </Typography>
              <Typography
                sx={{ color: "var(--text-muted)", fontSize: "0.95rem" }}
              >
                Location: Rio Grande do Sul, Brazil
              </Typography>
              <Typography
                sx={{ color: "var(--text-muted)", fontSize: "0.95rem" }}
              >
                Portuguese (Native) | English (C2)
              </Typography>
              <Link
                href="mailto:vinispressi@gmail.com"
                underline="hover"
                color="inherit"
              >
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
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
