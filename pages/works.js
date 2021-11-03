import { Container, Heading, SimpleGrid } from "@chakra-ui/react"
import Section from "../components/section"
import { WorkGridItem } from "../components/grid-item"
import Layout from "../components/layouts/article"

import thumbTechstore from "../public/images/works/techstore.png"
import thumbDivua from "../public/images/works/divua.png"
import thumbSpbkassa from "../public/images/works/spbkassa.png"
import thumbKassopttorg from "../public/images/works/kassopttorg.png"

const Works = () => (
    <Layout title="Works">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>

            <SimpleGrid column={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="kassopttorg" title="kassopttorg.ru" thumbnail={thumbKassopttorg}>
                        Online store selling cash registers
                    </WorkGridItem>
                    <WorkGridItem id="divua" title="divua-cosmetic.ru" thumbnail={thumbDivua}>
                        Online cosmetics store
                    </WorkGridItem>
                    <WorkGridItem id="spb-kassa" title="spb-kassa.ru" thumbnail={thumbSpbkassa}>
                        Online store selling cash registers
                    </WorkGridItem>
                    <WorkGridItem id="techstore" title="TECHSTORE.lt" thumbnail={thumbTechstore}>
                        A online-shop of Apple&apos;s Devices 
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    </Layout>
)

export default Works