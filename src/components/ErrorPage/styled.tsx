import styled from 'styled-components';

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const ErrorMessage = styled.h2`
  font-size: 24px;
  color: #ff0000; /* Red color for error messages */
`;
