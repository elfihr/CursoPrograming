import React from 'react'
import '../styles/Feature.css'
import { features } from '../helper/helper'


const Feature = () => {
    return (
        <div id='trilha' className='feature'>
            <span>TRILHA</span>
            <h3>As Tecnologias que voce irá Aprender</h3>
            <div className='featureConteiner'>
                {features.map((feature, index) => {
                    return (
                        <div key={index}>
                            <div className='featureMainTitle'>
                                <div className='feature-Title icon'>{feature.icon}</div>
                                <div className='feature-Title'>{feature.text}</div>
                            </div>

                            <div>{feature.description}</div>
                        </div>

                    )
                })}
            </div>
        </div>
    )
}

export default Feature