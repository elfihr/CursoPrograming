import React from 'react'
import '../styles/Price.css'
import { features, pricingOptions } from '../helper/helper'
import check from '../assets/check.png'

function Price() {
    return (
        <div id='preco' className='price'>
            <span>PREÇO</span>
            <p>dos Pacotes</p>
            <div className='priceContainer'>
                {pricingOptions.map((price, index) => {
                    return (
                        <div key={index}>
                            <div className='packs'>
                                <p className='packs-title'>{price.title}</p>
                                <p className='packs-parcel'>{price.parcel}</p>
                                <p className='packs-price'>ou a vista {price.price}</p>

                                <ul>{price.features.map((features, index) => {
                                    return (
                                        <li className='packs-advantages'>
                                            <img className='check' src={check} />
                                            <span>{features}</span>                                         
                                        </li>
                                    )
                                })}</ul>
                                <button className='btn'>Matricule-se</button>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Price