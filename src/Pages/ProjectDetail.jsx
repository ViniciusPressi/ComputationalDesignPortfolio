import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../Data/projects";
import { Typography, Box, Chip, Stack, Dialog, IconButton } from "@mui/material";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

export default function ProjectDetail() {
  const { id } = useParams();

  const project = projects.find((p) => p.id === id);
  const currentIndex = projects.findIndex((p) => p.id === id);
  const previousProject =
    currentIndex >= 0 ? projects[(currentIndex - 1 + projects.length) % projects.length] : null;
  const nextProject = currentIndex >= 0 ? projects[(currentIndex + 1) % projects.length] : null;
  const mediaItems = useMemo(
    () => [
      ...(project?.videos?.map((src) => ({ type: "video", src })) || []),
      ...(project?.images?.map((src) => ({ type: "image", src })) || []),
    ],
    [project]
  );
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const columnEyebrowSx = { mb: 2, mt: 0 };
  const bodyTextSx = {
    color: "var(--text-muted)",
    lineHeight: 1.9,
    fontSize: "1rem",
    maxWidth: "68ch",
  };
  const imageFrameSx = {
    width: "100%",
    height: "auto",
    display: "block",
    borderRadius: "var(--radius-md)",
    border: "1px solid var(--line)",
    boxShadow: "var(--shadow-soft)",
  };

  if (!project) {
    return (
      <Box sx={{ py: 8 }}>
        <Typography className="eyebrow">Project</Typography>
        <Typography className="section-title">Project not found</Typography>
      </Box>
    );
  }

  const openMediaAt = (index) => {
    setActiveMediaIndex(index);
    setLightboxOpen(true);
  };

  const goToPreviousMedia = () => {
    setActiveMediaIndex((current) => (current - 1 + mediaItems.length) % mediaItems.length);
  };

  const goToNextMedia = () => {
    setActiveMediaIndex((current) => (current + 1) % mediaItems.length);
  };

  const activeMedia = mediaItems[activeMediaIndex];
  const contributionItems = Array.isArray(project.myContribution)
    ? project.myContribution
    : [project.myContribution || "will be added"];
  const contextItems = Array.isArray(project.context)
    ? project.context
    : [project.context || project.description?.[0] || "Context details coming soon."];
  const challengeItems = Array.isArray(project.challenge)
    ? project.challenge
    : [project.challenge || project.description?.[1] || "Challenge details coming soon."];
  const approachItems = Array.isArray(project.approach)
    ? project.approach
    : [project.approach || project.description?.[2] || "Approach details coming soon."];
  const outcomeItems = project.outcomes?.length
    ? project.outcomes
    : [
        "Measurable outcomes coming soon. This case study currently highlights methodology, technical scope, and workflow impact.",
      ];

  return (
    <Box sx={{ py: { xs: 3, md: 5 } }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "minmax(0, 1.05fr) minmax(0, 1.2fr)",
          },
          gap: { xs: 4, md: 5 },
          alignItems: "start",
        }}
      >
        <Stack spacing={{ xs: 4, md: 5 }} className="fade-up stagger-1">
          <Box className="fade-up">
            <Typography
              className="section-title"
              sx={{
                maxWidth: "20ch",
                mb: 2,
                fontSize: { xs: "2.15rem", md: "3.2rem" },
                lineHeight: { xs: 1.08, md: 1.02 },
                letterSpacing: "-0.03em",
              }}
            >
              {project.title}
            </Typography>
          </Box>

          <Box>
            <Typography className="eyebrow" sx={columnEyebrowSx}>
              Context
            </Typography>
            <Stack spacing={0.8} sx={{ maxWidth: "68ch" }}>
              {contextItems.map((item, index) => (
                <Typography key={`context-${index}`} sx={bodyTextSx}>
                  {item}
                </Typography>
              ))}
            </Stack>

            <Typography className="eyebrow" sx={{ mb: 2, mt: 5 }}>
              Challenge
            </Typography>
            <Stack spacing={0.8} sx={{ maxWidth: "68ch" }}>
              {challengeItems.map((item, index) => (
                <Typography key={`challenge-${index}`} sx={bodyTextSx}>
                  {item}
                </Typography>
              ))}
            </Stack>

            <Typography className="eyebrow" sx={{ mb: 2, mt: 5 }}>
              Approach
            </Typography>
            <Stack spacing={0.8} sx={{ maxWidth: "68ch" }}>
              {approachItems.map((item, index) => (
                <Typography key={`approach-${index}`} sx={bodyTextSx}>
                  {item}
                </Typography>
              ))}
            </Stack>

            <Typography className="eyebrow" sx={{ mb: 2, mt: 5 }}>
              My Contribution
            </Typography>
            <Stack spacing={0.8} sx={{ maxWidth: "68ch" }}>
              {contributionItems.map((item, index) => (
                <Box
                  key={`contribution-${index}`}
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr",
                    alignItems: "start",
                    columnGap: 1,
                  }}
                >
                  <Typography sx={{ color: "var(--text-muted)", lineHeight: 1.9 }}>•</Typography>
                  <Typography sx={bodyTextSx}>{item}</Typography>
                </Box>
              ))}
            </Stack>

            <Typography className="eyebrow" sx={{ mb: 2, mt: 5 }}>
              Outcome
            </Typography>
            <Stack spacing={0.8} sx={{ maxWidth: "68ch" }}>
              {outcomeItems.map((item, index) => (
                <Typography key={`outcome-${index}`} sx={bodyTextSx}>
                  {item}
                </Typography>
              ))}
            </Stack>
          </Box>

          <Box className="fade-up stagger-2" sx={{ mt: { md: 1 } }}>
            <Box
              sx={{
                p: 2.5,
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--line)",
                backgroundColor: "var(--surface)",
                boxShadow: "var(--shadow-soft)",
                display: "grid",
                gap: 2,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.25rem",
                  color: "var(--text)",
                }}
              >
                Technical Stack
              </Typography>

              <Stack direction="row" flexWrap="wrap" gap={1}>
                {project.tools.map((tool) => (
                  <Chip
                    key={`${project.id}-${tool}`}
                    label={tool}
                    size="small"
                    sx={{
                      borderRadius: "999px",
                      border: "1px solid var(--line)",
                      backgroundColor: "transparent",
                      color: "var(--text-muted)",
                    }}
                  />
                ))}
              </Stack>

              <Typography sx={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
                Role: {project.role || "Computational design and development."}
              </Typography>

              <Typography sx={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
                Focus: {project.focus || "Parametric logic, geometric systems, and decision-support workflows."}
              </Typography>
            </Box>
          </Box>

        </Stack>

        {(project.videos?.length > 0 || project.images?.length > 0) && (
          <Box className="fade-up stagger-1" sx={{ width: "100%" }}>
            <Stack spacing={2.5} sx={{ mb: project.images?.length > 0 ? 2.5 : 0 }}>
              {project.videos?.map((video, index) => (
                <Box key={`video-${index}`} sx={{ display: "flex", justifyContent: "center" }}>
                  <Box
                    role="button"
                    tabIndex={0}
                    aria-label={`Open ${project.title} video ${index + 1}`}
                    onClick={() => openMediaAt(index)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        openMediaAt(index);
                      }
                    }}
                    sx={{
                      width: "100%",
                      maxWidth: 1100,
                      aspectRatio: "16 / 9",
                      overflow: "hidden",
                      borderRadius: "var(--radius-md)",
                      border: "1px solid var(--line)",
                      boxShadow: "var(--shadow-soft)",
                      cursor: "zoom-in",
                      transition: "transform 180ms ease, border-color 180ms ease",
                      "&:hover": {
                        transform: "translateY(-2px)",
                        borderColor: "var(--accent-soft)",
                      },
                      "&:focus-visible": {
                        outline: "2px solid var(--text)",
                        outlineOffset: 2,
                      },
                    }}
                  >
                    <iframe
                      src={video}
                      title={`${project.title} video ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        border: "none",
                      }}
                      allow="autoplay; fullscreen"
                      allowFullScreen
                    />
                  </Box>
                </Box>
              ))}
            </Stack>

            {project.images?.length > 0 && (
              <Stack spacing={2} sx={{ width: "100%" }}>
                {project.images.map((img, index) => (
                  <Box
                    key={index}
                    component="img"
                    src={img}
                    alt={`${project.title} image ${index + 1}`}
                    role="button"
                    tabIndex={0}
                    onClick={() => openMediaAt((project.videos?.length || 0) + index)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        openMediaAt((project.videos?.length || 0) + index);
                      }
                    }}
                    sx={{
                      ...imageFrameSx,
                      cursor: "zoom-in",
                      transition: "transform 180ms ease, border-color 180ms ease",
                      "&:hover": {
                        transform: "translateY(-2px)",
                        borderColor: "var(--accent-soft)",
                      },
                      "&:focus-visible": {
                        outline: "2px solid var(--text)",
                        outlineOffset: 2,
                      },
                    }}
                  />
                ))}
              </Stack>
            )}
          </Box>
        )}
      </Box>

      {(previousProject || nextProject) && (
        <Box
          sx={{
            position: "fixed",
            top: "50%",
            left: 0,
            width: "100%",
            transform: "translateY(-50%)",
            display: "flex",
            justifyContent: "space-between",
            px: { xs: 1.25, sm: 2, md: 2.5 },
            pointerEvents: "none",
            zIndex: 20,
          }}
        >
          {previousProject ? (
            <Box
              component={Link}
              to={`/project/${previousProject.id}`}
              aria-label="Previous project"
              sx={{
                width: { xs: 44, md: 48 },
                height: { xs: 44, md: 48 },
                borderRadius: "999px",
                border: "1px solid var(--line)",
                backgroundColor: "var(--surface)",
                color: "var(--text)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "var(--shadow-soft)",
                pointerEvents: "auto",
                transition: "transform 180ms ease, background-color 180ms ease, border-color 180ms ease",
                "&:hover": {
                  backgroundColor: "var(--bg)",
                  transform: "translateY(-1px)",
                },
                "&:focus-visible": {
                  outline: "2px solid var(--text)",
                  outlineOffset: 2,
                },
              }}
            >
              <ChevronLeftRoundedIcon fontSize="medium" />
            </Box>
          ) : (
            <Box sx={{ width: { xs: 44, md: 48 }, height: { xs: 44, md: 48 } }} />
          )}

          {nextProject ? (
            <Box
              component={Link}
              to={`/project/${nextProject.id}`}
              aria-label="Next project"
              sx={{
                width: { xs: 44, md: 48 },
                height: { xs: 44, md: 48 },
                borderRadius: "999px",
                border: "1px solid var(--line)",
                backgroundColor: "var(--surface)",
                color: "var(--text)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "var(--shadow-soft)",
                pointerEvents: "auto",
                transition: "transform 180ms ease, background-color 180ms ease, border-color 180ms ease",
                "&:hover": {
                  backgroundColor: "var(--bg)",
                  transform: "translateY(-1px)",
                },
                "&:focus-visible": {
                  outline: "2px solid var(--text)",
                  outlineOffset: 2,
                },
              }}
            >
              <ChevronRightRoundedIcon fontSize="medium" />
            </Box>
          ) : (
            <Box sx={{ width: { xs: 44, md: 48 }, height: { xs: 44, md: 48 } }} />
          )}
        </Box>
      )}

      <Dialog
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        fullWidth
        maxWidth={false}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            goToPreviousMedia();
          }
          if (event.key === "ArrowRight") {
            event.preventDefault();
            goToNextMedia();
          }
        }}
        PaperProps={{
          sx: {
            m: 0,
            width: "100vw",
            maxWidth: "100vw",
            height: "100vh",
            maxHeight: "100vh",
            borderRadius: 0,
            backgroundColor: "rgba(8, 11, 12, 0.94)",
            overflow: "hidden",
          },
        }}
      >
        {activeMedia && (
          <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
            <IconButton
              onClick={() => setLightboxOpen(false)}
              aria-label="Close media viewer"
              sx={{
                position: "absolute",
                top: 16,
                right: 16,
                border: "1px solid rgba(255, 255, 255, 0.26)",
                backgroundColor: "rgba(12, 16, 18, 0.64)",
                color: "#fff",
                zIndex: 2,
              }}
            >
              <CloseRoundedIcon />
            </IconButton>

            {mediaItems.length > 1 && (
              <>
                <IconButton
                  onClick={goToPreviousMedia}
                  aria-label="Previous media"
                  sx={{
                    position: "absolute",
                    left: { xs: 10, md: 18 },
                    top: "50%",
                    transform: "translateY(-50%)",
                    border: "1px solid rgba(255, 255, 255, 0.26)",
                    backgroundColor: "rgba(12, 16, 18, 0.64)",
                    color: "#fff",
                    zIndex: 2,
                  }}
                >
                  <ChevronLeftRoundedIcon />
                </IconButton>

                <IconButton
                  onClick={goToNextMedia}
                  aria-label="Next media"
                  sx={{
                    position: "absolute",
                    right: { xs: 10, md: 18 },
                    top: "50%",
                    transform: "translateY(-50%)",
                    border: "1px solid rgba(255, 255, 255, 0.26)",
                    backgroundColor: "rgba(12, 16, 18, 0.64)",
                    color: "#fff",
                    zIndex: 2,
                  }}
                >
                  <ChevronRightRoundedIcon />
                </IconButton>
              </>
            )}

            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                px: { xs: 2, md: 8 },
                py: { xs: 7, md: 6 },
              }}
            >
              {activeMedia.type === "image" ? (
                <Box
                  component="img"
                  src={activeMedia.src}
                  alt={`${project.title} media ${activeMediaIndex + 1}`}
                  sx={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                    borderRadius: "var(--radius-md)",
                  }}
                />
              ) : (
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: 1320,
                    aspectRatio: "16 / 9",
                    borderRadius: "var(--radius-md)",
                    overflow: "hidden",
                    border: "1px solid rgba(255, 255, 255, 0.18)",
                  }}
                >
                  <iframe
                    src={activeMedia.src}
                    title={`${project.title} video lightbox ${activeMediaIndex + 1}`}
                    style={{ width: "100%", height: "100%", border: "none" }}
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  />
                </Box>
              )}
            </Box>
          </Box>
        )}
      </Dialog>
    </Box>
  );
}
