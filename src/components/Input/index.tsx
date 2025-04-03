import { JSX } from 'react';
import { InputContainer } from './styles.ts';

interface InputProps{
  value: string
}
export const Input = ({value}:InputProps): JSX.Element => {
  return (
    <InputContainer>
      <input type={"text"} disabled value={value}/>
    </InputContainer>
  );
};