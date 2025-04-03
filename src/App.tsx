import { Container, Content, Row } from './styles.ts';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { useState } from 'react';

function App() {
  const [currentNumber, setCurrentNumber] = useState<string>("0");
  const [firstNumber, setFirstNumber] = useState<string>("0");
  const [operation, setOperation] = useState<string>("");

  const addNumberToCurrentNumber = (num: string) => {
    setCurrentNumber(prev => {
      if (prev === '0') return num;
      return prev + num;
    });
  };

  const handleOperation = (operation: string) => {
    setFirstNumber(currentNumber);
    setCurrentNumber("0");
    setOperation(operation);
  };

  const handleEquals = () => {
    let result: number;
    switch (operation) {
      case '+':
        result = Number(firstNumber) + Number(currentNumber);
        console.log(
          `First Number: ${firstNumber} \n Current Number: ${currentNumber} \n Result: ${result} \n Operation: ${operation}`);
        break;
      case '-':
        result = Number(firstNumber) - Number(currentNumber);
        console.log(
          `First Number: ${firstNumber} \n Current Number: ${currentNumber} \n Result: ${result} \n Operation: ${operation}`);
        break;
      case '*':
        result = Number(firstNumber) * Number(currentNumber);
        console.log(
          `First Number: ${firstNumber} \n Current Number: ${currentNumber} \n Result: ${result} \n Operation: ${operation}`);
        break;
      case '/':
        result = Number(firstNumber) / Number(currentNumber);
        console.log(
          `First Number: ${firstNumber} \n Current Number: ${currentNumber} \n Result: ${result} \n Operation: ${operation}`);
        break;
      default:
        result = Number(currentNumber);
        break;
    }
    setCurrentNumber(result.toString());
    setOperation("");
  };

  const handleReset = () => {
    setFirstNumber("0");
    setCurrentNumber("0");
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label={"7"} onClick={addNumberToCurrentNumber}/>
          <Button label={"8"} onClick={addNumberToCurrentNumber}/>
          <Button label={"9"} onClick={addNumberToCurrentNumber}/>
          <Button label={"-"} onClick={handleOperation}/>
        </Row>
        <Row>
          <Button label={"4"} onClick={addNumberToCurrentNumber}/>
          <Button label={"5"} onClick={addNumberToCurrentNumber}/>
          <Button label={"6"} onClick={addNumberToCurrentNumber}/>
          <Button label={"+"} onClick={handleOperation}/>
        </Row>
        <Row>
          <Button label={"1"} onClick={addNumberToCurrentNumber}/>
          <Button label={"2"} onClick={addNumberToCurrentNumber}/>
          <Button label={"3"} onClick={addNumberToCurrentNumber}/>
          <Button label={"="} onClick={handleEquals}/>
        </Row>
        <Row>
          <Button label={"0"} onClick={addNumberToCurrentNumber}/>
          <Button label={"*"} onClick={handleOperation}/>
          <Button label={"/"} onClick={handleOperation}/>
          <Button label={"CE"} onClick={handleReset}/>
        </Row>
      </Content>
    </Container>

  );
}

export default App;
