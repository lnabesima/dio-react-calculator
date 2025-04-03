import { JSX } from 'react';
import { StyledButton } from './styles.ts';

interface ButtonProps{
  label: string,
  onClick: (value: string) => void,
}

export const Button = ({label, onClick}:ButtonProps): JSX.Element =>
  (
    <StyledButton type={"button"} onClick={() =>onClick(label)}>
      {label}
    </StyledButton>
  )