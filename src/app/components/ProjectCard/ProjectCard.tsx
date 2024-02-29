import styled from "styled-components";
import { theme } from "@/app/setting/style/common";
import { ProjectType } from "@/app/features/AboutProject/AboutProject";
import ArticleContents from "@/app/features/ArticleContents/ArticleContents";
import { Suspense } from "react";

// style
const Container = styled.a`
  display: flex;
  background: #fff;
  box-shadow: 12px 12px 0 0 ${theme.colors.base};
  text-decoration: none;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  &:hover {
    transform: translate(6px, 6px);
    box-shadow: 6px 6px 0 0 ${theme.colors.base};
  }
`
const ImageWrap = styled.div`
  flex-shrink: 0;
  width: 50.4%;
  img {
    width: 100%;
    height: 100%;
    min-height: 365px;
    object-fit: cover;
  }
`
const Wrap = styled.div`
  flex-grow: 1;
  padding: 40px;
`
const Title = styled.h3`
  display: inline;
  padding: 0 10px 5px;
  font-size: 24px;
  line-height: 1.46;
  font-weight: bold;
  color: ${theme.colors.black};
  background: linear-gradient(transparent 60%, ${theme.colors.base} 0%);
`
const Text = styled.div`
  margin-top: 24px;
  font-size: 16px;
  line-height: 1.43;
  color: ${theme.colors.black};
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
`

function ProjectCard(props: ProjectType) {
  const article = props.text ?
    <Text><ArticleContents contents={props.text} /></Text> :
    <></>

  return (
    <Container href={props.url} target="_blank">
      <ImageWrap>
        <img src={props.image} alt="" />
      </ImageWrap>
      <Wrap>
        <Title>{props.title}</Title>
        <Suspense>
          {article}
        </Suspense>
      </Wrap>
    </Container>
  )
}

export default ProjectCard
