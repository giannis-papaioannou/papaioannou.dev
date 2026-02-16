export default function Experience() {
  return (
    <>
      <div className="card bg-base-300 shadow-sm">
        <div className="card-body">
          <h2 className="card-title font-black uppercase opacity-60">
            {" "}
            <figure
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
              }}
            >
              <img
                src="vermantia.jpeg"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </figure>
            Vermantia, Marousi - Athens
          </h2>
          <h2 className="card-title ">Senior Software Engineer</h2>
          <time className="font-mono italic float-right">2018-2026</time>
          <ul className="list">
            <li className="list-row">
              Designed and built Vermantia’s custom digital-signage platform,
              including a Django-based CMS, a Python/FastAPI agent, and a
              packaging pipeline. Integrated low-level OS components and video-stream handling with
              window managers to support scalable, multi-screen content
              distribution.
            </li>
            <li className="list-row">
              Transitioned deployment strategies to Kubernetes, eliminating the
              need for night-time deployments while ensuring reliable, seamless
              releases.
            </li>
            <li className="list-row">
              Designed and delivered end-to-end full-stack systems for OPAP’s
              sports and racing channels, leveraging Django and FastAPI on the
              back end and React on the front end.
            </li>
            <li className="list-row">
              Ensured continuous availability and seamless high-traffic user
              experiences by integrating live streaming and real-time data
              pipelines.
            </li>
            <li className="list-row">
              Transitioned a .NET-based microservice ecosystem that ingested
              data updates and routed them to clients according to contractual
              rules into a Python stack using Django and Celery pipelines.
            </li>
            <li className="list-row">
              Developed and sustained an automated video-stream orchestration
              platform using Django and Celery workers, eliminating the need for
              manual operational intervention.
            </li>
            <li className="list-row">
              Optimized a Scikit-learn-based machine-learning service that links
              sports and racing events to live streams, continuously boosting
              prediction accuracy.
            </li>
            <li className="list-row">
              Designed and rolled out an organization-wide logging platform,
              employing Loki for log aggregation and Grafana for unified visual
              dashboards.
            </li>
            <li className="list-row">
              Provided real-time system-health monitoring across all teams using
              the new logging platform.
            </li>
            <li className="list-row">
              Re-architected legacy microservices into a fault-tolerant
              framework, markedly improving system stability and reliability.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
