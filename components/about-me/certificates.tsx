import { certificates } from "@/data/certificates";

export default function CertificatesList() {
  return (
    <div className="card bg-base-100 shadow-sm md:w-100">
      <div className="card-body">
        <h2 className="card-title uppercase font-semibold">Certificates</h2>
        <ul className="list bg-base-200">
          {certificates.map((certificate) => {
            return (
              <li className="list-row" key={certificate.title}>
                <a href={certificate.link}>
                  <div className="font-thin opacity-30 tabular-nums w-24">
                    {certificate.date}
                  </div>
                  <div className="">
                    <div className="link link-secondary">
                      {certificate.skill}
                    </div>
                    <div className="text-xs font-semibold opacity-60">
                      {certificate.title}
                    </div>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
