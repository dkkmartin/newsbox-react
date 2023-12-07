import { Offcanvas, Form } from 'react-bootstrap'
import { loadFromStorage, saveToStorage } from '@/utils/utils'
import { useState } from 'react'

export default function Settings({ settingsShow, handleClose }) {
  let defaultSettings
  if (!loadFromStorage('settings')) {
    defaultSettings = [
      {
        name: 'Popular',
        checked: false,
      },
      {
        name: 'Europa',
        checked: true,
      },
      {
        name: 'Health',
        checked: true,
      },
      {
        name: 'Sport',
        checked: true,
      },
      {
        name: 'Business',
        checked: true,
      },
      {
        name: 'Travel',
        checked: true,
      },
    ]
    saveToStorage('settings', defaultSettings)
  }
  const [settings, setSettings] = useState(
    loadFromStorage('settings') ? loadFromStorage('settings') : defaultSettings,
  )

  function handleClick(index) {
    setSettings((prevSettings) => {
      const updatedSettings = [...prevSettings] // Create a copy of the settings array
      updatedSettings[index] = { ...updatedSettings[index] } // Create a copy of the specific setting object
      updatedSettings[index].checked = !updatedSettings[index].checked // Update the checked property
      saveToStorage('settings', updatedSettings)
      return updatedSettings
    })
  }

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
            {settings.map((setting, index) => (
              <div className="container-fluid border-bottom py-3" key={index}>
                <Form.Check
                  reverse
                  checked={setting.checked}
                  className="fw-bold text-start fs-5"
                  type="switch"
                  id={`custom-switch-${index}`}
                  label={setting.name}
                  onChange={() => handleClick(index)}
                />
              </div>
            ))}
          </Form>

          <button
            id="toggleDarkModeButton"
            className="btn text-uppercase fw-light border border-secondary border-opacity-25 rounded-pill py-2 px-2"
            data-bs-theme-value="dark"
          >
            Toggle Light Mode
          </button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
