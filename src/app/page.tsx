'use client'
import styled from 'styled-components'
import Kv from '@/app/features/Kv/Kv'
import AboutSkill from '@/app/features/AboutSkill/AboutSkill'
import AboutProject from '@/app/features/AboutProject/AboutProject'
import AboutBlog from '@/app/features/AboutBlog/AboutBlog'
import AboutContact from '@/app/features/AboutContact/AboutContact'
import Footer from '@/app/features/Footer/Footer'

// style
const Container = styled.div`
  width: 980px;
  margin: 0 auto;
`
const KvWrap = styled.div`
  padding: 96px 0 0;
`
const Wrap = styled.div`
  margin: 90px 0 0;
`
const SkillWrap = styled(Wrap)``
const ProjectWrap = styled(Wrap)``
const BlogWrap = styled(Wrap)``

const ContactWrap = styled.div`
  margin: 100px 0 0;
`
const FooterWrap = styled.div`
  padding: 100px 0 0;
`

export default function Home() {
  return (
    <>
      <Container>
        <KvWrap>
          <Kv />
        </KvWrap>
        <SkillWrap>
          <AboutSkill />
        </SkillWrap>
        <ProjectWrap>
          <AboutProject />
        </ProjectWrap>
        <BlogWrap>
          <AboutBlog />
        </BlogWrap>
        <ContactWrap>
          <AboutContact />
        </ContactWrap>
      </Container>
      <FooterWrap>
        <Footer />
      </FooterWrap>
    </>
  );
}
