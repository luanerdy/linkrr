import { useState } from 'react';
import { StyledSignUp } from '../../modules/signup/styles';

export default function Signup() {
	const [habilitarCad, setHabilitarCad] = useState(false);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [picture, setPicture] = useState('');
	const [password, setPassword] = useState('');

	async function handleSubmitSignUp(e: any) {
		e.preventDefault();
		setHabilitarCad(!habilitarCad);

		alert(
			'Infelizmente a pagina de cadastro não foi concluida no back-end.'
		);
	}

	return (
		<StyledSignUp>
			<div className="box-logo">
				<h1>linkr</h1>
				<h2>save, share and discover the best links on the web</h2>
			</div>
			<div className="box-form">
				<form onSubmit={handleSubmitSignUp}>
					<input
						className="input-name"
						type="text"
						placeholder="Username"
						required
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<input
						className="input-email"
						type="email"
						placeholder="Email"
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						className="input-password"
						type="password"
						placeholder="password"
						required
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<input
						className="input-picture"
						type="url"
						placeholder="Picture URL"
						required
						value={picture}
						onChange={(e) => setPicture(e.target.value)}
					/>

					<button className="botao-input" type="submit">
						{habilitarCad ? 'Loading . . .' : 'SignUp'}
					</button>
				</form>

				<p className="link">Switch back to log in</p>
			</div>
		</StyledSignUp>
	);
}
