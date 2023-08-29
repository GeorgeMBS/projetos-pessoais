import React from 'react'
import './styles/Doacoes.css'


const Doacoes = () => {
  return (
    <div className='containerprincipal'>

      <div className='racao'>


        <img
          className='marca'
          src="/racao.png"
          alt="Ração"
        />

        <p>
          <h2 className='sub'>ESSA É A MARCA DA RAÇÃO QUE ELES COMEM!</h2> <br /> Para quem quiser doar ela em si!
          O valor dela é super em conta, além de não ter corante nos grãos, também é nutritiva. O pedido de marca específica não é somente uma exigência de paladar, queremos prezar pela saúde deles, pois a mudança brusca de alimentação pode causar problemas gastrointestinais e não queremos isso.
        </p>

      </div>


      <div className='cobertor'>

        <p>
          <h1 className='sub'>A DOAÇÃO DE COBERTINHAS TAMBÉM É MUITO IMPORTANTE!!!</h1> <br />
          De 15 em 15 dias uma equipe voluntária vai até a colônia realizar uma limpeza do local, e é necessário fazer a troca das cobertas molhadas. Por isso é importante que tenhamos um estoque delas! Pode ser qualquer tecido de plush: cobertinhas, sobras de tecido, tapetinhos... o que tu achar que vai esquentar nossos bichanos!
        </p>

        <img
          className='coberta'
          src="/cobertas.png"
          alt="Cobertas"
        />

      </div>


      <div className='tampinhas'>

        <h1>PROJETO SOS TAMPINHAS</h1>
        <p className='sub'>
          DOE E TRANSFORME A VIDA DOS GATOS DA COLÔNIA! 
        </p>
        <p>CADA TAMPINHA FAZ A DIFERENÇA. Estes são os tips de tampas que você pode doar para ajudar nossos bichanos:</p>

        <img
          className='tampas'
          src="/tampinhas.jpg"
          alt="Tampinhas"
        />





        <h1>
          PONTOS DE COLETA TAMPINHAS DE PLÁSTICO
        </h1>

        <div className='lista'>
          <div className='guaiba'>
            <h2>
              Guaíba
            </h2>
            <ul>
              <li>Jatobá Floricultura Av. Adão Foques, 1169 - Florida Horário Comercial</li>
              <li>GV PRESENTES Rua Dr. Lauro Azambuja, 118 loja 01 Centro - The Winner Horário Comercial</li>
              <li>TC computadores Av. Lupicinio Rodrigues, 1176, Santa Rita Horário Comercial</li>
              <li>Hospital Veterinário Bichos do Sul Av. Com, Estr. Ismael Chaves Barcelos, 401 - Engenho</li>
              <li> Maceió, 766 - Santa Rita Combinar por mensagem</li>
            </ul>
          </div>
          <div className='poa'>
            <h2>
              Porto Alegre
            </h2>
            <ul>
              <li>Rua Vicente Ferreira Gomes, 40, Sarandi Horário comercial</li>
              <li>Av. Sertorio, 7290 Após horário comercial, combinar por mensagem</li>
              <li>Av Coronel Aparicio Borges, 1123 Ap 106 B, Glória Deixar na portaria para Milene</li>
            </ul>
          </div>
          <div className='eldorado'>
            <h2>
              Eldorado do Sul
            </h2>
            <ul>
              <li>Rua Eurico Gaspar Dutra, 214 Bairro Loteamento Combinar por mensagem</li>
            </ul>
          </div>
          <div className='canoas'>
            <h2>
              Canoas
            </h2>
            <ul>
              <li>SWAG Complex - Estúdio de Dança R. Açucena, 1801 - Estância Velha</li>
            </ul>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Doacoes