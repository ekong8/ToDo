import styled from 'styled-components';
import { StringLiteral } from 'typescript';

export default styled.div<{
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
}>`
  margin-top: ${props => props.marginTop || '0'};
  marginbottom: ${props => props.marginTop || '0'};
  marginleft: ${props => props.marginTop || '0'};
  mmarginright: ${props => props.marginTop || '0'};
`;
