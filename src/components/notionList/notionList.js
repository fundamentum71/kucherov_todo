import NotionListItem from '../notionListItem/notionListItem';
import './notionList.scss';

function NotionList() {
	return (
		<ul className="notionList">
			<NotionListItem />
			<NotionListItem />
			<NotionListItem />
			<NotionListItem />
			<NotionListItem />
		</ul>
	);
}

export default NotionList;
