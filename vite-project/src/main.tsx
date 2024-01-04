import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/scss/common.scss'
import Title from './components/title/Title.tsx'
import Button from './components/button/Button.tsx'
import Footer from './features/footer/Footer.tsx'
import ProjectCard from './components/project-card/ProjectCard.tsx'

const title = { title:'Project', icon: 'terminal' }
const moreBtn = { text:'一覧を見る', url: '#' }
const projectCard = {
  url: '#',
  image: 'https://placehold.jp/460x365.png',
  title: 'ポートフォリオサイト',
  text: `こちらのポートフォリオサイトの詳細になります。
  ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト.ダミーテキスト.ダミーテキスト.ダミーテキスト.ダミーテキスト.ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト.ダミーテキスト.ダミーテキスト.ダミーテキスト.ダミーテキスト.`,
  date: 10,
  time: 20,
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Title {...title} />
    <Button {...moreBtn} />
    <ProjectCard {...projectCard} />
    <Footer />
  </React.StrictMode>,
)
