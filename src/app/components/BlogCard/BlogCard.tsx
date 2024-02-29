import styled from "styled-components";
import { theme } from "@/app/setting/style/common";
import Link from "next/link";
import { DelaGothicOne } from "@/app/utils/fonts";

// style
const Container = styled.a`
  display: block;
  padding: 20px 40px;
  background: #fff;
  box-shadow: 12px 12px 0 0 ${theme.colors.base};
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  &:hover {
    transform: translate(6px, 6px);
    box-shadow: 6px 6px 0 0 ${theme.colors.base};
  }
`
const Date = styled.span`
  display: block;
  margin-bottom: 8px;
  font-size: 18px;
  line-height: 1.46;
  color: ${theme.colors.base};
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

function BlogCard(props: { url: { pathname: string; query: { id: string }; }; title: string; date: string; }) {
  return (
    <Container as={Link} href={props.url}>
      <Date className={DelaGothicOne.className}>{props.date}</Date>
      <Title>{props.title}</Title>
    </Container>
  )
}

export default BlogCard
