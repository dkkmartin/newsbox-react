export default function Archive() {
  return (
    <div
      className="offcanvas offcanvas-start"
      tabindex="-1"
      id="offcanvasLeft"
      aria-labelledby="offcanvasLeftLabel"
    >
      <div className="offcanvas-header border-bottom">
        <h5 className="offcanvas-title" id="offcanvasLeftLabel">
          Archive
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body bg-body-secondary container-fluid p-0">
        <div data-query="popular" className="accordion accordion-flush">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOneOffcanvas">
              <button
                className="accordion-button collapsed card-title text-uppercase"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOneOffcanvas"
                aria-expanded="true"
                aria-controls="flush-collapseOneOffcanvas"
              >
                Most popular
              </button>
            </h2>
            <div
              id="flush-collapseOneOffcanvas"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOneOffcanvas"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body px-0 py-0"></div>
            </div>
          </div>
        </div>

        <div
          data-query="europe"
          className="accordion accordion-flush border border-start-0 border-end-0"
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwoOffcanvas">
              <button
                className="accordion-button collapsed card-title text-uppercase"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwoOffcanvas"
                aria-expanded="true"
                aria-controls="flush-collapseTwoOffcanvas"
              >
                europe
              </button>
            </h2>
            <div
              id="flush-collapseTwoOffcanvas"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwoOffcanvas"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body px-0 py-0"></div>
            </div>
          </div>
        </div>

        <div
          data-query="health"
          className="accordion accordion-flush border border-top-0 border-start-0 border-end-0"
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThreeOffcanvas">
              <button
                className="accordion-button collapsed card-title text-uppercase"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThreeOffcanvas"
                aria-expanded="true"
                aria-controls="flush-collapseThreeOffcanvas"
              >
                health
              </button>
            </h2>
            <div
              id="flush-collapseThreeOffcanvas"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThreeOffcanvas"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body px-0 py-0"></div>
            </div>
          </div>
        </div>

        <div
          data-query="sport"
          className="accordion accordion-flush border border-top-0 border-start-0 border-end-0"
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingFour">
              <button
                className="accordion-button collapsed card-title text-uppercase"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="true"
                aria-controls="flush-collapseFour"
              >
                sport
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingFour"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body px-0 py-0"></div>
            </div>
          </div>
        </div>

        <div
          data-query="business"
          className="accordion accordion-flush border border-top-0 border-start-0 border-end-0"
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingFive">
              <button
                className="accordion-button collapsed card-title text-uppercase"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFive"
                aria-expanded="true"
                aria-controls="flush-collapseFive"
              >
                business
              </button>
            </h2>
            <div
              id="flush-collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingFive"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body px-0 py-0"></div>
            </div>
          </div>
        </div>

        <div
          data-query="travel"
          className="accordion accordion-flush border border-top-0 border-start-0 border-end-0"
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingSix">
              <button
                className="accordion-button collapsed card-title text-uppercase"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseSix"
                aria-expanded="true"
                aria-controls="flush-collapseSix"
              >
                travel
              </button>
            </h2>
            <div
              id="flush-collapseSix"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingSix"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body px-0 py-0"></div>
            </div>
          </div>
        </div>

        <div
          data-query="search"
          className="accordion accordion-flush border border-top-0 border-start-0 border-end-0"
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingSeven">
              <button
                className="accordion-button collapsed card-title text-uppercase"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseSeven"
                aria-expanded="true"
                aria-controls="flush-collapseSeven"
              >
                search
              </button>
            </h2>
            <div
              id="flush-collapseSeven"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingSeven"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body px-0 py-0"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
