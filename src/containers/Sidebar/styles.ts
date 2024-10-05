import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles'

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const BotaoTema = styled.button`
  color: #eee;
  background-color: #282a35;
  font-size: 10px;
  font-weight: bold;
  padding: 8px;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.3s ease;
  letter-spacing: 1px;

  &:hover {
    transform: scale(1.1);
  }
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
`
