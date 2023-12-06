import { useState } from 'react'
import { Button } from 'react-bootstrap'
import Settings from './Settings'
import Archive from './Archive'

export default function Header() {
  const [settingsShow, setSettingsShow] = useState(false)
  const [archiveShow, setArchiveShow] = useState(false)

  const handleShowSettings = () => setSettingsShow(true)
  const handleShowArchive = () => setArchiveShow(true)

  const handleCloseSettings = () => setSettingsShow(false)
  const handleCloseArchive = () => setArchiveShow(false)

  return (
    <>
      <header className="container-fluid py-3 px-3 d-flex justify-content-between align-items-center border-bottom">
        <Button variant="none" className="p-0" onClick={handleShowArchive}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              d="M2.8 2.06A1.75 1.75 0 0 1 4.41 1h7.18c.7 0 1.333.417 1.61 1.06l2.74 6.395c.04.093.06.194.06.295v4.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25v-4.5c0-.101.02-.202.06-.295Zm1.61.44a.25.25 0 0 0-.23.152L1.887 8H4.75a.75.75 0 0 1 .6.3L6.625 10h2.75l1.275-1.7a.75.75 0 0 1 .6-.3h2.863L11.82 2.652a.25.25 0 0 0-.23-.152Zm10.09 7h-2.875l-1.275 1.7a.75.75 0 0 1-.6.3h-3.5a.75.75 0 0 1-.6-.3L4.375 9.5H1.5v3.75c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Z"
            />
          </svg>
        </Button>
        <h1 className="h1 fw-bold m-0">Newsbox</h1>
        <Button variant="none" className="p-0" onClick={handleShowSettings}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 15 15"
          >
            <g
              fill="none"
              fillRule="evenodd"
              stroke="currentColor"
              strokeLinecap="square"
              strokeLinejoin="round"
              clipRule="evenodd"
            >
              <path d="m5.944.5l-.086.437l-.329 1.598a5.52 5.52 0 0 0-1.434.823L2.487 2.82l-.432-.133l-.224.385L.724 4.923L.5 5.31l.328.287l1.244 1.058c-.045.277-.103.55-.103.841c0 .291.058.565.103.842L.828 9.395L.5 9.682l.224.386l1.107 1.85l.224.387l.432-.135l1.608-.537c.431.338.908.622 1.434.823l.329 1.598l.086.437h3.111l.087-.437l.328-1.598a5.524 5.524 0 0 0 1.434-.823l1.608.537l.432.135l.225-.386l1.106-1.851l.225-.386l-.329-.287l-1.244-1.058c.046-.277.103-.55.103-.842c0-.29-.057-.564-.103-.841l1.244-1.058l.329-.287l-.225-.386l-1.106-1.85l-.225-.386l-.432.134l-1.608.537a5.52 5.52 0 0 0-1.434-.823L9.142.937L9.055.5H5.944Z" />
              <path d="M9.5 7.495a2 2 0 0 1-4 0a2 2 0 0 1 4 0Z" />
            </g>
          </svg>
        </Button>
      </header>
      <Settings
        settingsShow={settingsShow}
        handleClose={handleCloseSettings}
      ></Settings>
      <Archive
        archiveShow={archiveShow}
        handleClose={handleCloseArchive}
      ></Archive>
    </>
  )
}
