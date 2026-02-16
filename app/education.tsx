export default function Education() {
  return (
    <div className="card bg-base-100 image-full shadow-sm">
      <figure className="justify-end">
        <img src="/unipi-ds.jpeg" />
      </figure>
      <div className="card-body">
        <h2 className="card-title uppercase font-semibold">Education</h2>
        <div>
          <div className="text-base uppercase font-bold opacity-100">
            University of Piraeus, Department of Digital Systems
          </div>
          <div className="text-xs uppercase font-semibold opacity-80 float-right">
            BACHELOR 2014 - 2019
          </div>
          <br />
          <div className="text-sm uppercase font-bold opacity-100">
            PARALLEL EXECUTION OF REVERSE TOP-K QUERIES IN MAIN MEMORY
          </div>
          <b>Thesis:</b> PDF Conducted original research on optimizing reverse
          top-k queries through parallel processing in main memory, de- signing
          a parallel processing framework and programmable API to advance query
          efficiency in distributed systems, demonstrating scalable performance
          gains over single-threaded approaches.
        </div>
      </div>
    </div>
  );
}
