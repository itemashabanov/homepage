import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { GridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import thumbKassopttorg from '../public/images/contents/kassopttorg.png'
import thumbPkksc from '../public/images/contents/pkksc-main.png'
import thumbSpbkassa from '../public/images/contents/spb_kassa-main.png'
import thumbTangoPizza from '../public/images/contents/tango-main.png'
import thumbAgency from '../public/images/contents/thagency.png'

const Posts = () => (
    <Layout title="Posts">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Popular Posts
            </Heading>

            <Section delay={0.1}>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <GridItem
                        title="Software agency web site"
                        thumbnail={thumbAgency}
                        href="https://soft-dev-agency-a1ohg89ql-itemashabanov.vercel.app"
                    />
                    <GridItem
                        title="Online store selling cash registers"
                        thumbnail={thumbKassopttorg}
                        href="https://kassopttorg.ru"
                    />
                    <GridItem
                        title="Sport center's web site"
                        thumbnail={thumbPkksc}
                        href="https://github.com/itemashabanov"
                    />
                    <GridItem
                        title="Pizzeria web site"
                        thumbnail={thumbTangoPizza}
                        href="https://github.com/itemashabanov"
                    />
                    <GridItem
                        title="Online store selling cash registers"
                        thumbnail={thumbSpbkassa}
                        href="https://github.com/itemashabanov"
                    />
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)

export default Posts
