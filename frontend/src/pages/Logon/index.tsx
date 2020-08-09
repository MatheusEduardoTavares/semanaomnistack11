import React, { useState, FormEvent } from 'react'

import './styles.css'

import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'

import { FiLogIn } from 'react-icons/fi'

import { Link, useHistory } from 'react-router-dom'

import api from '../../services/api'

export default function Logon(){
    const history = useHistory()

    const [id, setId] = useState('')

    async function handleLogin(e: FormEvent){
        e.preventDefault()

        try{
            const response = await api.post('sessions', { id })

            localStorage.setItem('ongId', id)
            localStorage.setItem('ongName', response.data.name)

            history.push('/profile')
        }
        catch (err){
            alert('Não foi possível realizar o login.')
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero" />

                <form onSubmit={handleLogin}>
                    <h1>Faça seu Logon</h1>

                    <input placeholder="Sua ID" 
                    value={id}
                    onChange={e => setId(e.target.value)}
                    />

                    <button className="button">Entrar</button>

                    <Link to="/register">
                        <FiLogIn size={16} color="red" />
                        Não possuo cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="heroes" />
        </div>
    )
}