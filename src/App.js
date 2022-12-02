import {Conteiner,Content,Row} from './style'
import Inputs from './components/inputs';
import Button from './components/buttons/index'
import { useState } from 'react';

function App() {
  const [currentNumber , setCurrentNumber] = useState('0')
  const[fisrtNumber,setFirtsNumber] = useState('0')
  const handleOnClear = () =>{
     setCurrentNumber('0')
     setFirtsNumber('0')
  }
  const handleSumNumber = () =>{
    if(fisrtNumber === '0'){
      setFirtsNumber(String(currentNumber));
      setCurrentNumber('0')
    }else{
      const sum = Number(fisrtNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
    }
  }
  const handleAddNumber = (number) =>{
    setCurrentNumber( prev => `${number}${prev === 0? '':prev}${number} `)
  }
    return (
    <Conteiner>
      <Content>
        <Inputs  value={currentNumber}/>
        <Row >
          <Button label='x'onClick={() => handleAddNumber('x')}/>
          <Button label='/' onClick={() => handleAddNumber('/')}/>
          <Button label='C' onClick={handleOnClear}/>
          <Button label='X' onClick={() => handleAddNumber('X')}/>
         </Row>
        <Row >
          <Button label='7' onClick={() => handleAddNumber('7')}/>
          <Button label='8' onClick={() => handleAddNumber('8')}/>
          <Button label='9' onClick={() => handleAddNumber('9')}/>
          <Button label='-' onClick={() => handleAddNumber('-')}/>
         </Row>
        <Row >
          <Button label='4' onClick={() => handleAddNumber('4')}/>
          <Button label='5' onClick={() => handleAddNumber('5')}/>
          <Button label='6' onClick={() => handleAddNumber('6')}/>
          <Button label='+' onClick={handleSumNumber}/>
         </Row>
        <Row >
          <Button label='1' onClick={() => handleAddNumber('1')}/>
          <Button label='2' onClick={() => handleAddNumber('2')}/>
          <Button label='3' onClick={() => handleAddNumber('3')}/>
          <Button label='=' onClick={() => handleAddNumber('=')}/>
         </Row>

          
      </Content>
    </Conteiner>
  );
}

export default App;
