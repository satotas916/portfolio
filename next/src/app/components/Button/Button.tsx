import styled from "styled-components";
import { theme } from "@/app/setting/style/common";

// style
const Container = styled.a`
  position: relative;
  display: inline-block;
  padding: 0 10px;
  font-size: 32px;
  line-height: 1.44;
  color: ${theme.colors.black};
  font-weight: bold;
  text-decoration: none;
  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 16px;
    background: ${theme.colors.base};
    z-index: -1;
    transform: scale(0, 1);
    transform-origin: right top;
    transition: transform 0.6s cubic-bezier(0.8, 0, 0.2, 1);
  }
  &:hover {
    &:before {
      transform:scale(1, 1);
      transform-origin: left top;
    }
  }
`

function Button(props: { text: string; url: string; }) {
  return (
    <Container href={props.url}>
      {props.text}
    </Container>
  )
}

export default Button
