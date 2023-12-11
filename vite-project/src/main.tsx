import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/scss/common.scss'
import Title from './components/title/title.tsx'
import Button from './components/button/Button.tsx'

const title = { title:'Project', icon: 'terminal' }
const moreBtn = { text:'一覧を見る', url: '#' }

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Title {...title} />
    <Button {...moreBtn} />
  </React.StrictMode>,
)
