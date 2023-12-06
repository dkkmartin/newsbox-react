export default function Settings() {
  return (
    <div
      className="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div className="offcanvas-header border-bottom">
        <h5 className="offcanvas-title" id="offcanvasRightLabel">
          Settings
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body py-5 bg-body-secondary d-flex flex-column align-items-center justify-content-between">
        <div className="d-flex flex-column align-items-center">
          <h1 className="h1 fs-1 fw-bold text-primary">Manage</h1>
          <p className="sub-title fs-5">Categories</p>
        </div>
        <div className="settings__container container-fluid bg-body border rounded-4 p-0">
          <div className="container-fluid border-bottom py-3">
            <div className="form-check form-switch form-check-reverse d-flex justify-content-between align-items-center">
              <label
                className="fs-5 form-check-label text-uppercase card-title"
                for="flexSwitchCheckDefaultPopular"
              >
                Most popular
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefaultPopular"
              />
            </div>
          </div>
          <div className="container-fluid border-bottom py-3">
            <div className="form-check form-switch form-check-reverse d-flex justify-content-between align-items-center">
              <label
                className="fs-5 form-check-label text-uppercase card-title"
                for="flexSwitchCheckDefaultEuropa"
              >
                europa
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefaultEuropa"
              />
            </div>
          </div>
          <div className="container-fluid border-bottom py-3">
            <div className="form-check form-switch form-check-reverse d-flex justify-content-between align-items-center">
              <label
                className="fs-5 form-check-label text-uppercase card-title"
                for="flexSwitchCheckDefaultHealth"
              >
                health
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefaultHealth"
              />
            </div>
          </div>
          <div className="container-fluid border-bottom py-3">
            <div className="form-check form-switch form-check-reverse d-flex justify-content-between align-items-center">
              <label
                className="fs-5 form-check-label text-uppercase card-title"
                for="flexSwitchCheckDefaultSport"
              >
                sport
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefaultSport"
              />
            </div>
          </div>
          <div className="container-fluid border-bottom py-3">
            <div className="form-check form-switch form-check-reverse d-flex justify-content-between align-items-center">
              <label
                className="fs-5 form-check-label text-uppercase card-title"
                for="flexSwitchCheckDefaultBusiness"
              >
                business
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefaultBusiness"
              />
            </div>
          </div>
          <div className="container-fluid py-3">
            <div className="form-check form-switch form-check-reverse d-flex justify-content-between align-items-center">
              <label
                className="fs-5 form-check-label text-uppercase card-title"
                for="flexSwitchCheckDefaultTravel"
              >
                travel
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefaultTravel"
              />
            </div>
          </div>
        </div>
        <button
          id="toggleDarkModeButton"
          className="btn text-uppercase fw-light border border-secondary border-opacity-25 rounded-pill py-2 px-2"
        >
          toggle dark mode
        </button>
      </div>
    </div>
  )
}
