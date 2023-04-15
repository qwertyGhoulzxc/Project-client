import styled from "styled-components";

export const FullPage = styled.div`
    
  height: 100vh;
  display: grid;
  place-items: center;
  div {
display: flex;
    flex-direction: column;
    align-items: center;  
    justify-content: center;
    h1 {
      color: ${props => props.theme.colors.primary};
      font-size: 30px;
    }

    p {
      color: ${props => props.theme.colors.secondary};
      font-size: 20px;
    }
    a{
      color: ${props => props.theme.colors.primary};
      text-decoration: none;
    }
    button {
      cursor:pointer;
      margin-top: 30px;
      display: flex;
      align-items: center;
      font-family: inherit;
      font-weight: 500;
      font-size: 17px;
      padding: 0.8em 1.3em 0.8em 0.9em;
      color: white;
      background: #ad5389;
      background: rgba(0, 0, 0, 0.3);
      border-color:${props=>props.theme.colors.error};
      border-size:2px ;
      border-style: solid;
      letter-spacing: 0.05em;
      border-radius: 16px;
    }

    button svg {
      margin-right: 3px;
      transform: rotate(30deg);
      transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
    }

    button span {
      transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
    }

    button:hover svg {
      transform: translateX(5px) rotate(90deg);
    }

    button:hover span {
      transform: translateX(7px);
    }
  }
    `
