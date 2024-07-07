import React from 'react'
import '../styles/Clients.css'
import { clientes } from '../helper/helper'

const Clients = () => {
    return (
        <div id='feedback' className='clients'>
            <span>FEEDBACK</span>
            <h3>Veja a opinião de quem comprou o curso</h3>
            <div className='clients-container'>
                {clientes.map((client, index) => {
                    return (
                        <div className='clients-main' key={index}>
                            <div className='container'>
                                <img src={client.image}/>
                                <h6>{client.user}</h6>
                                
                            </div>
                            <p>{client.text}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Clients