import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import Fonts from "../components/fonts"
import Layout from '../components/layouts/main'
import theme from "../libs/theme"
import './styles.css'

const Website = ({ Component, pageProps, router }) => {
	return (
		<ChakraProvider theme={theme}>
			<Fonts />
			<Layout router={router}>
				<AnimatePresence exitBeforeEnter initial={true}>
					<Component {...pageProps} key={router.route} />
				</AnimatePresence>
			</Layout>
		</ChakraProvider>
	)
}

export default Website