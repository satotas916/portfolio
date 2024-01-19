import styled from "styled-components";
import { theme } from "../../setting/style/common";
import TitleComponent from "../../components/title/Title";
import meImage from "../../assets/images/kv/me.svg";
import meImageHoverSkill from "../../assets/images/kv/me_hover_skill.svg";
import meImageHoverProject from "../../assets/images/kv/me_hover_project.svg";
import meImageHoverBlog from "../../assets/images/kv/me_hover_blog.svg";
import meImageBorderSkill from "../../assets/images/kv/me_border_skill.svg";
import meImageBorderProject from "../../assets/images/kv/me_border_project.svg";
import meImageBorderBlog from "../../assets/images/kv/me_border_blog.svg";
import { useState } from "react";

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
const Image = styled.div`
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
    background: url(${meImageHoverSkill});
  }
  &.is-project::before {
    background: url(${meImageHoverProject});
  }
  &.is-blog::before {
    background: url(${meImageHoverBlog});
  }
  img {
    width: 100%;
    height: auto;
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
      background: url(${meImageBorderBlog}) center / contain no-repeat;
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
      background: url(${meImageBorderProject}) center / contain no-repeat;
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
      background: url(${meImageBorderSkill}) center / contain no-repeat;
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
  font-family: ${theme.fonts.DelaGothicOne};
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
      <Image className={hoverVal ? `is-${hoverVal}` : ''}>
        <img src={meImage} alt="" />
        <Nav>
          <ul>
            {nav.map((val, index) =>
              <NavItem
                key={index}
                className={val.text.toLowerCase()}
                onMouseEnter={() => setHover(val.text.toLowerCase())}
                onMouseLeave={() => setHover('')}
              >
                <NavLink href={val.url}>{val.text}</NavLink>
              </NavItem>
            )}
          </ul>
        </Nav>
      </Image>
    </Container>
  )
}

export default Kv