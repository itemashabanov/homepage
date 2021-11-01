import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/work"
import P from "../../components/paragraph"
import Layout from "../../components/layouts/article"

const Work = () => {
    return (
        <Layout title="Techstore">
            <Container>
                <Title>
                    TechStore <Badge>2020</Badge>
                </Title>
                <P>
                    A online-store of Apple&apos;s devices.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://techstore.lt/">
                            https://techstore.lt/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>All. It&apos;s web;)</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Now is just HTML, CSS and few JS. Soon will be MMMMMORE better!</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/techstore_01.png" alt="Techstore" />
            </Container>
        </Layout>
    )
}

export default Work