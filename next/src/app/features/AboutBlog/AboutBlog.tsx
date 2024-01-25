import { useEffect, useState } from "react";
import { microcms } from "@/app/setting/micro-cms/cms";
import dayjs from "dayjs";
import styled from "styled-components";
import Title from "@/app/components/Title/Title";
import Button from "@/app/components/Button/Button";
import BlogCard from "@/app/components/BlogCard/BlogCard";

const title = { title:'Blog', icon: 'edit_square' }
const moreBtn = { text:'一覧を見る', url: '#' }

// style
const Container = styled.div``
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
  type dataType = {
    id: string;
    publishedAt: string;
    revisedAt: string;
    title: string;
  }[];
  const [data, setData] = useState<dataType>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await microcms.get({
          endpoint: 'blogs',
          queries: { orders: '-createdAt', limit: 3 }
        });
        setData(response.contents);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const article = data.map(val => { return { url: val.id, title: val.title, date: dayjs(val.publishedAt).format('YYYY.MM.DD') } })

  const listItems = article.map((val, index) =>
    <li key={index}><BlogCard {...val} /></li>
  );
  return (
    <Container id="about-blog">
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