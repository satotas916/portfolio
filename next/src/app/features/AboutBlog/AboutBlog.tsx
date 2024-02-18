import { useEffect, useState } from "react";
import { ApiBlogType } from "@/app/types/api";
import { getApi } from "@/app/utils/api";
import dayjs from "dayjs";
import styled from "styled-components";
import Title from "@/app/components/Title/Title";
import Button from "@/app/components/Button/Button";
import BlogCard from "@/app/components/BlogCard/BlogCard";

export interface BlogType {
  url: { pathname: string; query: { id: string } };
  title: string;
  date: string;
}

const title = { title:'Blog', icon: 'edit_square' }
const moreBtn = { text:'一覧を見る', url: '/blog', keyVal: 'about-blog', tag: 'Link' }

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
  const [data, setData] = useState<ApiBlogType[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      const res = await getApi({ endpoint: 'blogs', queries: { orders: '-createdAt', limit: 3 }})
      if(res.contents) {
        setData(res.contents)
        setLoading(false)
      }
    }
    fetchData()
  }, []);

  const article: BlogType[] = data.map(val => { return {
    url: { pathname: '/blog', query: { id: val.id } },
    title: val.title,
    date: dayjs(val.publishedAt).format('YYYY.MM.DD')
  } })

  const ListTag = loading ?
    <p>Now Loading...</p> :
    <List>{article.map((val, index) => <li key={index}><BlogCard {...val} /></li>)}</List>

  return (
    <Container id="about-blog">
      <Title {...title} />
      {ListTag}
      <ButtonWrap>
        <Button {...moreBtn} />
      </ButtonWrap>
    </Container>
  )
}

export default AboutBlog