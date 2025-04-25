import GlobalStyle from "./globalStyle";
import { Container, Row } from "./styled";

import { Button } from "./components/Button";
import { Input } from "./components/Input";

import { useState } from "react";

function App() {
  const [currentNumber, setCurrentNumber] = useState(0);

  const handleAddChar = (label) => {
    setCurrentNumber((prev) => (prev === 0 ? label : prev + label));
  };

  const handleClear = () => {
    setCurrentNumber(0);
  };

  const handleEquals = () => {
    try {
      const result = eval(currentNumber);
      setCurrentNumber(result.toString());
    } catch {
      setCurrentNumber("Erro");
    }
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Input value={currentNumber} />
        <Row>
          <Button label={"7"} onClick={handleAddChar} />
          <Button label={"8"} onClick={handleAddChar} />
          <Button label={"9"} onClick={handleAddChar} />
          <Button label={"-"} onClick={handleAddChar} />
        </Row>
        <Row>
          <Button label={"4"} onClick={handleAddChar} />
          <Button label={"5"} onClick={handleAddChar} />
          <Button label={"6"} onClick={handleAddChar} />
          <Button label={"+"} onClick={handleAddChar} />
        </Row>
        <Row>
          <Button label={"1"} onClick={handleAddChar} />
          <Button label={"2"} onClick={handleAddChar} />
          <Button label={"3"} onClick={handleAddChar} />
          <Button label={"="} onClick={ handleEquals } />
        </Row>
        <Row>
          <Button label={"/"} onClick={handleAddChar} />
          <Button label={"0"} onClick={handleAddChar} />
          <Button label={"*"} onClick={handleAddChar} />
          <Button label={"C"} onClick={handleClear} />
        </Row>
      </Container>
    </>
  );
}

export default App;
/* <GlobalStyle /> NÃO funciona como WRAPPER! */
