import { JSX } from 'react';
import { StyledButton } from './styles.ts';

export const Button = (): JSX.Element =>
  (
    <StyledButton type={"button"}>
      Henlo
    </StyledButton>
  )