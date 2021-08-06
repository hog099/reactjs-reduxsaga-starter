import { Container, Content } from './styles';

export function Header() {

  
  return (
    <Container>
      <Content>       
        <h3>Bem-Vindo</h3>
        <button onClick={()=>alert("Criar tela de login")}>Logar</button>
      </Content>
    </Container>
  )
}