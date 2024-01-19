import styled from 'styled-components'
import Kv from '../features/kv/Kv.tsx'
import AboutSkill from '../features/about-skill/AboutSkill.tsx'
import AboutProject from '../features/about-project/AboutProject.tsx'
import AboutBlog from '../features/about-blog/AboutBlog.tsx'
import AboutContact from '../features/about-contact/AboutContact.tsx'
import Footer from '../features/footer/Footer.tsx'

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

function Top() {
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
  )
}

export default Top