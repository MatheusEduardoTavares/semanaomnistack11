import React, { useState, useEffect } from 'react'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import './styles.css'
import logoImg from '../../assets/logo.svg'

import { Link, useHistory } from 'react-router-dom'

import api from '../../services/api'

interface IncidentsProps {
    id: number;
    title: string;
    description: string;
    value: number;
}


export default function Profile() {
    const history = useHistory()

    const [incidents, setIncidents] = useState([])

    const ongId = localStorage.getItem('ongId')
    const ongName = localStorage.getItem('ongName')

    function handleLogout(){
        localStorage.clear()
    
        history.push('/')
    }

    async function handleDeleteIncident(id: number){
        try{
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId
                }
            })

            setIncidents(incidents.filter((incident: IncidentsProps) => incident.id !== id))
        }
        catch (err){
            alert('Não foi possível excluir o caso!')
        }
    }

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId
            }
        })
        .then(response => {
            setIncidents(response.data)
        })

    }, [ongId])

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the Hero" />
                <span>Bem vinda, {ongName}</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
            
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#e02041" />
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                {incidents.map((incident: IncidentsProps) => (
                    <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{incident.description}</p>

                        <strong>VALOR:</strong>
                        <p>{incident.value.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</p>

                        <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}