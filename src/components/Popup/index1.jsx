
/* Pop up para informar o motivo da exclusão*/

import { useState } from 'react'
import Modal from './modal'
import { Text } from './styles'
import api from '../../services/api'
import { useNavigate } from 'react-router-dom'

export function PopUp2({ productId }) {
  const [openModal, setOpenModal] = useState(false)
  const navigate = useNavigate();

  const handleDeletion = (traded) => {

    const jwt_token = localStorage.getItem('jwt-token');
    const headers = { 'Authorization': `Bearer ${jwt_token}` }

    const route = `/api/v0/products${traded ? '/traded' : ''}/${productId}`;

    api.delete(route, { headers }).then((response) => {
      navigate('/home');
    }).catch((error) => {
      if (error.response.status === 401) {
        localStorage.clear();
        navigate('/');
      } else {
        console.log(error);
      }
    })
  }

  return (
    <>
      <div>
        <button onClick={() => setOpenModal(true)}>sim</button>
      </div>
      <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
        <Text>Por que deseja excluir esse card?</Text>
        <button onClick={() => handleDeletion(false)}>desisti do anuncio</button>
        <button onClick={() => handleDeletion(true)}>doei/troquei</button>
      </Modal>
    </>
  )
}