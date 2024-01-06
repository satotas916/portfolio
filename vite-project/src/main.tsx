import ReactDOM from 'react-dom/client'
import './assets/scss/common.scss'
import Footer from './features/footer/Footer.tsx'
import AboutContact from './features/about-contact/AboutContact.tsx'
import AboutBlog from './features/about-blog/AboutBlog.tsx'
import AboutProject from './features/about-project/AboutProject.tsx'
import AboutSkill from './features/about-skill/AboutSkill.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <AboutSkill />
    <AboutProject />
    <AboutBlog />
    <AboutContact />
    <Footer />
  </>,
)
