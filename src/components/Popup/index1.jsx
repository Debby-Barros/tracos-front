
/* Pop up para informar o motivo da exclusão*/

import { useState } from 'react'
import Modal from './modal'
import { Text } from './styles'

export function PopUp2() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <div>
        <button onClick={() => setOpenModal(true)}>sim</button>
      </div>
      <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
        <Text>Por que deseja excluir esse card?</Text>
        <button onClick={() => setOpenModal(true)}>doei/troquei</button>
      </Modal>
    </>
  )
}