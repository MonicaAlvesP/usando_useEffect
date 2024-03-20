import React, { useState, useEffect } from 'react'
import VainaWeb from './assets/vainawebt.svg'
import Amazon from './assets/amazon.svg'
import SirioLibanes from './assets/sirio_libanes.svg'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`

const Informacoes = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 40vh;
`

const Patrocinadores = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 60vh;
`

function App() {

const [marca, setMarca] = useState(VainaWeb)

useEffect(() => {
  if (marca === VainaWeb) {
    document.querySelector("div").style.backgroundColor = "#F8BF15";
    document.querySelector("div").style.transition="ease-in-out 0.8s"

  } else if (marca === Amazon) {
    document.querySelector("div").style.backgroundColor = "#05a1ad"
    document.querySelector("div").style.transition="ease-in-out 0.8s"
    document.querySelector("div > h2").style.color = "#ffffff"

  } else if(marca === SirioLibanes){
    document.querySelector("div").style.backgroundColor = "#8ab3cf"
    document.querySelector("div").style.transition="ease-in-out 0.8s"
  } 
  
  //else nesse caso é opcional
  else{
    document.querySelector("div").style.backgroundColor = "#FFFFFF"
  }
})

  return (
    <sectionPai>
      <GlobalStyle />

      <Informacoes>
        <img src={marca} alt="Logo VainaWeb" />
        <h2>PATROCINADORA OFICIAL DO CICLO "TALENTO DIGITAIS DA ESCOLA VAINA WEB"</h2>
      </Informacoes>


      <Patrocinadores>
        <img onClick={() => { setMarca(Amazon) }} src={Amazon} alt="" />
        <img onClick={() => { setMarca(VainaWeb) }} src={VainaWeb} alt="" />
        <img onClick={() => { setMarca(SirioLibanes) }} src={SirioLibanes} alt="" />
      </Patrocinadores>
    </sectionPai>
  )
}

export default App
