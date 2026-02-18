import { ExperienceCategory } from "./types";

export const experiences: ExperienceCategory[] = [
  {
    image: "/images/vermantia.jpeg",
    job_title: "Senior Software Engineer",
    work: "Vermantia, Marousi - Athens",
    duration: "2018-2026",
    points: [
      "Designed and built Vermantia’s custom digital-signage platform, including a Django-based CMS, a Python/FastAPI agent, and a packaging pipeline. Integrated low-level OS components and video-stream handling with window managers to support scalable, multi-screen content distribution.",
      "Transitioned deployment strategies to Kubernetes, eliminating the need for night-time deployments while ensuring reliable, seamless releases.",
      "Designed and delivered end-to-end full-stack systems for OPAP’s sports and racing channels, leveraging Django & FastAPI on the back end and React on the front end. Additionally optimized a machine learning service responsible for matching event data with streams.",
      "Transitioned a .NET-based microservice ecosystem that ingested data updates and routed them to clients according to contractual rules into a Python stack using Django and Celery.",
      "Developed and sustained an automated video-stream orchestration platform using Django and Celery workers, eliminating the need for manual operational intervention.",
      "Designed and rolled out an organization-wide logging platform, employing Loki for log aggregation and Grafana for unified visual dashboards.",
    ],
    min_points: 3,
  },
];
