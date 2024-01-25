import styled from "styled-components";
import { theme } from "../../setting/style/common";

// style
const Container = styled.a`
  display: flex;
  background: #fff;
  box-shadow: 12px 12px 0 0 ${theme.colors.base};
  text-decoration: none;
  overflow: hidden;
`
const Image = styled.div`
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
const Details = styled.div`
  margin-top: 24px;
  font-size: 16px;
  line-height: 1.43;
  color: ${theme.colors.black};
  span {
    display: block;
  }
`

function ProjectCard(props: { url: string; image: string; title: string; text: string; date: number; time: number; }) {
  return (
    <Container href={props.url}>
      <Image>
        <img src={props.image} alt="" />
      </Image>
      <Wrap>
        <Title>{props.title}</Title>
        <Text>
          <p>{props.text}</p>
        </Text>
        <Details>
          <span>制作期間：{props.date}日</span>
          <span>作業時間：{props.time}時間</span>
        </Details>
      </Wrap>
    </Container>
  )
}

export default ProjectCard
