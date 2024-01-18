import { useRef, useState } from "react";
import styled from "styled-components";
import Title from "../../components/title/Title";
import Button from "../../components/button/Button";
import ProjectCard from "../../components/project-card/ProjectCard";

// swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";
import SwiperType from "swiper";


const title = { title:'Project', icon: 'terminal' }
const projects = [
  {
    url: '#',
    image: 'https://placehold.jp/460x365.png',
    title: 'ポートフォリオサイト1',
    text: `こちらのポートフォリオサイトの詳細になります。`,
    date: 10,
    time: 20
  },
  {
    url: '#',
    image: 'https://placehold.jp/460x365.png',
    title: 'ポートフォリオサイト2',
    text: `こちらのポートフォリオサイトの詳細になります。
    ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト.ダミーテキスト.ダミーテキスト.ダミーテキスト.ダミーテキスト.ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト.ダミーテキスト.ダミーテキスト.ダミーテキスト.ダミーテキスト.`,
    date: 10,
    time: 20
  },
  {
    url: '#',
    image: 'https://placehold.jp/460x365.png',
    title: 'ポートフォリオサイト3',
    text: `こちらのポートフォリオサイトの詳細になります。
    ダミーテキストダミーテキスト`,
    date: 10,
    time: 20
  }
]
const moreBtn = { text:'一覧を見る', url: '#' }

// style
const Container = styled.div`
  width: 980px;
  margin: 0 auto;
`
const List = styled.div`
  position: relative;
  margin-top: 45px;
  .swiper {
    width: 820px;
    margin: 0 auto;
    padding: 0 12px 12px 0;
  }
`
const navigation = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 64px;
  color: #1c1b1f;
  font-weight: 200;
  z-index: 100;
  transition: opacity 0.2s ease;
  &:disabled {
    opacity: 0.5;
  }
`
const Next = styled(navigation)`
  right: 0;
`
const Prev = styled(navigation)`
  left: 0;
`
const ButtonWrap = styled.div`
  margin-top: 40px;
  text-align: right;
`

const listItems = projects.map((val, index) =>
  <SwiperSlide key={index}><ProjectCard {...val} /></SwiperSlide>
);

function AboutProject() {
  const swiperRef: React.MutableRefObject<SwiperType | undefined> = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveIndex = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex);
  };
  return (
    <Container>
      <Title {...title} />
      <List>
        <Swiper
          slidesPerView={1}
          spaceBetween={60}
          modules={[EffectCreative]}
          effect="fade"
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChangeTransitionEnd={updateActiveIndex}
        >
          {listItems}
        </Swiper>
        <Prev
          className="material-symbols-outlined"
          onClick={() => swiperRef.current?.slidePrev()}
          disabled={activeIndex === 0}
        >
          arrow_circle_left
        </Prev>
        <Next
          className="material-symbols-outlined"
          onClick={() => swiperRef.current?.slideNext()}
          disabled={activeIndex === projects.length - 1}
        >
          arrow_circle_right
        </Next>
      </List>
      <ButtonWrap>
        <Button {...moreBtn} />
      </ButtonWrap>
    </Container>
  )
}

export default AboutProject