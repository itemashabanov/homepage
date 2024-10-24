import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import Navbar from "../navbar.js"
import NoSsr from '../no-ssr'
import VoxelToroto from '../voxel-toroto'

const Main = ({ children, router }) => {
	return (
		<Box as="main" pb={8}>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>Artsiom Shabanau</title>
			</Head>

			<Navbar path={router.asPath} />

			<Container maxW="container.md" pt={14}>
				<NoSsr>
					<VoxelToroto />
				</NoSsr>
				{children}
			</Container>
		</Box>
	)
}

export default Main