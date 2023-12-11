import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/scss/common.scss'
import Title from './components/title.tsx'
import Btn from './components/btn.tsx'

const title = { title:'Project', icon: 'terminal' }
const moreBtn = { text:'一覧を見る', url: '#' }

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Title {...title} />
    <Btn {...moreBtn} />
  </React.StrictMode>,
)
