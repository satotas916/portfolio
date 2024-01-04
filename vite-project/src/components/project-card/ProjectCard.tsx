import styled from "styled-components";

function ProjectCard(props: { url: string; image: string; title: string; text: string; date: number; time: number; }) {

  // style
  const ProjectCard = styled.a`
    display: flex;
    width: 912px;
    background: #fff;
    border-radius: 20px;
    box-shadow: 6px 6px 0 0 #4dac6e;
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
    color: #000;
    background: linear-gradient(transparent 60%, #4dac6e 0%);
  `
  const Text = styled.div`
    margin-top: 24px;
    font-size: 16px;
    line-height: 1.43;
    color: #000;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 6;
  `
  const Details = styled.div`
    margin-top: 24px;
    font-size: 16px;
    line-height: 1.43;
    color: #000;
    span {
      display: block;
    }
  `

  return (
    <ProjectCard href={props.url}>
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
    </ProjectCard>
  )
}

export default ProjectCard
