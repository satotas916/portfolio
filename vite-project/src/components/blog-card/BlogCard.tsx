import styled from "styled-components";

// style
const Container = styled.a`
  display: block;
  padding: 20px 40px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 6px 6px 0 0 #4dac6e;
  text-decoration: none;
`
const Date = styled.span`
  display: block;
  margin-bottom: 14px;
  font-size: 24px;
  line-height: 1.46;
  color: #4dac6e;
  font-family: 'Dela Gothic One', sans-serif;
`
const Title = styled.p`
  font-size: 24px;
  line-height: 1.46;
  font-weight: bold;
  color: #000;
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
