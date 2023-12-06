import { Offcanvas } from 'react-bootstrap'

export default function Archive({ archiveShow, handleClose }) {
  return (
    <>
      <Offcanvas show={archiveShow} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Archive</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>Test</Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
