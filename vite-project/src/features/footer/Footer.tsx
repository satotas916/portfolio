import styled from "styled-components";

// style
const Container = styled.div`
  padding: 20px 0;
  text-align: center;
  font-size: 28px;
  line-height: 1.46;
  font-weight: bold;
  color: #fffcbd;
  background: #4dac6e;
`

function Footer() {
  return (
    <Container>
      &copy; Keisuke Sato
    </Container>
  )
}

export default Footer
