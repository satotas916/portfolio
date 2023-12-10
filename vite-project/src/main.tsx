import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/scss/common.scss'
import Title from './components/title.tsx'

const title = { title:'Project', icon: 'terminal' }

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Title {...title} />
  </React.StrictMode>,
)
