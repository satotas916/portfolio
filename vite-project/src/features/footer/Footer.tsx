import styled from "styled-components";
import { theme } from "../../setting/style/common";

// style
const Container = styled.div`
  padding: 20px 0;
  text-align: center;
  font-size: 20px;
  line-height: 1.46;
  font-weight: bold;
  color: ${theme.colors.soil};
  background: ${theme.colors.base};
`

function Footer() {
  return (
    <Container>
      &copy; Keisuke Sato
    </Container>
  )
}

export default Footer
