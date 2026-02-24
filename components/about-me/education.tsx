export default function Education() {
  return (
    <div className="card bg-base-100 shadow-sm md:w-90 md:h-fit mt-5 md:mt-0 md:m-2 glass">
      <figure>
        <img
          src="images/unipi-ds.jpeg"
          className="max-w-sm rounded-lg mt-5 shadow-2xl"
        />
      </figure>
      <div className="card-body">
        <div className="pl-5 pr-5">
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
          <div>
            Conducted original research on optimizing reverse top-k queries
            through parallel processing in main memory, designing a parallel
            processing framework and programmable API to advance query
            efficiency in distributed systems, demonstrating scalable
            performance gains over single-threaded approaches.
          </div>
        </div>
      </div>
    </div>
  );
}
