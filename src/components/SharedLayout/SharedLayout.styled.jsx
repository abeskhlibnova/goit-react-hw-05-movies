import styled from 'styled-components';

export const BoxPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
`;

export const Footer = styled.footer`
  width: 100%;
  /* height: 30px; */
  background: linear-gradient(
    45deg,
    rgba(66, 27, 146, 0.7) 23%,
    rgba(156, 48, 58, 0.7)
  );
  box-shadow: 11px 11px 14px 3px rgba(34, 60, 80, 0.31);
  color: white;
`;
export const Span = styled.p`
  text-align: center;
  opacity: 0.5;
`;
