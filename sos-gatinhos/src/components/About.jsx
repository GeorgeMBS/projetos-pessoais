import React from 'react'
import styles from './styles/About.css'


const About = () => {
  return (
    <div className='container-principal'>

      <div className='imagem-gatos01'><img src="/001.jpg" alt="Gatinhos!" /></div>

      <h2 className='subtitulo'>Você já conhece a história dos gatinhos da colônia?</h2>

      <p className='texto01'>
        Em média 180 gatos estão vivendo há anos em um gatil a céu aberto em Guaíba. Com a grande proporção que tomou, eles são alimentados e amparados por protetores, principalmente o Sr. Osvaldo.
        Após tomarmos conhecimento da situação, iniciamos uma força tarefa para acabar com isso e dar lares reais e seguros para os gatinhos.</p>

      <div className='imagem-gatos02'><img src="/002.jpg" alt="Gatinhos!" /></div>

      <p className='texto02'>Precisamos nos mobilizar por esses animais, inclusive exigindo das autoridades, uma vez que animais em massa abandonados são risco à saúde pública também. O primeiro passo é castração em massa, pois além dos muitos gatos que tem, a humanidade é ruim e acaba fazendo o local de "desova", abandonando ainda mais gatos, como se não bastasse já ser bem complicada a situação.
        Com isso estamos aceitando TODO tipo de ajuda!
      </p>
      <p className='ending'>A UNIÃO FAZ A FORÇA!</p>
    </div>
  )
}

export default About
