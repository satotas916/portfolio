import { ElementType } from "react";
import styled from "styled-components";
import { theme } from "../../setting/style/common";

// style
const Container = styled.div`
  display: inline-block;
  text-align: left;
`
const Lead = styled.span<{ size: string }>`
  display: block;
  margin: ${props => props.size === 'm' ? '0 20px' : '0 30px'};
  font-size: 32px;
  color: ${theme.colors.black};
  font-family: ${theme.fonts.DelaGothicOne};
  font-weight: bold;
`
const TextWrap = styled.div<{ size: string }>`
  display: inline-block;
  position: relative;
  padding: ${props => props.size === 'm' ? '0 20px' : '0 30px'};
  color: ${theme.colors.black};
  font-family: ${theme.fonts.DelaGothicOne};
  font-weight: bold;
  &::before {
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    content: '';
    width: 100%;
    height: 34px;
    background: ${theme.colors.base};
    z-index: -1;
  }
`
const Text = styled.h2<{ size: string }>`
  display: inline-flex;
  align-items: center;
  font-size: ${props => props.size === 'm' ? '48px' : '80px'};
`
const Icon = styled.span<{ size: string }>`
  margin-right: 16px;
  font-size: ${props => props.size === 'm' ? '48px' : '80px'};
`

function Title(props: { title: string; size?: string; tag?: string; lead?: string; icon?: string }) {
  const tagElement = props.tag ? props.tag as ElementType : 'h2'
  const size = props.size ? props.size : 'm'
  return (
    <Container>
      {props.lead && <Lead size ={size}>{props.lead}</Lead>}
      <TextWrap size={size}>
        <Text as={tagElement} size={size}>
          {props.icon && <Icon className="material-symbols-outlined" size ={size}>{props.icon}</Icon>}
          {props.title}
        </Text>
      </TextWrap>
    </Container>
  )
}

export default Title
