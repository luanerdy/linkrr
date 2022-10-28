import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Reset } from 'styled-reset';
import { GlobalStyle } from '../styles/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Linkr</title>
				<meta name="description" content="Social network for links" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Oswald:wght@700&family=Passion+One&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<Reset />
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
