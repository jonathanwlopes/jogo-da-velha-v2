import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  scrollbar-width: auto;
  scrollbar-color: #8f54a0 #ffffff;

  *::-webkit-scrollbar {
    width: 0px;
  }

  *::-webkit-scrollbar-track {
    background: #ffffff;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #8f54a0;
    border-radius: 1px;
    border: 1px solid #ffffff;
  }
}

html {
  @media (max-width: 1080px){
    font-size: 93.75%;
  }

  @media (max-width: 720px){
    font-size: 87.5%
  }

}
`
