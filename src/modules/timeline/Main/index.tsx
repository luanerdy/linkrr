import { StyledMain } from './styles';
import Post from '../../../components/Post';
import { NewPost } from '../NewPost';
import postData from '../../Data/postData';

export default function Main() {
	return (
		<StyledMain>
			<div className="container">
				<h1 className="title">timeline</h1>
				<div className="box-feed">
					<NewPost />
					<Post 
						name={postData.name} 
						imageUser = {postData.imageUser}
						description = {postData.description}
						link = {postData.link}
					/>
				</div>
			</div>
		</StyledMain>
	);
}
