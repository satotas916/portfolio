import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/scss/common.scss'
import Footer from './features/footer/Footer.tsx'
import AboutContact from './features/about-contact/AboutContact.tsx'
import AboutBlog from './features/about-blog/AboutBlog.tsx'
import AboutProject from './features/about-project/AboutProject.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <AboutProject />
    <AboutBlog />
    <AboutContact />
    <Footer />
  </>,
)
