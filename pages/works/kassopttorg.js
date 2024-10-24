import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Badge, Container, Link, List, ListItem } from "@chakra-ui/react"
import Layout from "../../components/layouts/article"
import P from "../../components/paragraph"
import { Meta, Title, WorkImage } from "../../components/work"

const Work = () => {
    return (
        <Layout title="Kassopttorg">
            <Container>
                <Title>
                    Kassopttorg <Badge>2019</Badge>
                </Title>
                <P>
                    Online store selling cash registers
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://kassopttorg.ru/">
                            https://kassopttorg.ru/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>All. It&apos;s web;)</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>HTML, CSS, JS, GSAP, PHP</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/kassopttorg.png" alt="kassopttorg" />
            </Container>
        </Layout>
    )
}

export default Work