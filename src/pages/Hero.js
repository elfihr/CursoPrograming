import React from 'react'
import '../styles/Hero.css'
import video01 from '../assets/video1.mp4'
import video02 from '../assets/video2.mp4'

const Hero = () => {
  return (
    <div className='Hero'>
      <div className='title'>
        <h1>Aprenda Programar do Zero <br /> com <span className='titleSpan'>Profissionais qualificados</span></h1>
        <p>Desbloqueie seu potencial com código de iniciante a expert: Sua jornada
          na programação começa aqui, o que esta esperando? Invista no seu futuro,
          aprendendo as tecnologias HTML,CSS,Javascripr e Java. Nao perca mais tempo, o mundo da tecnologia te espera. Vamos juntos!</p>
        <div className='titleStartButton'>
          <a href='#' className='titleStart'>Comece Agora</a>
          <a href='#' className='titleStart doc'>Documentação</a>
        </div>
        <div className='video'>
          <video autoPlay muted loop >
            <source src={video01} type='video/mp4' />
          </video>
          <video autoPlay muted loop >
            <source src={video02} type='video/mp4' />
          </video>
        </div>
      </div>
    </div>
  )
}

export default Hero

