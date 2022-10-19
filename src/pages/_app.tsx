import type { AppProps } from 'next/app';
import Head from 'next/head'
import { Reset } from 'styled-reset'
import { GlobalStyle } from '../styles/GlobalStyles'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Linkr</title>
				<meta
					name="description"
					content="Social network for links"
				/>
				<link rel="icon" href="/linkr.svg" />
			</Head>
      <Reset />
      <GlobalStyle />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
