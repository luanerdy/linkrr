import { StyledHeader } from './styled';
import { useState } from 'react';
//Redix
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

export default function Header(props: any) {
	const [pesquisa, setPesquisa] = useState('');

	return (
		<StyledHeader>
			<div className="container">
				<h1>linkr</h1>
				<input
					className="input-pesquisa"
					type="text"
					placeholder="Buscar"
					value={pesquisa}
					onChange={(e) => setPesquisa(e.target.value)}
				/>
				<div className="user">

				</div>
			</div>
		</StyledHeader>
	);
}
