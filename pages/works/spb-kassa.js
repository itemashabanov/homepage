import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/work"
import P from "../../components/paragraph"
import Layout from "../../components/layouts/article"

const Work = () => {
    return (
        <Layout title="spbkassa">
            <Container>
                <Title>
                    SPB-KASSA <Badge>2012</Badge>
                </Title>
                <P>
                    Online store selling cash registers
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://spb-kassa.ru/">
                            https://spb-kassa.ru/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>All. It&apos;s web;)</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>HTML, CSS and few JS with PHP</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/spbkassa.png" alt="spbkassa" />
            </Container>
        </Layout>
    )
}

export default Work