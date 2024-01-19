import styled from "styled-components";
import { theme } from "../../setting/style/common";

// style
const Container = styled.a`
  display: block;
  padding: 20px 40px;
  background: #fff;
  box-shadow: 12px 12px 0 0 ${theme.colors.base};
  text-decoration: none;
`
const Date = styled.span`
  display: block;
  margin-bottom: 8px;
  font-size: 18px;
  line-height: 1.46;
  color: ${theme.colors.base};
  font-family: ${theme.fonts.DelaGothicOne};
`
const Title = styled.p`
  font-size: 24px;
  line-height: 1.46;
  font-weight: bold;
  color: ${theme.colors.black};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

function BlogCard(props: { url: string; title: string; date: string; }) {
  return (
    <Container href={props.url}>
      <Date>{props.date}</Date>
      <Title>{props.title}</Title>
    </Container>
  )
}

export default BlogCard
