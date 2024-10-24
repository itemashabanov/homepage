import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Badge, Container, Link, List, ListItem } from "@chakra-ui/react"
import Layout from "../../components/layouts/article"
import P from "../../components/paragraph"
import { Meta, Title, WorkImage } from "../../components/work"

const Work = () => {
    return (
        <Layout title="thagency">
            <Container>
                <Title>
                    React Landing Page <Badge>2022</Badge>
                </Title>
                <P>
                    Just for fun
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://soft-dev-agency-app.vercel.app">
                        https://soft-dev-agency-app.vercel.app <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>All. It&apos;s web;)</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>HTML, TailwindCSS, React, NextJS</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/thagency.png" alt="React Landing Page" />
            </Container>
        </Layout>
    )
}

export default Work