import { Offcanvas, Form } from 'react-bootstrap'
import FormCheckInput from 'react-bootstrap/FormCheckInput'
import { loadFromStorage, saveToStorage } from '@/utils/utils'
import { useEffect } from 'react'

export default function Settings({ settingsShow, handleClose }) {
  useEffect(() => {
    if (!loadFromStorage('settings')) {
      const defaultSettings = [
        {
          name: 'flexSwitchCheckDefaultPopular',
          checked: false,
        },
        {
          name: 'flexSwitchCheckDefaultEuropa',
          checked: true,
        },
        {
          name: 'flexSwitchCheckDefaultHealth',
          checked: true,
        },
        {
          name: 'flexSwitchCheckDefaultSport',
          checked: true,
        },
        {
          name: 'flexSwitchCheckDefaultBusiness',
          checked: true,
        },
        {
          name: 'flexSwitchCheckDefaultTravel',
          checked: true,
        },
      ]
      saveToStorage('settings', defaultSettings)
    }
  })

  return (
    <>
      <Offcanvas show={settingsShow} onHide={handleClose}>
        <Offcanvas.Header className="" closeButton>
          <Offcanvas.Title className="w-full text-center pl-[30px]">
            Settings
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="py-5 bg-body-secondary d-flex flex-column align-items-center justify-content-between">
          <div className="d-flex flex-column align-items-center">
            <h1 className="h1 fs-1 fw-bold text-primary">Manage</h1>
            <p className="sub-title fs-5">Categories</p>
          </div>

          <Form className="container-fluid border rounded-4 p-0 bg-body">
            <div className="container-fluid border-bottom py-3">
              <Form.Check
                reverse
                checked="true"
                className="fw-bold text-start fs-5"
                type="switch"
                id="custom-switch"
                label="MOST POPULAR"
              />
            </div>
            <div className="container-fluid border-bottom py-3">
              <Form.Check
                reverse
                className="fw-bold text-start fs-5"
                type="switch"
                id="custom-switch"
                label="EUROPA"
              />
            </div>
            <div className="container-fluid border-bottom py-3">
              <Form.Check
                reverse
                className="fw-bold text-start fs-5"
                type="switch"
                id="custom-switch"
                label="HEALTH"
              />
            </div>
            <div className="container-fluid border-bottom py-3">
              <Form.Check
                reverse
                className="fw-bold text-start fs-5"
                type="switch"
                id="custom-switch"
                label="SPORT"
              />
            </div>
            <div className="container-fluid border-bottom py-3">
              <Form.Check
                reverse
                className="fw-bold text-start fs-5"
                type="switch"
                id="custom-switch"
                label="BUSINESS"
              />
            </div>
            <div className="container-fluid border-bottom py-3">
              <Form.Check
                reverse
                className="fw-bold text-start fs-5"
                type="switch"
                id="custom-switch"
                label="TRAVEL"
              />
            </div>
          </Form>

          <button
            id="toggleDarkModeButton"
            class="btn text-uppercase fw-light border border-secondary border-opacity-25 rounded-pill py-2 px-2"
            data-bs-theme-value="dark"
          >
            Toggle Light Mode
          </button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
