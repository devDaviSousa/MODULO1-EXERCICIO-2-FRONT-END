import styled from "styled-components"


export const Container = styled.main`

max-width: 1020px;
margin: 0 auto;
  


div{
  background: white;
display: flex;
flex-direction: column;
align-items: right;
padding: 1.5rem;
justify-content: center;
width: 80%;
margin: 0 auto;
margin-bottom:1.5rem;
border-radius: 0.3rem;

h2{
    padding-bottom: 0.4rem;
    color: #363f5f;
    font-size: 2rem;
  }
  
  p{
    padding-bottom: 1rem;
    color: #969cb3;
  }

  a{
    text-decoration: none;
    color:var(--green);
    border-radius: 0.5rem;
    
  }

  button{
    width: 7rem;
    padding: 0.5rem 0rem 0.5rem 0rem;
    background: #f0f2f5;
    border: none;

  }


}
`