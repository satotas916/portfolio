import Image from 'next/image'
import styled from "styled-components"
import { theme } from "@/app/setting/style/common"
import TitleComponent from "@/app/components/Title/Title"
import { useState } from "react"
import { DelaGothicOne } from '@/app/utils/fonts'

const title = { title:'Portfolio', size: 'l', tag: 'h1', lead: 'Keisuke Sato' }
const nav = [
  {
    text: 'Blog',
    url: '#about-blog',
  },
  {
    text: 'Skill',
    url: '#about-skill',
  },
  {
    text: 'Project',
    url: '#about-project',
  },
]

// style
const Container = styled.div`
  text-align: center;
`
const ImageWrap = styled.div`
  position: relative;
  width: 167px;
  margin: 72px auto 0;
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  &.is-skill::before {
    background: url('/images/kv/me_hover_skill.svg');
  }
  &.is-project::before {
    background: url('/images/kv/me_hover_project.svg');
  }
  &.is-blog::before {
    background: url('/images/kv/me_hover_blog.svg');
  }
  img {
    width: 100%;
    vertical-align: bottom;
  }
`
const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ul {
    position: relative;
    width: 100%;
    height: 100%;
  }
`
const NavItem = styled.li`
  position: absolute;
  &::before {
    position: absolute;
    display: block;
    content: '';
    z-index: 3;
    pointer-events: none;
  }
  &.blog {
    top: -32px;
    right: -264px;
    &::before {
      top: 23px;
      right: 92px;
      width: 240px;
      height: 28px;
      background: url('/images/kv/me_border_blog.svg') center / contain no-repeat;
    }
  }
  &.project {
    top: 210px;
    left: -318px;
    &::before {
      left: 158px;
      bottom: 18px;
      width: 184px;
      height: 76px;
      background: url('/images/kv/me_border_project.svg') center / contain no-repeat;
    }
  }
  &.skill {
    top: 268px;
    right: -228px;
    &::before {
      right: 103px;
      bottom: 20px;
      width: 203px;
      height: 122px;
      background: url('/images/kv/me_border_skill.svg') center / contain no-repeat;
    }
  }
`
const NavLink = styled.a`
  position: relative;
  right: 0;
  display: inline-block;
  padding: 0 10px;
  font-size: 32px;
  line-height: 1.44;
  color: ${theme.colors.black};
  text-decoration: none;
  z-index: 2;
  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 14px;
    background: ${theme.colors.base};
    z-index: -1;
    transform:scale(1, 1);
  }
`

function Kv() {
  const [hoverVal, setHover] = useState('');
  return (
    <Container>
      <TitleComponent {...title} />
      <ImageWrap className={hoverVal ? `is-${hoverVal}` : ''}>
        <Image src="/images/kv/me.svg" width="167" height="446" alt="" priority={true} />
        <Nav>
          <ul>
            {nav.map((val, index) =>
              <NavItem
                key={index}
                className={val.text.toLowerCase()}
                onMouseEnter={() => setHover(val.text.toLowerCase())}
                onMouseLeave={() => setHover('')}
              >
                <NavLink href={val.url} className={DelaGothicOne.className}>{val.text}</NavLink>
              </NavItem>
            )}
          </ul>
        </Nav>
      </ImageWrap>
    </Container>
  )
}

export default Kv