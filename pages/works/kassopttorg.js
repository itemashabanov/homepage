import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/work"
import P from "../../components/paragraph"
import Layout from "../../components/layouts/article"

const Work = () => {
    return (
        <Layout title="Kassopttorg">
            <Container>
                <Title>
                    Kassopttorg <Badge>2017</Badge>
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
                        <span>HTML, CSS, JS, jQuery, PHP, 1C-Bitrix.</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/kassopttorg.png" alt="kassopttorg" />
            </Container>
        </Layout>
    )
}

export default Work