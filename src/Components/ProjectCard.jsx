import { Card, CardMedia, CardContent, Typography, Box, Stack, Chip } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ProjectCard({ project }) {
  const navigate = useNavigate();
  const teaser = project.description?.[0] || "Computational design case study.";
  const tags = project.tags?.slice(0, 2) || [];
  const hasCover = Boolean(project.cover);

  return (
    <Card
      onClick={() => navigate(`/project/${project.id}`)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          navigate(`/project/${project.id}`);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`Open project ${project.title}`}
      sx={{
        cursor: "pointer",
        width: "100%",
        minHeight: 340,
        display: "flex",
        flexDirection: "column",
        borderRadius: "var(--radius-md)",
        border: "1px solid var(--line)",
        backgroundColor: "var(--surface)",
        boxShadow: "var(--shadow-soft)",
        overflow: "hidden",
        transition: "transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease",
        "&:hover": {
          transform: "translateY(-6px)",
          borderColor: "var(--accent-soft)",
          boxShadow: "0 16px 34px rgba(57, 92, 107, 0.2)",
        },
        "&:focus-visible": {
          outline: "2px solid var(--accent)",
          outlineOffset: "3px",
        },
      }}
    >
      {hasCover ? (
        <CardMedia
          component="img"
          image={project.cover}
          alt={project.title}
          sx={{
            height: 210,
            objectFit: "cover",
          }}
        />
      ) : (
        <Box
          sx={{
            height: 210,
            p: 2.25,
            display: "flex",
            alignItems: "flex-end",
            background:
              "linear-gradient(145deg, rgba(78, 122, 142, 0.16) 0%, rgba(57, 92, 107, 0.08) 100%)",
          }}
        >
          <Typography
            sx={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.1rem",
              color: "var(--text)",
            }}
          >
            {project.title}
          </Typography>
        </Box>
      )}

      <CardContent
        sx={{
          flexGrow: 1,
          p: 2.25,
          display: "flex",
          flexDirection: "column",
          gap: 1.25,
        }}
      >
        <Typography
          sx={{
            fontFamily: "var(--font-heading)",
            fontSize: "1.35rem",
            lineHeight: 1.2,
            color: "var(--text)",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            overflow: "hidden",
            minHeight: "3.2rem",
          }}
        >
          {project.title}
        </Typography>

        <Typography
          sx={{
            color: "var(--text-muted)",
            fontSize: "0.94rem",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
            overflow: "hidden",
            minHeight: "4.35rem",
          }}
        >
          {teaser}
        </Typography>

        <Stack direction="row" flexWrap="wrap" gap={1} sx={{ minHeight: "2.1rem", mt: "auto" }}>
          {tags.map((tag) => (
            <Chip
              key={`${project.id}-${tag}`}
              label={tag}
              size="small"
              sx={{
                borderRadius: "999px",
                border: "1px solid var(--line)",
                backgroundColor: "transparent",
                color: "var(--text-muted)",
                fontSize: "0.74rem",
              }}
            />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}
