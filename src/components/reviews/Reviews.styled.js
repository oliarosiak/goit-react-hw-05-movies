import styled from 'styled-components';

export const ReviewsList = styled.ul`
  padding: 16px;
`;

export const ReviewsItem = styled.li`
  padding: 4px 16px;
`;

export const ReviewsTitle = styled.h3`
  margin: 8px 0;
  color: var(--main-text-color);
`;

export const ReviewsText = styled.p`
font-size: 12px;
  &::first-letter {
    font-size: 30px;
    font-weight: 700;
    color: var(--active-color);
  }
`;

export const NoReviewBlock = styled.div`
  padding: 16px 20px;
`;
export const NoReviewText = styled.p`
  font-size: 24px;
  color: var(--second-text-color);
`;
