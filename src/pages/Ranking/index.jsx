import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Container, GlobalStyle } from './style'
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

export function Ranking() {

    const navigate = useNavigate();
    const [ranking, setRanking] = useState([])

    useEffect(() => {
        const jwt_token = localStorage.getItem('jwt-token');

        const headers = { 'Authorization': `Bearer ${jwt_token}` }

        api.get('/api/v0/users/ranking', { headers }).then((response) => {
            const data = response.data;
            setRanking(data)
            // console.log(data);
        }).catch((error) => {
            if (error.response.status === 401) {
                localStorage.clear();
                navigate('/');
            } else {
                console.log(error);
            }
        })

    }, [navigate])

    return (
        <>
            <Header />

            <Container>
                <GlobalStyle />
                <table style={{ color: "white" }}>
                    <caption>Ranking</caption>
                    <thead>
                        <th scope="col" colSpan="2">Nome</th>
                        <th scope="col">Pontuação</th>
                    </thead>
                    <tbody>
                        {ranking.length !== 0 ? (ranking.map((user) => (
                            <tr>
                                <td colSpan="2">{user.name}</td>
                                <td>{user.score}</td>
                            </tr>
                        ))) : (false)}
                    </tbody>
                </table>
            </Container>
        </>
    )
}
