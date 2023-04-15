import styled from "styled-components";

export const MainBlock = styled.div`
  background: rgba(0, 0, 0,0.7);
  border: 1px solid ${props => props.theme.colors.secondary};

  color: ${props => props.theme.colors.primary};
  width: 400px;
  border-radius: 9px;
  padding: 15px;

  .drop-area {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px dashed ${props => props.theme.colors.secondary};
    width: 100%;
    height: 100px;
    margin-top: 10px;
  }

  .area {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid ${props => props.theme.colors.secondary};
    width: 100%;
    height: 100px;
  }

  .logo {
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }

  .DeleteNote {
    margin-left: 7px;
    cursor: pointer;
    border: none;
    font-size: 16px;
    color: ${props => props.theme.colors.error};
    background: transparent;
  }

  .chnageUsername {
    outline: none;
    border: 1px solid ${props => props.theme.colors.secondary};
    background: transparent;
    color: ${props => props.theme.colors.primary};
    height: 28px;
    padding: 3px;
    width: 210px;
    font-size: 18px;
    border-radius: 9px;
    margin-right: 30px;
  }

  .compare-Img__Username {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .Flex {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
  }

  textarea {
    resize: none;
    background: none;
    color: ${props => props.theme.colors.primary};
    font-family: Roboto, sans-serif;
    font-size: 16px;
    border: 1px solid ${props => props.theme.colors.secondary};
    border-radius: 9px;
  }

  textarea::-webkit-scrollbar {
    border-radius: 9px;
    width: 9px;
  }

  textarea::-webkit-scrollbar-thumb {
    border-radius: 0 9px 9px 0;
    background: ${props => props.theme.colors.secondary};
  }

  textarea::-webkit-scrollbar-track {
    border-radius: 0 9px 9px 0;
    background: white;
  }

  p {

  }

  .ErrorUsername {
    display: flex;
    flex-direction: column;
  }

  //
  button {
    margin: 30px auto 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-family: inherit;
    font-weight: 500;
    font-size: 17px;
    padding: 0.8em 1.3em 0.8em 0.9em;
    color: white;
    background: #ad5389;
    background: rgba(0, 0, 0, 0.3);
    border-color: ${props => props.theme.colors.secondary};
    border-size: 2px;
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
`
interface Visibility{
    visibleState:string
}
export const StateVisibility = styled.div<Visibility>`
  top: 0;
  width: 100%;
  height: 95vh;
  background: transparent;
  backdrop-filter: blur(3px);
  position: absolute;
  place-items: center;
  display: ${props => props.visibleState};
`