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
                            Artsiom Shabanau
                        </Heading>
                        <p>Front End Engineer</p>
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
                        I am a front-end developer with more than 4 years of experience.
                    </Paragraph>
                    <Paragraph>
                    I can work both independently and in a team. I have experience developing projects from scratch, as well as experience in
supporting and finalizing ready-made solutions. I can easily find a common language with people and delegate tasks, analyze
solutions and choose the most suitable one for the product. I am accustomed to effectively managing and prioritizing tasks,
ensuring timely delivery and meeting project deadlines.
                    </Paragraph>
                    <Paragraph>
                    As a developer, I have actively contributed to the implementation of user interfaces and features, and managing tasks throughout
all stages of the web application evelopment process, collaborating closely with other developers to ensure high-quality code and
adherence to best practices.
                    </Paragraph>
                    <Paragraph>
                    In unclear situations, I see an opportunity to figure out a solution and thereby learn something new.
                    </Paragraph>
                    <Paragraph>
                    I seek work situations where I can apply my current experience and gain new skills.
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
                        Graduated from high school and enrolled at Minsk Innovation University to study Information Technology.
                    </BioSection>
                    <BioSection>
                        <BioYear>2019</BioYear>
                        Continued my studies to obtain a master&apos;s degree.
                    </BioSection>
                    <BioSection>
                        <BioYear>2019 to 2022</BioYear>
                        Worked as a Front End Developer at Kassopttorg.
                    </BioSection>
                    <BioSection>
                        <BioYear>2022 to 2023</BioYear>
                        Worked as a JavaScript Developer at Softeq.
                    </BioSection>
                    <BioSection>
                        <BioYear>2023 to present</BioYear>
                        Contract with the leading UK-based open-banking platform.
                    </BioSection>
                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Experience
                    </Heading>
                    <BioYear>2019 to 2022</BioYear>
                    Front End Developer at Kassopttorg.
                    <Paragraph>
                    I was engaged in the development and support of an online shop and my work included:<br />
- increasing the number of visitors and visits to the site by 4 times<br />
- accelerating site loading by 3 times<br />
- automating the process of registering cash register equipment, which reduced the load on managers (~20% of time spent)<br />
- developing modules for product comments, reviews, product rating, product configurator, authentication via sms and other
modules<br />
- implementing third-party solutions (payment, delivery, search)<br />
- gaining experience in managing subcontractors (designers, backend specialists)<br />
I had the chance to work with element animation tools, such as GSAP. It was an interesting experience to participate in the
development of a large project from the very first stages.
                    </Paragraph>
                    <br />
                    <BioYear>2022 to 2023</BioYear>
                    JavaScript Developer at Softeq.
                    <Paragraph>
                    In this job I developed new features and components on 3 different projects using React and Angular. In particular, I:<br />
- developed an employee management system<br />
- participated in the development of a day off management application for employees<br />
- participated in the development of an application for booking a workspace in the office<br />
- implemented metrics to analyse user actions<br />
- integrated third-party services<br />
- developed layout emails, and onboarded new employees<br />
Working in a multinational company and on several different projects at the same time proved to be a great experience.
                    </Paragraph>
                    <br />
                    <BioYear>2023 to present</BioYear>
                    Software Engineer
                    <Paragraph>
                    During the current period, I worked on projects of different complexity: from creating simple web applications on Vue.js, to large
web applications with complex logic. Moreover, I was engaged in:<br />
- implemented localisation for the project in 5 languages, with all related sub-tasks such as routing, seo, etc.<br />
- wrote documentation for projects, which positively influenced the speed of onboarding of new employees and their
familiarisation with internal libraries.<br />
- participated in the development of utility libraries, assemblies, for use in other projects of the company, which allowed to adhere
to the DRY principle on several projects.<br />
- updated the project to the current version of angular and dependencies.<br />
- implemented Angular Universal(SSR) on a project.<br />
- direct interaction with customers, subcontractors<br />
- analysis of requirements<br />
- the drawing up a development plan<br />
The most interesting project I found particularly rewarding is a full-fledged online booking system. In this project technologies such
as React, Next.js, TailwindCSS and others were used.
                    </Paragraph>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        I ❤️
                    </Heading>
                    <Paragraph>
                    I’m passionate about capturing the world through the lens, exploring new places, and embracing creativity. Photography is my way of telling stories, while traveling allows me to find new inspiration in every corner of the globe. When I’m not behind the camera, you’ll find me swimming, building with Lego, or diving into the latest tech trends. My diverse interests fuel my creative process, and I’m always eager to learn and innovate in everything I do.
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
                            href="/works/tango-pizza"
                            title="tangopizza"
                            thumbnail={thumbTangoPizza}
                        >
                            Pizzeria web site
                        </GridItem>
                        <GridItem
                            href="/works/spb-kassa"
                            title="spb-kassa.ru"
                            thumbnail={thumbSpbkassa}
                        >
                            Online store selling cash registers
                        </GridItem>

                        <GridItem
                            href="/works/pkksc"
                            title="PKKSC"
                            thumbnail={thumbPkksc}
                        >
                            Sport center&apos;s web site
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
