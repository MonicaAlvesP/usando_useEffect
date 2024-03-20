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
  height: 50vh;
`

const Patrocinadores = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 50vh;
`
const Imagens = styled.img`
  width: 35vh;
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
        <Imagens src={marca} alt="Logo VainaWeb" />
        <h2>PATROCINADORA OFICIAL DO CICLO "TALENTO DIGITAIS DA ESCOLA VAINA WEB"</h2>
      </Informacoes>


      <Patrocinadores>
        <Imagens onClick={() => { setMarca(Amazon) }} src={Amazon} alt="" />
        <Imagens onClick={() => { setMarca(VainaWeb) }} src={VainaWeb} alt="" />
        <Imagens onClick={() => { setMarca(SirioLibanes) }} src={SirioLibanes} alt="" />
      </Patrocinadores>
    </sectionPai>
  )
}

export default App
