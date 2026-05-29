import Bairru1 from "../assets/images/VerticalAnalysis/Bairru1.png";
import BAIRRU2 from "../assets/images/VerticalAnalysis/BAIRRU2.png";
import BAIRRU3 from "../assets/images/VerticalAnalysis/BAIRRU3.png";
import BAIRRU4 from "../assets/images/VerticalAnalysis/BAIRRU4.png";
import BAIRRU5 from "../assets/images/VerticalAnalysis/BAIRRU5.png";
import UrbanTools1 from "../assets/images/UrbanTools/UrbanTools1.png";
import UrbanTools2 from "../assets/images/UrbanTools/UrbanTools2.png";
import UrbiaVerticalCover from "../assets/images/VerticalPlugin/UrbiaVerticalCover.png";
import verticalPlugin_img1 from "../assets/images/VerticalPlugin/verticalPlugin_img1.png";
import DefaultTower from "../assets/images/VerticalPlugin/DefaultTower.png";
import StepedTower from "../assets/images/VerticalPlugin/StepedTower.png";
//import Relatório_URBIA_SITU from "../assets/images/PluginUrbia/Relatório_URBIA_SITU.jpg";
import EVU_DEFAULT from "../assets/images/PluginUrbia/EVU_DEFAULT.png";
import EVU_TOPO from "../assets/images/PluginUrbia/EVU_TOPO.png";
import EVU_HEAT from "../assets/images/PluginUrbia/EVU_HEAT.png";
import EVU_AREAS from "../assets/images/PluginUrbia/EVU_AREAS.png";
import EVU_FASES from "../assets/images/PluginUrbia/EVU_FASES.png";
import evuCanvas from "../assets/images/PluginUrbia/evuCanvas.png";

