'use client'
import styled from 'styled-components'
import Title from '@/app/components/Title/Title'
import Footer from '@/app/features/Footer/Footer'
import { Suspense, useEffect, useState } from "react";
import { ApiBlogType } from '../types/api';
import { getApi } from '../utils/api';
import { BlogType } from '../features/AboutBlog/AboutBlog';
import dayjs from 'dayjs';
import BlogCard from '../components/BlogCard/BlogCard';

const title = { title:'Blog', icon: 'edit_square' }

// style
const Container = styled.div`
  width: 980px;
  margin: 0 auto;
  padding: 120px 0 0;
`
const List = styled.ul`
  margin-top: 45px;
  li:not(:last-child) {
    margin-bottom: 30px;
  }
`
const FooterWrap = styled.div`
  padding: 100px 0 0;
`


export default function BlogList() {
  const [data, setData] = useState<ApiBlogType[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      const res = await getApi({ endpoint: 'blogs', queries: { orders: '-createdAt' }})
      if(res.contents) {
        setData(res.contents)
        setLoading(false)
      }
    }
    fetchData()
  }, []);

  const article: BlogType[] = data.map(val => { return {
    url: { pathname: '/blog/detail', query: { id: val.id } },
    title: val.title,
    date: dayjs(val.publishedAt).format('YYYY.MM.DD')
  } })

  const ListTag = loading ?
    <p>Now Loading...</p> :
    <List>{article.map((val, index) => <li key={index}><BlogCard {...val} /></li>)}</List>

  return (
    <>
      <Suspense>
        <Container>
          <Title {...title} />
          {ListTag}
        </Container>
        <FooterWrap>
          <Footer />
        </FooterWrap>
      </Suspense>
    </>
  );
}
