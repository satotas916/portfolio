import styled from "styled-components";
import Title from "../../components/title/Title";
import Button from "../../components/button/Button";
import BlogCard from "../../components/blog-card/BlogCard";

const title = { title:'Blog', icon: 'edit_square' }
const article = [
  { url: '#', title: 'ポートフォリオ作成日記③', date: '2023.11.02' },
  { url: '#', title: 'ポートフォリオ作成日記②', date: '2023.11.01' },
  { url: '#', title: 'ポートフォリオ作成日記①', date: '2023.10.29' }
]
const listItems = article.map((val, index) =>
  <li key={index}><BlogCard {...val} /></li>
);
const moreBtn = { text:'一覧を見る', url: '#' }

// style
const Container = styled.div`
  width: 980px;
  margin: 0 auto;
`
const List = styled.ul`
  margin-top: 45px;
  li:not(:last-child) {
    margin-bottom: 30px;
  }
`
const ButtonWrap = styled.div`
  margin-top: 40px;
  text-align: right;
`

function AboutBlog() {
  return (
    <Container>
      <Title {...title} />
      <List>
        {listItems}
      </List>
      <ButtonWrap>
        <Button {...moreBtn} />
      </ButtonWrap>
    </Container>
  )
}

export default AboutBlog