export const projects = [
  {
    /*------------- ALGORITMO URBIA ------------- */
    id: "urban-plugin",
    title: "Urban Design Plugin",
    cover: EVU_DEFAULT,
    context:
      "Creating feasibility studies takes a significant amount of time, and teams often need to complete the entire study before understanding what should be changed, leading to extensive rework.",
    challenge: [
      "How can feasibility studies be automated while allowing real-time visualization of metrics and reducing rework? ",
      "Teams were spending too much time rebuilding similar block and parcel operations for each new scenario, which reduced iteration speed and introduced inconsistency.",
    ],
    approach: [
      "My team developed a Grasshopper plugin that automates drawing processes and generates real-time metrics for users. ",
      "We also created a custom menu inside Rhino so users unfamiliar with Grasshopper could easily use the solution, trigger commands, and visualize metrics. ",
      "The plugin exports reports containing all the necessary information for feasibility analysis. ",
    ],
    myContribution: [
      "Developed the geometric operation components for the Grasshopper plugin.",
      "Conducted usability tests with urban designers.",
      "Integrated the plugin licensing system.",
      "Contributed to the menu design, focusing on functionality and UI adjustments.",
      "Contributed to the WebSocket communication between the menu and the plugin.",
    ],
    description: [
      "Development of a Grasshopper plugin focused on automating repetitive urban design operations and enabling faster scenario generation.",
      "The workflow transformed manual block setup, parceling, and geometric adjustments into reusable components, improving consistency across studies.",
    ],
    outcomes: [
      "Using the plugin, feasibility studies were completed significantly faster, and the generated data improved decision-making for clients and investors.",
    ],
    role: "Computational Designer & Plugin Developer",
    focus:
      "Grasshopper/C# Component Architecture For Reusable Urban Design Automation",
    tools: ["Rhino", "Grasshopper", "C#", "JavaScript"],
    videos: ["https://player.vimeo.com/video/1171308997"],
    images: [EVU_DEFAULT, EVU_TOPO, EVU_HEAT, EVU_AREAS, EVU_FASES, evuCanvas],
    tags: ["Grasshopper", "C#", "Urban Design"],
  },
  {
    /*------------- BAIRRU------------- */
    id: "site-analysis",
    title: "Site Volumetric Analysis",
    cover: Bairru1,
    context:
      "A computational workflow created to evaluate multiple neighborhood development scenarios in real time under zoning constraints.",
    challenge:
      "An urban development company requested a solution to quickly compare building typologies and land-use strategies for early-stage design decisions.",
    approach: [
      "We delivered an online solution where users could upload a DXF file containing urban blocks.",
      "Within the platform, users could edit parcels, configure parameters for each lot, compare building typologies, and generate multiple scenarios based on those configurations.",
      "The platform also generated project-wide metrics, allowing users to understand how each parcel influenced the overall development.",
    ],
    myContribution: [
      "Backend and geometry processing contributions.",
      "Developed a Grasshopper script for generating building typologies.",
      "Created an online Rhino instance and expanded RhinoCommon web functionalities to replicate the behavior of the original Grasshopper script.",
      "Developed DXF file import and export functionality.",
    ],
    description: [
      "For this project, the client needed a way to rapidly evaluate multiple development scenarios for a planned neighborhood. I developed a computational workflow that enables real-time testing of building typologies and land-use strategies across the masterplan.",
      "The process began with a Grasshopper prototype designed to translate local zoning regulations into parametric rules. Based on these constraints, the system automatically generated building massing and calculated key development metrics such as floor area, density, and land-use efficiency. Because the model was fully parametric, modifications to an individual plot immediately updated the volumetric outcomes and quantitative indicators across the entire masterplan.",
      "Once the parameters and rules were validated with the client, the logic was implemented into a user-oriented digital tool. Through a simple interface, the client can upload a DXF file, modify block subdivisions, and instantly visualize how these changes affect building massing, density, and site performance.",
      "This workflow allows planners and developers to explore a wide range of urban configurations while maintaining compliance with zoning regulations, significantly accelerating the early design and decision-making process.",
    ],
    outcomes: [
      "Metrics consolidated and validated by the client with positive feedback.",
      "Great time reduction in early-stage scenario testing, with an estimated 50% decrease in time spent on massing and zoning compliance checks.",
    ],
    role: "Computational Designer & Urban Analysis Developer",
    focus:
      "Zoning-Driven Parametric Massing, Density Metrics, And Scenario Comparison",
    tools: ["Rhino", "Grasshopper", "RhinoCommon", "JavaScript"],
    videos: ["https://player.vimeo.com/video/1171373744"],
    images: [Bairru1, BAIRRU2, BAIRRU3, BAIRRU4, BAIRRU5],
    tags: ["JavaScript", "Three.js", "Zoning Analysis"],
  },
  {
    /*------------- Vertical Feasibility Plugin------------- */
    id: "site-analysis-plugin",
    title: "Vertical Feasibility Plugin",
    cover: UrbiaVerticalCover,
    context:
      "A Grasshopper plugin for Rhino 7 focused on early-stage building typology studies.",
    challenge:
      "Create a solution capable of generating optimized building typologies with maximum efficiency and sellable area while considering different legal constraints.",
    approach: [
      "We developed a Grasshopper plugin with dedicated components for settings, parcels, envelopes, and tower generation.",
    ],
    myContribution: [
      "Based on a previous Grasshopper prototype from the Site Volumetric Analysis project, I expanded and reorganized the solution by separating functionalities into custom C# components to improve development workflows and debugging.",
      "Plugin architecture and development.",
      "Created a WebSocket communication system that received data from the Grasshopper script and generated reports.",
      "Converted validated scripts into a distributable Grasshopper plugin for broader adoption.",
    ],
    description: [
      "The plugin currently supports end-to-end vertical study workflows: defining project settings, splitting parcels, generating buildable envelopes from side constraints, and producing tower floor plates with compact analytical outputs that can be viewed in a report outside of Rhino.",
      "The system was designed to be extensible, with escalation mode and advanced validation planned as next milestones.",
    ],
    outcomes: [
      "Completed core components for settings, parcel management, envelope generation, and tower generation",
      "Developed isometric view generation and SVG export workflows",
      "Implemented a local server for report generation and data transfer",
      "Achieved stable tree-based outputs and reproducible geometry behavior across test cases.",
      "Delivered a functional web-based report for viewing metrics and outputs",
      "Established a parity-validation workflow against Site Volumetric Analysis reference scenarios, with ongoing refinements for tower summary edge cases.",
    ],
    role: ".NET Plugin Developer For Computational Urban Design",
    focus:
      "Modular Feasibility Components, Geometry Validation, And Report Integration",
    tools: ["Rhino 7", "Grasshopper", "C#", ".NET", "WebSocket", "JavaScript"],
    videos: ["https://player.vimeo.com/video/1195709408"],
    images: [
      UrbiaVerticalCover,
      verticalPlugin_img1,
      DefaultTower,
      StepedTower,
    ],
    tags: ["Rhino", "Grasshopper", "JavaScript", "Zoning Analysis"],
  },
  {
    /*------------- URBAN TOOLS------------- */
    id: "urban-tools",
    title: "Urban Tools",
    cover: UrbanTools2,
    context:
      "Urban Tools is a web prototype developed for a public innovation program in Lucas do Rio Verde, Brazil, to support early-stage street design decisions.",
    challenge:
      "How can urban street configurations be tested quickly to create safer and more attractive streets while ensuring pedestrian safety?",
    approach: [
      "We created a collaborative online prototype that allowed the city's urban design team to quickly and intuitively test street configurations.",
      "The goal was to provide an accessible solution for non-technical users.",
    ],
    myContribution: [
      "Created a Grasshopper script prototype to test geometric operation logic.",
      "Converted geometric operation logic into web-based functions using React and Three.js.",
      "Developed the interface and menu system so users could edit parameters and manage street design operations such as street creation, editing, and deletion.",
    ],
    description: [
      "Urban Tools is a prototype of an online platform developed for a public innovation program in the city of Lucas do Rio Verde, Brazil. The project consists of a digital streets editor designed to support the municipal urban planning department during early-stage design processes.",
      "The platform provides a simple and intuitive interface that enables users to create and edit street sections while prioritizing pedestrian experience, active mobility, and urban safety. By allowing rapid testing of multiple street configurations, the tool supports data-informed decision-making during urban concept development.",
      "Once a design is finalized, users can export a DXF file directly from the platform, enabling further technical development in professional design software such as AutoCAD or Rhinoceros.",
      "The project originated as a parametric Grasshopper script and was later fully translated into an interactive web application, transforming computational design logic into an accessible tool for non-technical stakeholders.",
    ],
    outcomes: [
      "We delivered a prototype to the municipality of Lucas do Rio Verde, where the team tested and approved the solution.",
      "The project was also presented at a city innovation event, receiving positive feedback and jury approval.",
    ],
    role: "Computational Designer & Web Tool Developer",
    focus:
      "Translating Parametric Street-Design Logic Into An Interactive Web Workflow",
    tools: ["Rhino", "Grasshopper", "React", "Three.js", "JavaScript"],
    videos: ["https://player.vimeo.com/video/1171875839"],
    images: [UrbanTools2, UrbanTools1],
    tags: ["JavaScript", "Three.js", "Urban Planning"],
  },
];
