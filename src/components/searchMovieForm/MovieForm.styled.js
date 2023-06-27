import styled from 'styled-components';

export const Form = styled.form`
  padding: 8px 20px;
  border-bottom: 2px solid var(--border-color);
`;

export const Input = styled.input`
  width: 400px;
  margin-right: 8px;
  padding: 4px 12px;
  font-size: 20px;
  outline: none;
  border-radius: 10px;
  border: 4px solid var(--border-color);
  color: var(--accent-color);
  &:hover,
  &:focus,
  &:active {
    border: 4px solid var(--active-color);
  }
  &::placeholder {
    color: var(--second-text-color);
  }
`;

export const Button = styled.button`
  padding: 4px 12px;
  font-size: 20px;
  color: var(--accent-color);
  border-radius: 10px;
  border: 4px solid var(--border-color);
  &:hover,
  &:focus,
  &:active {
    color: var(--active-color);
    border: 4px solid var(--active-color);
  }
`;
