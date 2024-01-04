import styled from "styled-components";
import Title from "../../components/title/Title";

function AboutContact() {
  const title = { title:'Contact' }

  // style
  const AboutContact = styled.div`
    text-align: center;
  `
  const Emphasis = styled.span`
    position: relative;
    display: block;
    width: 4px;
    height: 36px;
    margin: 70px auto 0;
    background: #4dac6e;
    border-radius: 10px;
    &::before,
    &::after {
      position: absolute;
      content: '';
      display: block;
      width: 4px;
      height: 40px;
      background: #4dac6e;
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
    font-size: 90px;
    color: #4dac6e;
  `

  return (
    <AboutContact>
      <Title {...title} />
      <Emphasis />
      <Icon className="material-symbols-outlined">mail</Icon>
    </AboutContact>
  )
}

export default AboutContact