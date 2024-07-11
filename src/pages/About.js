import React from 'react'
import '../styles/About.css'
import code from '../assets/code.jpg'
import { checklistItems } from '../helper/helper'

import check from '../assets/check.png'

const About = () => {
    return (
        <div id='sobre' className='about'>
            <span>SOBRE</span>
            <h3>O que voce irá Aprender</h3>
            <div className='aboutContainer'>
                <img className='image' src={code} alt='img de aprender'/>
                <div className='ContainerExplain'>
                    {checklistItems.map((item, index) => {
                        return (
                            <div key={index}>
                                <div className='description'>
                                    
                                    <img src={check} alt='imagem de checar'></img>
                                    <div>
                                    {item.title}
                                    {item.description}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default About