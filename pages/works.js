import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import thumbKassopttorg from '../public/images/works/kassopttorg.png'
import thumbPkksc from '../public/images/works/pkksc-main.png'
import thumbSpbkassa from '../public/images/works/spb_kassa-main.png'
import thumbTangoPizza from '../public/images/works/tango-main.png'
import thumbAgency from '../public/images/works/thagency.png'

const Works = () => (
    <Layout title="Works">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>

            <SimpleGrid column={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem
                        id="thagency"
                        title="https://soft-dev-agency-a1ohg89ql-itemashabanov.vercel.app"
                        thumbnail={thumbAgency}
                    >
                        Software agency web site
                    </WorkGridItem>
                    <WorkGridItem
                        id="kassopttorg"
                        title="kassopttorg.ru"
                        thumbnail={thumbKassopttorg}
                    >
                        Online store selling cash registers
                    </WorkGridItem>
                    <WorkGridItem
                        id="pkksc"
                        title="https://github.com/itemashabanov"
                        thumbnail={thumbPkksc}
                    >
                        Sport center`&apos;`s web site
                    </WorkGridItem>
                    <WorkGridItem
                        id="tangopizza"
                        title="https://github.com/itemashabanov"
                        thumbnail={thumbTangoPizza}
                    >
                        Pizzeria web site
                    </WorkGridItem>
                    <WorkGridItem
                        id="spb-kassa"
                        title="https://github.com/itemashabanov"
                        thumbnail={thumbSpbkassa}
                    >
                        Online store selling cash registers
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    </Layout>
)

export default Works
