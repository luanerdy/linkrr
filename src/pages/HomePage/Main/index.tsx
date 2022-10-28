import { StyledMain } from './styled';
import Post from '../../../components/Post';


export default function Main() {
	return (
		<StyledMain>
			<div className="container">
				<h1 className="title">timeline</h1>
				<div className="box-feed">
					<Post/>
				</div>
			</div>
		</StyledMain>
	);
}
