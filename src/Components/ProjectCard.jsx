import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { defaultFont } from "../assets/defaults";

export default function ProjectCard({ project }) {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(`/project/${project.id}`)}
      sx={{
        cursor: "pointer",
        width: 290, // fixed width
        height: 290, // fixed height
        display: "flex",
        flexDirection: "column",
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
    >
      <CardMedia
        component="img"
        image={project.cover}
        sx={{
          height: 200, // fixed image height
          objectFit: "cover", // prevents stretching
        }}
      />

      <CardContent
        sx={{
          flexGrow: 1,
          overflow: "hidden",
        }}
      >
        <Typography
          variant="h6"
          noWrap
          fontFamily={defaultFont}
          color={"white"}
        >
          {project.title}
        </Typography>
      </CardContent>
    </Card>
  );
}
