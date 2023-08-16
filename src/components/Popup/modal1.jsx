import React from 'react'
import {FecharPopup, ButtonPopup1} from './styles'

const BACKGROUND_STYLE = {
  position: 'fixed',
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
  backgroundColor: 'rgb(0,0,0, 0.7)',
  zIndex: '1000'
}

const MODAL_STYLE = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  padding: '120px',
  backgroundColor: '#fff',
  borderRadius: '10px',
  color: 'black'
}

export default function Modal1({ isOpen, setModalOpen, children }) {
  if (isOpen) {
    return (
      <div style={BACKGROUND_STYLE}>
        <div style={MODAL_STYLE}>
          <FecharPopup style={{ cursor: 'pointer'}} onClick={setModalOpen}>
            x
          </FecharPopup>
          <div>{children}</div>

          <ButtonPopup1 onClick={setModalOpen}>cancelar</ButtonPopup1>
        </div>
      </div>
    )
  }

  return null
}