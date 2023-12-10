import { ChevronRightIcon } from '@chakra-ui/icons'
import {
    Box,
    Button,
    Container,
    Heading,
    Icon,
    Image,
    Link,
    List,
    ListItem,
    SimpleGrid,
    useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5'
import { BioSection, BioYear } from '../components/bio'
import { GridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import thumbKassopttorg from '../public/images/links/kassopttorg.png'
import thumbPkksc from '../public/images/links/pkksc-main.png'
import thumbSpbkassa from '../public/images/links/spb_kassa-main.png'
import thumbTangoPizza from '../public/images/links/tango-main.png'
import thumbAgency from '../public/images/links/thagency.png'

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box
                    borderRadius="lg"
                    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                    p={3}
                    mb={6}
                    align="center"
                >
                    Hello, I&apos;m Artem!
                </Box>

                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Artem Shabanov
                        </Heading>
                        <p>FrontEnd Developer</p>
                    </Box>
                    <Box
                        flexShrink={0}
                        mt={{ base: 4, md: 0 }}
                        ml={{ md: 6 }}
                        align="center"
                    >
                        <Image
                            borderColor="whiteAlpha.800"
                            borderWidth={2}
                            borderStyle="solid"
                            maxWidth="100px"
                            display="inline-block"
                            borderRadius="full"
                            src="/images/artem.jpeg"
                            alt="Profile image"
                        />
                    </Box>
                </Box>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Summury
                    </Heading>
                    <Paragraph>
                        Motivated and dedicated front-end developer with over 3
                        years of professional experience in the field. Qualified
                        in Angular, React and Vue.js.
                    </Paragraph>
                    <Paragraph>
                        As a developer, I have actively contributed to the
                        implementation of user interfaces and features, and
                        managing tasks throughout all stages of the web
                        application development process, collaborating closely
                        with other developers to ensure high-quality code and
                        adherence to best practices. I possess a solid
                        understanding of front-end development principles and
                        have a keen eye for detail when it comes to creating
                        visually appealing and responsive user interfaces.
                    </Paragraph>
                    <Paragraph>
                        During my time in the industry, I have gained valuable
                        experience working in Agile environments, particularly
                        with Kanban. I am accustomed to effectively managing and
                        prioritizing tasks, ensuring timely delivery and meeting
                        project deadlines. I am also proactive in my approach to
                        problem-solving, continuously seeking opportunities to
                        learn and grow as a developer.
                    </Paragraph>
                    <Paragraph>
                        Overall, I am eager to contribute to challenging
                        projects and expand my skill set further. I am
                        passionate about delivering user-centric web
                        applications that provide seamless experiences. I am
                        seeking opportunities to work in a collaborative
                        environment where I can learn from experienced
                        professionals and make meaningful contributions to
                        innovative projects.
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button
                                rightIcon={<ChevronRightIcon />}
                                colorScheme="teal"
                            >
                                My Portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>1998</BioYear>
                        Born in LA(in my dreams), California.
                    </BioSection>
                    <BioSection>
                        <BioYear>2004</BioYear>
                        School.
                    </BioSection>
                    <BioSection>
                        <BioYear>2015</BioYear>
                        Graduated from high school and went to Minsk Innovation
                        University to study information technology.
                    </BioSection>
                    <BioSection>
                        <BioYear>2019</BioYear>
                        Continued my studies to obtain a master`&apos;`s degree.
                    </BioSection>
                    <BioSection>
                        <BioYear>2019 to 2022</BioYear>
                        Worked as a FrontEnd developer at Kassopttorg.
                    </BioSection>
                    <BioSection>
                        <BioYear>2022 to 2023</BioYear>
                        Worked as a JavaScript developer at Softeq.
                    </BioSection>
                    <BioSection>
                        <BioYear>2023 to present</BioYear>
                        Took my time for traveling and self-education.
                    </BioSection>
                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Experience
                    </Heading>
                    <BioYear>2019 to 2022</BioYear>
                    FrontEnd developer at Kassopttorg.
                    <Paragraph>
                        During the period of work in this company, I was engaged
                        in the development and support of an online shop. I had
                        the opportunity to write various modules such as
                        registration, authorisation, comments and rating module
                        for products, various components of product
                        customisation and integrations with third-party
                        services. I had a chance to work with element animation
                        tools, such as GSAP. It was an interesting experience to
                        participate in the development of a large project from
                        the very first stages.
                    </Paragraph>
                    <br />
                    <BioYear>2022 to 2023</BioYear>
                    JavaScript developer at Softeq.
                    <Paragraph>
                        In this job I have been developing new features and
                        components on 3 different projects using React and
                        Angular. These were projects such as employee management
                        systems, booking systems. In the process of work I had
                        to create additional functionality and refine the
                        current one, create new modules, communicate with all
                        team members (about 20 people) to achieve the best
                        result. It was a great experience working in a
                        multinational company and on several different projects
                        at the same time.
                    </Paragraph>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        I ❤️
                    </Heading>
                    <Paragraph>
                        Programming, photography, traveling, playing pool,
                        driving.
                    </Paragraph>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        On the web
                    </Heading>
                    <List>
                        <ListItem>
                            <Link
                                href="https://www.linkedin.com/in/temashabanov/"
                                target="_blank"
                            >
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<Icon as={IoLogoLinkedin} />}
                                >
                                    temashabanov
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link
                                href="https://github.com/itemashabanov"
                                target="_blank"
                            >
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<Icon as={IoLogoGithub} />}
                                >
                                    @itemashabanov
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link
                                href="https://instagram.com/temashabanov"
                                target="_blank"
                            >
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<Icon as={IoLogoInstagram} />}
                                >
                                    @temashabanov
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                    <SimpleGrid columns={[1, 2, 2]} gap={6} mt={6}>
                        <GridItem
                            href="https://soft-dev-agency-a1ohg89ql-itemashabanov.vercel.app"
                            title="TH-agency"
                            thumbnail={thumbAgency}
                        >
                            Software agency web site
                        </GridItem>
                        <GridItem
                            href="https://kassopttorg.ru"
                            title="kassopttorg.ru"
                            thumbnail={thumbKassopttorg}
                        >
                            Online store selling cash registers
                        </GridItem>
                        <GridItem
                            href="https://github.com/itemashabanov"
                            title="tangopizza"
                            thumbnail={thumbTangoPizza}
                        >
                            Pizzeria web site
                        </GridItem>
                        <GridItem
                            href="https://github.com/itemashabanov"
                            title="spb-kassa.ru"
                            thumbnail={thumbSpbkassa}
                        >
                            Online store selling cash registers
                        </GridItem>

                        <GridItem
                            href="https://github.com/itemashabanov"
                            title="PKKSC"
                            thumbnail={thumbPkksc}
                        >
                            Sport center`&apos;`s web site
                        </GridItem>
                    </SimpleGrid>

                    <Box align="center" my={4}>
                        <NextLink href="/posts">
                            <Button
                                rightIcon={<ChevronRightIcon />}
                                colorScheme="teal"
                            >
                                Popular posts
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page
