'use client'
import styled from 'styled-components'
import { theme } from "@/app/setting/style/common";
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation';
import dayjs from 'dayjs';
import { ApiBlogType } from '@/app/types/api';
import { getApi } from '@/app/utils/api';

// style
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


export default function BlogContents() {
  const [data, setData] = useState<ApiBlogType>()
  const [loading, setLoading] = useState<boolean>(true)
  const queryId = useSearchParams().get('id')
  useEffect(() => {
    const fetchData = async () => {
      const res = await getApi({ endpoint: 'blogs', contentId: queryId ? queryId : ''})
      if(res) {
        setData(res)
        setLoading(false)
      }
    }
    fetchData();
  });

  const ContentsTag = loading ?
    <p>Now Loading...</p> :
    <>
      <BlogDate>{dayjs(data?.publishedAt).format('YYYY.MM.DD')}</BlogDate>
      <BlogTitle>{data?.title}</BlogTitle>
      <div className='p-article' dangerouslySetInnerHTML={{ __html: `${data?.content}` }} />
    </>

  return (
    <>
      {ContentsTag}
    </>
  );
}
