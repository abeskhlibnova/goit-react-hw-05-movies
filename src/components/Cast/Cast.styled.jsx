import styled from 'styled-components';
import nophoto from 'images/nophoto.jpg';

export const Button = styled.button`
  background-color: rgba(66, 27, 146);
  border: 1px solid white;
  color: #fff;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  width: 150px;
  height: 40px;
  margin-bottom: 20px;
`;
export const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
`;

export const StyledImg = styled.img`
  background-image: url(${nophoto});
  background-size: cover;
  margin-right: 20px;
  height: 150px;
`;

export const StyledLi = styled.li`
  display: flex;
  width: 20%;
  height: 50%;
  font-size: 24px;
  font-weight: 700;
  border: 1px solid white;
  margin-bottom: 20px;
  margin-right: 30px;
  background-color: rgba(250, 250, 250, 0.8);
  border-radius: 20px;
  overflow: hidden;
`;

export const Description = styled.p`
  color: rgba(66, 27, 146);
  line-height: 1.1;
  font-size: 16px;
`;

export const ErrorInfo = styled.div`
  color: white;
  margin-bottom: 40px;
`;
