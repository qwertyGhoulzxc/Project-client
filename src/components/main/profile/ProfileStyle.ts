import styled from "styled-components";

export const Block = styled.div`
  margin-top: 20px;
  position: relative;

//background: rgba(255, 255, 255, 0.13);
background: ${props => props.theme.backgrounds.greyBack};
.content{
  margin: auto;
  width:800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
  .content1{
    margin: auto;
    width:800px;
    #name{
      font-size: 18px;
      font-weight: 500;
      width:400px;
      color: ${props => props.theme.colors.error};
    }
 p{
   font-size: 18px;
   width:400px;
   color: ${props => props.theme.colors.primary};
 }
  }
  .avatar{
width: 150px;
  }
  .username{
    font-size: 24px;
    color: ${props => props.theme.colors.primary};
    
  }
  .avatar img{
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
  .settings path{
    fill: white;
  }
  .settings{
    cursor: pointer;
    height: 24px;
    width: 24px;
  }
  .editProfile{
    margin: 0 20px;
    width: 200px;
    height: 32px;
    border-radius: 10px;
    font-family: Roboto,sans-serif;
    font-weight: 500;
    font-size: 15px;
    line-height: 32px;
    outline: none;
    border: none;
    text-align: center;
    background: ${props=>props.theme.colors.primary};
    cursor: pointer;
  }
  .editProfile:hover{
    background: lightgray;
  }
  .compare{
    display: flex;
    align-items: center;
  }
  
`
