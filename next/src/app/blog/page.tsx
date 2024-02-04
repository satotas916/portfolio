'use client'
import styled from 'styled-components'
import { theme } from "@/app/setting/style/common";
import '@/app/assets/scss/common.scss'
import Title from '@/app/components/Title/Title'
import Footer from '@/app/features/Footer/Footer'
import { useEffect, useState } from "react";
import { microcms } from "@/app/setting/micro-cms/cms";
import { useSearchParams } from 'next/navigation';
import dayjs from 'dayjs';

const title = { title:'Blog', icon: 'edit_square' }

// style
const Container = styled.div`
  width: 980px;
  margin: 0 auto;
  padding: 120px 0 0;
`
const Contents = styled.div`
  margin-top: 40px;
  padding: 60px;
  background: ${theme.colors.white};
`
const BlogDate = styled.span`
  display: block;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`
const BlogTitle = styled.h2`
  font-size: 30px;
  font-weight: bold;
  padding-bottom: 16px;
  border-bottom: 6px solid ${theme.colors.base};
  margin-bottom: 40px;
`
const FooterWrap = styled.div`
  padding: 100px 0 0;
`


export default function BlogList() {
  type dataType = {
    category: { id: string; createdAt: string; updatedAt: string; publishedAt: string; revisedAt: string; name: string; }
    content: string;
    createdAt: string;
    eyecatch: {url: string, height: number, width: number};
    id: string;
    publishedAt: string;
    revisedAt: string;
    title: string;
    updatedAt:string;
  };
  const [data, setData] = useState<dataType>([]);
  const queryId = useSearchParams().get('id')
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await microcms.get({ endpoint: 'blogs', contentId: queryId ? queryId : '' });
        console.log('response.contents');
        console.log(response);
        setData(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <Container>
        <Title {...title} />
        <Contents>
          <BlogDate>{dayjs(data.publishedAt).format('YYYY.MM.DD')}</BlogDate>
          <BlogTitle>{data.title}</BlogTitle>
          <div className='p-article' dangerouslySetInnerHTML={{ __html: `${data.content}` }} />
        </Contents>
      </Container>
      <FooterWrap>
        <Footer />
      </FooterWrap>
    </>
  );
}
