import NextLink from "next/link"
import {
	Box, 
	Button, 
	Container, 
	Heading, 
	Image, 
	SimpleGrid,
	List,
	ListItem,
	Link, 
	Icon,
	useColorModeValue
} from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"
import Layout from "../components/layouts/article"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { BioSection, BioYear } from "../components/bio"
import { GridItem } from "../components/grid-item"
import {
	IoLogoInstagram,
	IoLogoGithub
} from "react-icons/io5"
import thumbTechstore from "../public/images/links/techstore.png"

const Page = () => {
	return (
		<Layout>
			<Container>
				<Box borderRadius="lg" bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")} p={3} mb={6} align="center">
					Hello, I&apos;m Artem!
				</Box>
				
				<Box display={{md:"flex"}}>
					<Box flexGrow={1}>
						<Heading as="h2" variant="page-title">
							Artem Shabanov
						</Heading>
						<p>Businessman / founder of THECSTORE.lt / developer</p>
					</Box>
					<Box flexShrink={0} mt={{base:4, md:0}} ml={{md:6}} align="center">
						<Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/artem.jpeg" alt="Profile image" />
					</Box>
				</Box>

				<Section delay={0.1}>
					<Heading as="h3" variant="section-title">
						Work
					</Heading>
					<Paragraph>
						Artem Shabanov is a businessman, first of all, and
						<NextLink href="https://techstore.lt">
							<Link> TECHSTORE.lt </Link>
						</NextLink>
						is his store, you know. And, by the way, he is a front-end developer. Likes dogs, cats and some pets, listen to music when drive car. Well, he just dude, like Big Lebovsky, but he hasn&apos;t your money and please, don&apos;t steal his carpet.
					</Paragraph>
					<Box align="center" my={4}>
						<NextLink href="/works">
							<Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
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
						Started at school.
					</BioSection>
					<BioSection>
						<BioYear>2015</BioYear>
						Finished school and entered bachelor&apos;s degree at Minsk Innovation University on Information technology software.
					</BioSection>
					<BioSection>
						<BioYear>2019</BioYear>
						Entered master&apos;s degree at Minsk Innovation University on Informatics and programming technologies.
					</BioSection>
					<BioSection>
						<BioYear>2019 to present</BioYear>
						Works as a freelancer.
					</BioSection>
				</Section>

				<Section delay={0.3}>
					<Heading as="h3" variant="section-title">
						I ❤️
					</Heading>
					<Paragraph>
						Basketball, pool, swim, coding, driving, business, talking with cool and interests people.
					</Paragraph>
				</Section>

				<Section delay={0.3}>
					<Heading as="h3" variant="section-title">
						On the web
					</Heading>
					<List>
						<ListItem>
							<Link href="https://github.com/itemashabanov" target="_blank">
								<Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>
									@itemashabanov
								</Button>
							</Link>
						</ListItem>
						<ListItem>
							<Link href="https://instagram.com/temashabanov" target="_blank">
								<Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoInstagram} />}>
									@temashabanov
								</Button>
							</Link>
						</ListItem>
					</List>
					<SimpleGrid columns={[1, 2, 2]} gap={6} mt={6}>
						<GridItem
							href="https://techstore.lt"
							title="TECHSTORE.lt"
							thumbnail={thumbTechstore}
						>
							My online-shop of Apple&apos;s devices
						</GridItem>
					</SimpleGrid>

					<Box align="center" my={4}>
						<NextLink href="/posts">
							<Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
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