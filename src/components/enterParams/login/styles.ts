import styled from 'styled-components'


export const FormContainer = styled.div`
  .locker{
    width: 30px;
    position: absolute;
    right: 10px;
    fill: ${props => props.color};
  }
  .serverError{
    color: ${props=>props.theme.colors.primary};
    position: relative;
    top: -10px;
  }
  h2{
    margin-bottom: 20px;
    font-weight: 500;
    font-size: 24px;
    color: ${props => props.theme.colors.primary};
  }
  p span{
    color: ${props => props.theme.colors.secondary};
  }
  p span:hover{
    color: ${props => props.theme.colors.secondary};
    cursor:pointer;
  }
  
  
  .login-box {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    padding: 40px;
    transform: translate(-50%, -50%);
    background: rgba(24, 20, 20, 0.987);
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0,0,0,.6);
    border-radius: 10px;
  }

  .login-box .user-box {
    position: relative;
  }
button{
  background: transparent;
  outline: none;
  border: none;
  position: relative;
  top:-30px;
}
  .error{
    background: transparent;
    color: ${props => props.theme.colors.primary};
    margin-bottom: 0px;
    position: relative;
    top: -20px;
  }
  .login-box p{
    color:${props => props.theme.colors.primary};
    
  }
  
  .login-box .user-box input {
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    background: transparent;
  }

  .login-box .user-box label {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    pointer-events: none;
    transition: .5s;
  }

  .login-box .user-box input:focus ~ label,
  .login-box .user-box input:valid ~ label {
    top: -20px;
    left: 0;
    color: ${props=>props.theme.colors.secondary};
    font-size: 16px;
  }

  .login-box form button {
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    color: #ffffff;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: .5s;
    margin-top: 40px;
    letter-spacing: 4px
  }

  .login-box button:hover {
    background: ${props=>props.theme.colors.secondary};
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px ${props=>props.theme.colors.secondary},
    0 0 25px ${props=>props.theme.colors.secondary},
    0 0 50px ${props=>props.theme.colors.secondary},
    0 0 100px ${props=>props.theme.colors.secondary};
  }

  .login-box button span {
    position: absolute;
    display: block;
  }

  @keyframes btn-anim1 {
    0% {
      left: -100%;
    }

    50%,100% {
      left: 100%;
    }
  }

  .login-box button span:nth-child(1) {
    bottom: 2px;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, ${props=>props.theme.colors.secondary});
    animation: btn-anim1 2s linear infinite;
  }
`