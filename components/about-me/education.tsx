export default function Education() {
  return (
    <div className="card bg-base-100 image-full shadow-sm mt-3 md:max-w-lg">
      <figure className="hidden md:flex justify-end">
        <img src="images/unipi-ds.jpeg" />
      </figure>
      <div className="card-body">
        <h2 className="card-title uppercase font-semibold">Education</h2>
        <div className="flex justify-between">
          <div className="text-base uppercase font-bold opacity-100">
            BACHELOR: University of Piraeus, Department of Digital Systems
          </div>
          <div className="text-xs uppercase font-semibold opacity-80">
             2019
             2014
          </div>
        </div>
        <div className="divider" />
        <a
          className="link link-secondary text-sm uppercase font-bold opacity-100"
          href="pdf/thesis.pdf"
        >
          PARALLEL EXECUTION OF REVERSE TOP-K QUERIES IN MAIN MEMORY
        </a>
        <br />
        <div className="">
          Conducted original research on optimizing reverse top-k queries
          through parallel processing in main memory, de- signing a parallel
          processing framework and programmable API to advance query efficiency
          in distributed systems, demonstrating scalable performance gains over
          single-threaded approaches.
        </div>
      </div>
    </div>
  );
}
