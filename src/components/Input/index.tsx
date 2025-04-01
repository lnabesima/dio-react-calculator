import { JSX } from 'react';
import { InputContainer } from './styles.ts';

export const Input = (): JSX.Element => {
  return (
    <InputContainer>
      <input type={"text"}/>
    </InputContainer>
  );
};