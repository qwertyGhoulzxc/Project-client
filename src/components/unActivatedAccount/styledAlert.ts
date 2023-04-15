import styled,{ThemedStyledProps} from "styled-components";
interface MyStyledComponentProps {
    animation?:string
}
// interface MyStyledComponentStyleProps extends ThemedStyledProps<React.HTMLProps<HTMLDivElement>, any> {
//     animation?: string;
// }
export const AlertWindow = styled.div<MyStyledComponentProps>`
  position: absolute;
  right:20px;
  border: none;
  top: 40px;
width: 270px;
  height: 150px;
  background:white;
  padding: 10px;
border-radius: 10px;
  animation-name:${props => props.animation};
  animation-duration: 5s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  
  p{
    color: ${props => props.theme.colors.error};
    font-size: 17px;
  }
  button {
    margin-top: 15px;
    width: 100px;
    height: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;

    border: none;
    border-radius: 5px;
    box-shadow: 1px 1px 3px rgba(0,0,0,0.15);
    background: ${props=>props.theme.colors.error}
  }

  button, button span {
    transition: 200ms;
    background: ${props=>props.theme.colors.error};
  }

  button .text {
    transform: translateX(22px);
    color: white;
    font-weight: bold;
  }

  button .icon {
    position: absolute;
    border-left: 1px solid #c41b1b;
    transform: translateX(60px);
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button svg {
    width: 15px;
    fill: #eee;
  }

  button:hover {
    background: ${props=>props.theme.colors.error}
  }

  button:hover .text {
    color: transparent;
  }

  button:hover .icon {
    width: 100px;
    border-left: none;
    transform: translateX(0);
  }

  button:focus {
    outline: none;
  }

  button:active .icon svg {
    transform: scale(0.8);
  }



  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  
`