import React from 'react'
import styles from './styles/Doacoes.css'


const Doacoes = () => {
  return (
    <div className='containerprincipal'>

      <div className='racao'>

        <h2>
          ESSA É A MARCA DA RAÇÃO QUE ELES COMEM! Para quem quiser doar ela em si!
        </h2>

        <img 
        src="src\imagens\Ração.png" 
        alt="Ração" 
        />
        
        <p className='texto'>
          O VALOR DELA É SUUUPER EM CONTA, além de não ter corante nos grãos, também é nutritiva. O pedido de marca específica não é somente uma exigência de paladar,queremos prezar pela saúde deles, pois a mudança brusca de alimentação pode causar problemas gastrointestinais e não queremos isso.
        </p>

      </div>


      <div className='cobertor'>

        <h2>
          A DOAÇÃO DE COBERTINHAS TAMBÉM É MUITO IMPORTANTE!!!
        </h2>

        <p className='texto'>
          De 15 em 15 dias uma equipe voluntária vai até a colônia realizar uma limpeza do local, e é necessário fazer a troca das cobertas molhadas. Por isso é importante que tenhamos um estoque delas! Pode ser qualquer tecido de plush: cobertinhas, sobras de tecido, tapetinhos... o que tu achar que vai esquentar nossos bichanos!
        </p>

        <img 
        src="src\imagens\Cobertas.png" 
        alt="Cobertas" 
        />

      </div>


      <div className='tampinhas'>
        <h1>
          PROJETO SOS TAMPINHAS
        </h1>

        <img 
        src="src\imagens\Tampinhas.jpg" 
        alt="Tampinhas" 
        />

        <p className='texto'>
          DOE E TRANSFORME A VIDA DOS GATOS DA COLÔNIA! CADA TAMPINHA FAZ A DIFERENÇA
        </p>



        <h1>
          PONTOS DE COLETA TAMPINHAS DE PLÁSTICO
        </h1>

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

        <h2>
          Porto Alegre
        </h2>

        <ul>
          <li>Rua Vicente Ferreira Gomes, 40, Sarandi Horário comercial</li>
          <li>Av. Sertorio, 7290 Após horário comercial, combinar por mensagem</li>
          <li>Av Coronel Aparicio Borges, 1123 Ap 106 B, Glória Deixar na portaria para Milene</li>
        </ul>

        <h2>
          Eldorado do Sul
        </h2>

        <ul>
          <li>Rua Eurico Gaspar Dutra, 214 Bairro Loteamento Combinar por mensagem</li>
        </ul>

        <h2>
          Canoas
        </h2>

        <ul>
          <li>SWAG Complex - Estúdio de Dança R. Açucena, 1801 - Estância Velha</li>
        </ul>

      </div>

    </div>
  )
}

export default Doacoes