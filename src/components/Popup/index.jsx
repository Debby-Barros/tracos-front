
/* Pop up para excluir*/

import { useState } from 'react'
import Modal from './modal'
import { PopUp2 } from './index1'
import { Button, Container, Text } from './styles'

export function PopUp() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <Container>
        <Button onClick={() => setOpenModal(true)}>excluir</Button>
      </Container>
      <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
        <Text>Você deseja excluir esse card?</Text>
        <PopUp2 />
      </Modal>
    </>
  )
}
