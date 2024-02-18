'use client'
import styled from 'styled-components'
import { theme } from "@/app/setting/style/common";
import Title from '@/app/components/Title/Title'
import Footer from '@/app/features/Footer/Footer'
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation';
import dayjs from 'dayjs';
import { ApiBlogType } from '@/app/types/api';
import { getApi } from '@/app/utils/api';

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
  const [data, setData] = useState<ApiBlogType>();
  const queryId = useSearchParams().get('id')
  useEffect(() => {
    const fetchData = async () => {
      const res = await getApi({ endpoint: 'blogs', contentId: queryId ? queryId : ''})
      if(res) setData(res)
    }
    fetchData();
  });
  return (
    <>
      <Container>
        <Title {...title} />
        <Contents>
          <BlogDate>{dayjs(data?.publishedAt).format('YYYY.MM.DD')}</BlogDate>
          <BlogTitle>{data?.title}</BlogTitle>
          <div className='p-article' dangerouslySetInnerHTML={{ __html: `${data?.content}` }} />
        </Contents>
      </Container>
      <FooterWrap>
        <Footer />
      </FooterWrap>
    </>
  );
}
