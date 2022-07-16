import './notionListItem.scss';
import star from '../../resources/img/star.svg';
import trash from '../../resources/img/trash.svg';

const NotionListItem = (props) => {
	const { title, text, important } = props;

	return (
		<li className="notionListItem">
			<div className="notionListItem__wpapper">
				<span>{title}</span>
				<div className="notionListItem__wpapper-inner">
					<button className="notionListItem__like">
						<img src={star} alt="like" />
					</button>
					<button className="notionListItem__trash">
						<img src={trash} alt="trash" />
					</button>
				</div>
			</div>
		</li>
	);
};

export default NotionListItem;
