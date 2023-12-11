import styled from "styled-components";

function Button(props: { text: string; url: string; }) {

  // style
  const Button = styled.a`
    position: relative;
    display: inline-block;
    padding: 0 10px;
    font-size: 32px;
    line-height: 1.44;
    color: #000;
    font-weight: bold;
    font-family: 'Noto Sans JP', sans-serif;
    text-decoration: none;
    &::before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 16px;
      background: #4dac6e;
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

  return (
    <Button href={props.url}>
      {props.text}
    </Button>
  )
}

export default Button
