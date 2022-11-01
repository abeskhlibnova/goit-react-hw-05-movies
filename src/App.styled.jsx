import styled from 'styled-components';
import background from 'images/background.jpg';

export const AppBox = styled.div`
  display: flex;
  width: 100vw;

  font-size: 20px;

  background-attachment: local;

  background-image: linear-gradient(
      45deg,
      rgba(66, 27, 146, 0.2) 23%,
      rgba(156, 48, 58, 0.2)
    ),
    url(${background});
  background-size: contain;
`;
