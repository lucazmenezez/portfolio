import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid #c1c1c1;
  padding: 16px;
`

export const LinkBotao = styled.a`
  color: #fff;
  background-color: #4476bf;
  font-size: 14px;
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  margin-top: 24px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`
