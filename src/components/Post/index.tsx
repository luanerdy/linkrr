import { StyledPost } from './styles';

export default function Post(props: any) {
	const { name, imageUser, description, link } = props;
	return (
		<StyledPost>
			<div className="container">
				<img
					className="image-user"
					src={imageUser}
					alt="Imagem do usuario"
				/>
				<div className="box-description">
					<p className="name-user">{name}</p>
					<p className="description">{description}</p>
					<div className="link-box">
						<a href={link}>{'Link'}</a>
					</div>
				</div>
			</div>
		</StyledPost>
	);
}
