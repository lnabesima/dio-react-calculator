import { Container, Content, Row } from './styles.ts';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { useState } from 'react';

function App() {
  const [currentNumber, setCurrentNumber] = useState<string>("0");

  const addNumberToCurrentNumber = (num: string) => {
    setCurrentNumber(prev => {
      if(prev === '0') return num;
      return prev + num;
    })
  }



  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label={"7"} onClick={addNumberToCurrentNumber}/>
          <Button label={"8"} onClick={addNumberToCurrentNumber}/>
          <Button label={"9"} onClick={addNumberToCurrentNumber}/>
          <Button label={"-"} onClick={() => console.log("henlo")}/>
        </Row>
        <Row>
          <Button label={"4"} onClick={addNumberToCurrentNumber}/>
          <Button label={"5"} onClick={addNumberToCurrentNumber}/>
          <Button label={"6"} onClick={addNumberToCurrentNumber}/>
          <Button label={"+"} onClick={() => console.log("henlo")}/>
        </Row>
        <Row>
          <Button label={"1"} onClick={addNumberToCurrentNumber}/>
          <Button label={"2"} onClick={addNumberToCurrentNumber}/>
          <Button label={"3"} onClick={addNumberToCurrentNumber}/>
          <Button label={"="} onClick={() => console.log("henlo")}/>
        </Row>
        <Row>
          <Button label={"0"} onClick={addNumberToCurrentNumber}/>
          <Button label={"*"} onClick={() => console.log("henlo")}/>
          <Button label={"/"} onClick={() => console.log("henlo")}/>
          <Button label={"CE"} onClick={() => console.log("henlo")}/>
        </Row>
      </Content>
    </Container>

  );
}

export default App;
