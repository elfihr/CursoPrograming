import React from 'react'
import '../styles/Footer.css'
import { communityLinks, platformLinks, resourcesLinks } from '../helper/helper'

const Footer = () => {
    return (
        <footer className='conteiner'>
            <div className='footer'>
                <div className='footer01'>
                <h3>FihrPrograming</h3>
                    {resourcesLinks.map((link, index) => {
                        return (
                            <div key={index}>
                                <a className='description' href={link.href}>{link.text}</a>
                            </div>
                        )
                    })}

                </div>
                <div className='footer02'>
                <h3>Tecnologia</h3>
                    {platformLinks.map((link, index) => {
                        return (
                            <div key={index}>
                                <a className='description' href={link.href}>{link.text}</a>
                            </div>
                        )
                    })}
                </div>
                <div className='footer03'>
                <h3>Comunidade</h3>
                    {communityLinks.map((link, index) => {
                        return (
                            <div key={index}>
                                <a className='description' href={link.href}>{link.text}</a>
                            </div>
                        )
                    })}
                </div>
            </div>


        </footer>
    )
}

export default Footer