import { useEffect, useRef, useState } from "react";
import { theme } from "@/app/setting/style/common";
import styled from "styled-components";
import { getApi } from "@/app/utils/api";
import { ApiProjectType } from "@/app/types/api";
import Title from "@/app/components/Title/Title";
import ProjectCard from "@/app/components/ProjectCard/ProjectCard";

// swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";
import SwiperType from "swiper";

export interface ProjectType {
  url: string;
  title: string;
  image: string;
  text?: string;
}

const title = { title:'Project', icon: 'terminal' }

// style
const Container = styled.div``
const List = styled.div`
  position: relative;
  margin-top: 45px;
  .swiper {
    margin: 0 80px;
    padding: 0 12px 12px 0;
  }
`
const navigation = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 64px;
  color: ${theme.colors.base};
  font-weight: 200;
  z-index: 100;
  transition: opacity 0.2s ease, right 0.2s ease, left 0.2s ease;
  &:disabled {
    opacity: 0.3;
  }
`
const Next = styled(navigation)`
  right: 0;
  &:hover {
    right: -6px;
  }
  &:disabled {
    right: 0;
  }
`
const Prev = styled(navigation)`
  left: 0;
  &:hover {
    left: -6px;
  }
  &:disabled {
    left: 0;
  }
`
const ButtonWrap = styled.div`
  margin-top: 40px;
  text-align: right;
`

function AboutProject() {
  const swiperRef: React.MutableRefObject<SwiperType | undefined> = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const [data, setData] = useState<ApiProjectType[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      const res = await getApi({ endpoint: 'project', queries: { limit: 3 }})
      if(res.contents) {
        setData(res.contents)
        setLoading(false)
      }
    }
    fetchData()
  }, []);

  const projects: ProjectType[] = data.map(val => { return {
    url: val.url,
    title: val.title,
    image: val.kv.url,
    text: val.contents,
  } })

  const listItems = loading ?
    <p>Now Loading...</p> :
    <>{projects.map((val, index) =><><SwiperSlide key={index}><ProjectCard {...val} /></SwiperSlide></>)}</>

  const updateActiveIndex = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex);
  };
  return (
    <Container id="about-project">
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
    </Container>
  )
}

export default AboutProject