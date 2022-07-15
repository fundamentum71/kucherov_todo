import './notionListItem.scss';
import star from '../../resources/img/star.svg';
import trash from '../../resources/img/trash.svg';

function NotionListItem() {
	return (
		<li className="notionListItem">
			<div className="notionListItem__wpapper">
				<span>Notes</span>
				<button className="notionListItem__like">
					<img src={star} alt="like" />
				</button>
				<button className="notionListItem__trash">
					<img src={trash} alt="trash" />
				</button>
			</div>
		</li>
	);
}

export default NotionListItem;
