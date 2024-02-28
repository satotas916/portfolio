'use client'
import styled from 'styled-components'
import { theme } from "@/app/setting/style/common";
import Title from '@/app/components/Title/Title'
import Footer from '@/app/features/Footer/Footer'
import { Suspense } from "react";
import BlogContents from '@/app/features/BlogContents/BlogContents';

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
const FooterWrap = styled.div`
  padding: 100px 0 0;
`


export default function BlogDetail() {
  return (
    <>
      <Suspense>
        <Container>
          <Title {...title} />
          <Contents>
            <Suspense>
              <BlogContents />
            </Suspense>
          </Contents>
        </Container>
        <FooterWrap>
          <Footer />
        </FooterWrap>
      </Suspense>
    </>
  );
}
