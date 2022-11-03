import {
	Main,
	Slogan,
	SignIn,
	Input,
	Button,
	SignUp,
} from '../../modules/login/styled';
import { ThreeDots } from 'react-loader-spinner';
import { useState } from 'react';

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);

	async function authentication(e: any) {
		e.preventDefault();
		setLoading(!loading);
		alert('Infelizmente está função esta desabilitada');
	}

	return (
		<>
			<Main>
				<Slogan>
					<h1>linkr</h1>
					<h2>save, share and discover the best links on the web</h2>
				</Slogan>
				<SignIn onSubmit={authentication}>
					<Input
						type="email"
						placeholder="e-mail"
						name="email"
						onChange={(e) => setEmail(e.target.value)}
						value={email}
						required
					/>
					<Input
						type="password"
						placeholder="password"
						name="password"
						onChange={(e) => setPassword(e.target.value)}
						value={password}
						required
					/>
					{!loading ? (
						<Button type="submit">
							<p>Log In</p>
						</Button>
					) : (
						<Button disabled>
							<ThreeDots
								color="#FFFFFF"
								height={30}
								width={100}
							/>
						</Button>
					)}

					<SignUp>First time? Create an account!</SignUp>
				</SignIn>
			</Main>
		</>
	);
}
