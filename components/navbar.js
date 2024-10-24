import { HamburgerIcon } from "@chakra-ui/icons"
import {
    Box,
    Container,
    Flex,
    Heading,
    IconButton,
    Link,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Stack,
    useColorModeValue
} from "@chakra-ui/react"
import NextLink from "next/link"
import Logo from "./logo"
import ThemeToggleButton from "./theme-toggle-button"

const LinkItem = ({ href, path, _target, children, ...props }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', "whiteAlpha.900")
    
    return (
        <NextLink href={href} passHref>
            <Link p={2} bg={active ? "grassTeal" : undefined}
                color={active ? "#202023" : inactiveColor}
                _target={_target}
                {...props}
            >
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props
    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue("#ffffff40", "#20202380")}
            style={{backdropFilter:"blur(10px)"}}
            zIndex={3}
            {...props}>
                <Container display="flex" p={2} maxW="container.md" wrap="wrap" align="center" justify="space-between">
                    <Flex align="center" mr={5}>
                        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
                            <Logo />
                        </Heading>
                    </Flex>

                    <Stack
                        direction={{base: "column", md: "row"}}
                        display={{base: "none", md: "flex"}}
                        width={{base: "full", md: "auto"}}
                        alignItems="center"
                        flexGrow={1}
                        mt={{base: 4, md: 0}}
                    >
                        <LinkItem href="/works" path={path}>
                            Works
                        </LinkItem>
                        <LinkItem href="/posts" path={path}>
                            Posts
                        </LinkItem>
                    </Stack>

                    <Box flex={1} align="right">
                        <ThemeToggleButton />
                        <Box ml={2} display={{base: "inline-block", md: "none"}}>
                            <Menu isLazy id="navbar-menu">
                                <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" aria-label="Options" />
                                <MenuList>
                                    <NextLink href="/" passHref>
                                        <MenuItem as={Link}>About</MenuItem>
                                    </NextLink>
                                    <NextLink href="/works" passHref>
                                        <MenuItem as={Link}>Works</MenuItem>
                                    </NextLink>
                                    <NextLink href="/posts" passHref>
                                        <MenuItem as={Link}>Posts</MenuItem>
                                    </NextLink>
                                </MenuList>
                            </Menu>
                        </Box>
                    </Box>
                </Container>
            </Box>
    )
}

export default Navbar