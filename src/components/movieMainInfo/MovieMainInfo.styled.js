import styled from 'styled-components';

export const InfoContainer = styled.div`
  display: flex;  
  padding: 8px 20px;
  border-bottom: 2px solid var(--border-color);
`;

export const InfoBlock = styled.div`
  margin-left: 16px;
  padding: 8px 16px;
`;

export const InfoTitle = styled.h2`
font-size: 30px;
  margin-bottom: 16px;
`;

export const InfoSubtitle = styled.h3`
  margin-bottom: 12px;
`;

export const InfoText = styled.p`
  margin-bottom: 20px;
  color: var(--second-text-color);
`;

export const InfoSubtext = styled.span`
display: inline-block;
&:not(:last-child) {
    margin-right: 8px;
  }
`
