import { Badge, Container, List, ListItem } from "@chakra-ui/react"
import Layout from "../../components/layouts/article"
import P from "../../components/paragraph"
import { Meta, Title, WorkImage } from "../../components/work"

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'

import { FreeMode, Thumbs } from 'swiper/modules'

const Work = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    
    return (
        <Layout title="Tango Pizza">
            <Container>
                <Title>
                    Tango Pizza <Badge>2022</Badge>
                </Title>
                <P>
                    Pizzeria
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Work</Meta>
                        <span>Design</span>
                    </ListItem>
                </List>

                <Swiper
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className="mySwiper2"
        autoHeight={true}
        autoplay={true}
      >
              <SwiperSlide><WorkImage src="/images/works/pizza_main.jpg" alt="Tango Pizza" /></SwiperSlide>
      <SwiperSlide><WorkImage src="/images/works/pizza_menu.jpg" alt="Tango Pizza" /></SwiperSlide>
      <SwiperSlide><WorkImage src="/images/works/pizza_item-page.jpg" alt="Tango Pizza" /></SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={2.3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="mySwiper"
        autoHeight={true}
      >
              <SwiperSlide><WorkImage src="/images/works/pizza_main.jpg" alt="Tango Pizza" /></SwiperSlide>
      <SwiperSlide><WorkImage src="/images/works/pizza_menu.jpg" alt="Tango Pizza" /></SwiperSlide>
      <SwiperSlide><WorkImage src="/images/works/pizza_item-page.jpg" alt="Tango Pizza" /></SwiperSlide>
      </Swiper>
            </Container>
        </Layout>
    )
}

export default Work