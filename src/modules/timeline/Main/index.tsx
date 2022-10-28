import { StyledMain } from './styles';
import Post from '../../../components/Post';
import { NewPost } from '../NewPost'


export default function Main() {
	return (
		<StyledMain>
			<div className="container">
				<h1 className="title">timeline</h1>
				<div className="box-feed">
					<NewPost />
					<Post/>
				</div>
			</div>
		</StyledMain>
	);
}
