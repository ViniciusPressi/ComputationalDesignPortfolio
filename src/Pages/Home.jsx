import { useEffect, useMemo, useRef, useState } from "react";
import { Box, Button, Chip, IconButton, Stack, Typography } from "@mui/material";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { Link } from "react-router-dom";
import { projects } from "../Data/projects";

const capabilities = [
  "Urban Feasibility Studies",
  "Parametric Workflows",
  "Design Automation",
  "CAD/BIM Systems",
  "3D Modeling",
  "Digital Fabrication",
  "AI-Assisted Development",
];

const featuredProjects = projects.slice(0, 3);
const AUTO_ADVANCE_MS = 4500;

export default function Home() {
  const carouselProjects = useMemo(
    () => projects.filter((project) => project.cover),
    [],
  );
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const totalSlides = carouselProjects.length;

  const clearTimer = () => {
    if (!timerRef.current) return;
    window.clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const goToSlide = (index) => {
    if (!totalSlides) return;
    setCurrentSlide((index + totalSlides) % totalSlides);
  };

  const goToNext = () => {
    if (!totalSlides) return;
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const goToPrevious = () => {
    if (!totalSlides) return;
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    clearTimer();
    if (isPaused || totalSlides <= 1) return undefined;

    timerRef.current = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, AUTO_ADVANCE_MS);

    return clearTimer;
  }, [isPaused, totalSlides]);

  return (
    <Box sx={{ display: "grid", gap: { xs: 7, md: 10 }, pb: { xs: 4, md: 2 } }}>
      <Box
        className="fade-up"
        sx={{
          pt: { xs: 2, md: 5 },
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1fr) minmax(320px, 520px)" },
          alignItems: "center",
          gap: { xs: 3, md: 4 },
        }}
      >
        <Box>
          <Typography className="eyebrow">Computational Design Portfolio</Typography>
          <Typography
            sx={{
              mt: 2,
              maxWidth: "16ch",
              fontFamily: "var(--font-heading)",
              fontSize: { xs: "2.2rem", md: "4rem" },
              lineHeight: { xs: 1.1, md: 1.04 },
              letterSpacing: "-0.03em",
              color: "var(--text)",
            }}
          >
            I design and engineer computational tools for architecture and urban systems.
          </Typography>
          <Typography
            className="section-copy fade-up stagger-1"
            sx={{ mt: 3, fontSize: { xs: "1rem", md: "1.1rem" } }}
          >
            I transform parametric logic into practical products used by planners,
            architects, and design teams. Open to international remote roles.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1.5}
            className="fade-up stagger-2"
            sx={{ mt: 4 }}
          >
            <Button
              component={Link}
              to="/projects"
              variant="contained"
              sx={{
                alignSelf: "flex-start",
                textTransform: "none",
                px: 2.4,
                py: 1,
                borderRadius: "999px",
                backgroundColor: "var(--accent)",
                color: "var(--surface)",
                "&:hover": { backgroundColor: "var(--accent-hover)" },
              }}
            >
              View Projects
            </Button>
            <Button
              component="a"
              href="mailto:vinispressi@gmail.com"
              variant="outlined"
              sx={{
                alignSelf: "flex-start",
                textTransform: "none",
                px: 2.4,
                py: 1,
                borderRadius: "999px",
                borderColor: "var(--line)",
                color: "var(--text)",
                "&:hover": {
                  borderColor: "var(--accent-soft)",
                  backgroundColor: "rgba(78, 122, 142, 0.08)",
                },
              }}
            >
              Contact
            </Button>
          </Stack>
        </Box>

        {totalSlides > 0 ? (
          <Box
            className="fade-up stagger-1"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocusCapture={() => setIsPaused(true)}
            onBlurCapture={() => setIsPaused(false)}
            sx={{
              position: "relative",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              border: "1px solid var(--line)",
              backgroundColor: "var(--surface)",
              boxShadow: "var(--shadow-soft)",
            }}
          >
            <Box
              component={Link}
              to={`/project/${carouselProjects[currentSlide]?.id}`}
              sx={{
                display: "block",
                aspectRatio: "16 / 10",
                position: "relative",
              }}
            >
              <Box
                component="img"
                src={carouselProjects[currentSlide]?.cover}
                alt={`${carouselProjects[currentSlide]?.title} cover image`}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 320ms ease",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  inset: "auto 0 0 0",
                  p: 2,
                  background:
                    "linear-gradient(180deg, rgba(57, 92, 107, 0) 0%, rgba(57, 92, 107, 0.78) 100%)",
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    fontFamily: "var(--font-heading)",
                    fontSize: { xs: "1.05rem", md: "1.25rem" },
                  }}
                >
                  {carouselProjects[currentSlide]?.title}
                </Typography>
              </Box>
            </Box>

            <IconButton
              aria-label="Previous project"
              onClick={() => {
                goToPrevious();
                setIsPaused(true);
              }}
              sx={{
                position: "absolute",
                top: "50%",
                left: 10,
                transform: "translateY(-50%)",
                backgroundColor: "rgba(255, 255, 255, 0.84)",
                color: "var(--text)",
                "&:hover": { backgroundColor: "#fff" },
              }}
            >
              <ChevronLeftRoundedIcon />
            </IconButton>
            <IconButton
              aria-label="Next project"
              onClick={() => {
                goToNext();
                setIsPaused(true);
              }}
              sx={{
                position: "absolute",
                top: "50%",
                right: 10,
                transform: "translateY(-50%)",
                backgroundColor: "rgba(255, 255, 255, 0.84)",
                color: "var(--text)",
                "&:hover": { backgroundColor: "#fff" },
              }}
            >
              <ChevronRightRoundedIcon />
            </IconButton>

            <Stack
              direction="row"
              spacing={1}
              sx={{
                position: "absolute",
                left: "50%",
                bottom: 12,
                transform: "translateX(-50%)",
                px: 1.2,
                py: 0.8,
                borderRadius: "999px",
                backgroundColor: "rgba(255, 255, 255, 0.72)",
              }}
            >
              {carouselProjects.map((project, index) => (
                <Box
                  key={project.id}
                  component="button"
                  type="button"
                  aria-label={`Show ${project.title}`}
                  onClick={() => {
                    goToSlide(index);
                    setIsPaused(true);
                  }}
                  sx={{
                    width: 9,
                    height: 9,
                    borderRadius: "999px",
                    border: "none",
                    p: 0,
                    cursor: "pointer",
                    backgroundColor:
                      index === currentSlide ? "var(--accent)" : "rgba(78, 122, 142, 0.35)",
                    transition: "transform 180ms ease, background-color 180ms ease",
                    transform: index === currentSlide ? "scale(1.1)" : "scale(1)",
                  }}
                />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box className="fade-up stagger-1">
        <Typography className="eyebrow">Capabilities</Typography>
        <Stack direction="row" flexWrap="wrap" gap={1.2} sx={{ mt: 2 }}>
          {capabilities.map((item) => (
            <Chip
              key={item}
              label={item}
              sx={{
                borderRadius: "999px",
                backgroundColor: "var(--surface)",
                border: "1px solid var(--line)",
                color: "var(--text)",
                fontSize: "0.86rem",
                px: 0.3,
              }}
            />
          ))}
        </Stack>
      </Box>

      <Box className="fade-up stagger-2">
        <Typography className="eyebrow">Selected Work</Typography>
        <Typography className="section-title">Case studies in design computation</Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 2,
          }}
        >
          {featuredProjects.map((project) => (
            <Box
              key={project.id}
              component={Link}
              to={`/project/${project.id}`}
              sx={{
                p: 2,
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--line)",
                backgroundColor: "var(--surface)",
                transition: "transform 220ms ease, border-color 220ms ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  borderColor: "var(--accent-soft)",
                },
                "&:focus-visible": {
                  outline: "2px solid var(--accent)",
                  outlineOffset: "3px",
                },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.35rem",
                  color: "var(--text)",
                  mb: 1,
                }}
              >
                {project.title}
              </Typography>
              <Typography sx={{ color: "var(--text-muted)", fontSize: "0.95rem", mb: 2 }}>
                {project.description?.[0] || "Computational design case study."}
              </Typography>
              <Typography sx={{ color: "var(--accent)", fontSize: "0.82rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Explore project
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
