import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbTechstore from '../public/images/contents/techstore.png'
import thumbDivua from '../public/images/contents/divua.png'
import thumbKassopttorg from '../public/images/contents/kassopttorg.png'
import thumbSpbkassa from '../public/images/contents/spbkassa.png'

const Posts = () => (
    <Layout title="Posts">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Popular Posts
            </Heading>

            <Section delay={0.1}>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <GridItem
                        title="Online store selling cash registers"
                        thumbnail={thumbKassopttorg}
                        href="https://kassopttorg.ru"
                    />
                     <GridItem
                        title="Online cosmetics store"
                        thumbnail={thumbDivua}
                        href="https://divua-cosmetic.ru"
                    />
                    <GridItem
                        title="Online store selling cash registers"
                        thumbnail={thumbSpbkassa}
                        href="https://spb-kassa.ru"
                    />
                    <GridItem
                        title="My online-store of Apple&apos;s devices"
                        thumbnail={thumbTechstore}
                        href="https://techstore.lt/"
                    />
                </SimpleGrid>
            </Section>
        </Container>
  </Layout>
)

export default Posts