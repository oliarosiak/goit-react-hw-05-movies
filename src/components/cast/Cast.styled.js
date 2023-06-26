import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 16px;
`;

export const CastItem = styled.li`
  flex-basis: calc((100% - 4 * 30px) / 4);
  padding: 4px;
`;

export const CastText = styled.p`
  margin-top: 8px;
  color: var(--second-text-color);
`;

export const NoCastBlock = styled.div`
  padding: 16px 20px;
`;
export const NoCastText = styled.p`
  font-size: 24px;
  color: var(--second-text-color);
`;
