import styled from "styled-components";
import { theme } from "@/app/setting/style/common";
import Title from "@/app/components/Title/Title";

const title = { title:'Contact' }

// style
const Container = styled.div`
  text-align: center;
`
const Emphasis = styled.span`
  position: relative;
  display: block;
  width: 4px;
  height: 36px;
  margin: 70px auto 0;
  background: ${theme.colors.base};
  border-radius: 10px;
  &::before,
  &::after {
    position: absolute;
    content: '';
    display: block;
    width: 4px;
    height: 40px;
    background: ${theme.colors.base};
    border-radius: 10px;
  }
  &::before {
    left: 32px;
    transform: rotate(45deg);
  }
  &::after {
    right: 32px;
    transform: rotate(-45deg);
  }
`
const Icon = styled.span`
  display: inline-block;
  margin-top: 16px;
  font-size: 80px;
  color: ${theme.colors.base};
`

function AboutContact() {
  return (
    <Container>
      <Title {...title} />
      <Emphasis />
      <Icon className="material-symbols-outlined">mail</Icon>
    </Container>
  )
}

export default AboutContact