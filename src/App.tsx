import { Container, Content } from './styles.ts';
import { Button } from './components/Button';
import { Input } from './components/Input';

function App() {

  return (
    <Container>
      <Content>
        <Input/>
        <Button/>
      </Content>
    </Container>

  );
}

export default App;
