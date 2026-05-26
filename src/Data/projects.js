import Bairru1 from "../assets/images/Bairru1.png";
import UrbanTools1 from "../assets/images/UrbanTools/UrbanTools1.png";
import UrbanTools2 from "../assets/images/UrbanTools/UrbanTools2.png";
import CinemaBurningManRender_1 from "../assets/images/CinemaBurningMan/CinemaBurningManRender_1.png";
import CinemaBurningManRender_2 from "../assets/images/CinemaBurningMan/CinemaBurningManRender_2.png";
import IsoExpBmCine from "../assets/images/CinemaBurningMan/IsoExpBmCine.jpg";
import IsoBmCine from "../assets/images/CinemaBurningMan/IsoBmCine.jpg";

export const projects = [
  {
    id: "urban-plugin",
    title: "Urban Design Plugin",
    cover: "",
    description: ["Grasshopper plugin for automated urban design."],
    tools: ["Rhino ", "Grasshopper ", "C# ", "Javascript"],
    videos: ["https://player.vimeo.com/video/1171308997"],
    images: [],
    tags: ["Grasshopper", "C#", "Urban Design"],
  },
  {
    id: "urban-tools",
    title: "Urban Tools",
    cover: UrbanTools2,
    description: [
      "Urban Tools is a prototype of an online platform developed for a public innovation program in the city of Lucas do Rio Verde, Brazil. The project consists of a digital streets editor designed to support the municipal urban planning department during early-stage design processes.",
      "The platform provides a simple and intuitive interface that enables users to create and edit street sections while prioritizing pedestrian experience, active mobility, and urban safety. By allowing rapid testing of multiple street configurations, the tool supports data-informed decision-making during urban concept development.",
      "Once a design is finalized, users can export a DXF file directly from the platform, enabling further technical development in professional design software such as AutoCAD or Rhinoceros.",
      "The project originated as a parametric Grasshopper script and was later fully translated into an interactive web application, transforming computational design logic into an accessible tool for non-technical stakeholders.",
    ],
    tools: ["Rhino", "Grasshopper", "Python"],
    videos: ["https://player.vimeo.com/video/1171875839"],
    images: [UrbanTools2, UrbanTools1],
    tags: ["Javascript", "ThreeJS"],
  },
  {
    id: "site-analysis",
    title: "Site Volumetric Analysis ",
    cover: Bairru1,
    description: [
      "For this project, the client needed a way to rapidly evaluate multiple development scenarios for a planned neighborhood. I developed a computational workflow that enables real-time testing of building typologies and land-use strategies across the masterplan.",
      "The process began with a Grasshopper prototype designed to translate local zoning regulations into parametric rules. Based on these constraints, the system automatically generated building massing and calculated key development metrics such as floor area, density, and land-use efficiency. Because the model was fully parametric, modifications to an individual plot immediately updated the volumetric outcomes and quantitative indicators across the entire masterplan.",
      "Once the parameters and rules were validated with the client, the logic was implemented into a user-oriented digital tool. Through a simple interface, the client can upload a DXF file, modify block subdivisions, and instantly visualize how these changes affect building massing, density, and site performance.",
      "This workflow allows planners and developers to explore a wide range of urban configurations while maintaining compliance with zoning regulations, significantly accelerating the early design and decision-making process.",
    ],
    tools: ["Rhino ", "Grasshopper ", "C# ", "Javascript "],
    videos: ["https://player.vimeo.com/video/1171373744"],
    images: [Bairru1],
    tags: ["Javascript", "ThreeJS"],
  },
  {
    id: "bmf-cinema",
    title: "Burning Man Cinema",
    cover: CinemaBurningManRender_1,
    description: [
      "For this project, the client needed a way to rapidly evaluate multiple development scenarios for a planned neighborhood. I developed a computational workflow that enables real-time testing of building typologies and land-use strategies across the masterplan.",
      "The process began with a Grasshopper prototype designed to translate local zoning regulations into parametric rules. Based on these constraints, the system automatically generated building massing and calculated key development metrics such as floor area, density, and land-use efficiency. Because the model was fully parametric, modifications to an individual plot immediately updated the volumetric outcomes and quantitative indicators across the entire masterplan.",
      "Once the parameters and rules were validated with the client, the logic was implemented into a user-oriented digital tool. Through a simple interface, the client can upload a DXF file, modify block subdivisions, and instantly visualize how these changes affect building massing, density, and site performance.",
      "This workflow allows planners and developers to explore a wide range of urban configurations while maintaining compliance with zoning regulations, significantly accelerating the early design and decision-making process.",
    ],
    tools: ["Rhino ", "Grasshopper "],
    videos: [],
    images: [
      CinemaBurningManRender_1,
      CinemaBurningManRender_2,
      IsoExpBmCine,
      IsoBmCine,
    ],
    tags: ["Rhino", "Grasshopper"],
  },
];
