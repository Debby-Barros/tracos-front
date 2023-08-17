/* Pop up para informar o motivo da exclusão*/

import { useState } from 'react'
import Modal1 from './modal1'
import { ButtonPopup, Text1, ButtonPopup1 } from './styles'
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
      <ButtonPopup style={{display: "flex", position: "relative", top: "20px"}} onClick={() => setOpenModal(true)}>sim</ButtonPopup>
 
      <Modal1 isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
        <Text1>Por que deseja excluir esse card?</Text1>
        <ButtonPopup1 onClick={() => handleDeletion(false)}>desisti do anuncio</ButtonPopup1>
        <ButtonPopup1 onClick={() => handleDeletion(true)}>doei / troquei</ButtonPopup1>
      </Modal1>
    </>
  )
}