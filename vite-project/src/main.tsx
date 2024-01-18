import ReactDOM from 'react-dom/client'
import './assets/scss/common.scss'
import Kv from './features/kv/Kv.tsx'
import AboutSkill from './features/about-skill/AboutSkill.tsx'
import AboutProject from './features/about-project/AboutProject.tsx'
import AboutBlog from './features/about-blog/AboutBlog.tsx'
import AboutContact from './features/about-contact/AboutContact.tsx'
import Footer from './features/footer/Footer.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <Kv />
    <AboutSkill />
    <AboutProject />
    <AboutBlog />
    <AboutContact />
    <Footer />
  </>,
)
