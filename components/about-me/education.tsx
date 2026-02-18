export default function Education() {
  return (
      <div className="card bg-base-100 shadow-sm md:w-90 md:h-fit mt-5 md:mt-0 md:m-2">
      <figure className="">
        <img src="images/unipi-ds.jpeg" />
      </figure>
      <div className="card-body bg-base-200">
        <div className="p-5">
          <div className="text-base uppercase font-bold opacity-100">
            BACHELOR: University of Piraeus, Department of Digital Systems
          </div>
          <div className="text-sm uppercase font-semibold opacity-80 justify-end">
            2014-2019
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
            processing framework and programmable API to advance query
            efficiency in distributed systems, demonstrating scalable
            performance gains over single-threaded approaches.
          </div>
        </div>
      </div>
    </div>
  );
}
