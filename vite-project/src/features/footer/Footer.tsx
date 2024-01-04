import styled from "styled-components";

function Footer() {
  // style
  const Footer = styled.div`
    padding: 20px 0;
    text-align: center;
    font-size: 28px;
    line-height: 1.46;
    font-weight: bold;
    color: #fffcbd;
    background: #4dac6e;
  `

  return (
    <Footer>
      &copy; Keisuke Sato
    </Footer>
  )
}

export default Footer
