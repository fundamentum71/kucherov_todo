import NotionListItem from '../notionListItem/notionListItem';
import './notionList.scss';

const NotionList = ({ data, onDelete, onToggleProp, onActive }) => {
	const element = data.map((item) => {
		const { id, ...itemProps } = item;
		return (
			<NotionListItem
				key={id}
				{...itemProps}
				onDelete={() => onDelete(id)}
				onActive={() => onActive(id)}
				onToggleProp={(e) =>
					onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))
				}
			/>
		);
	});

	return <ul className="notionList">{element}</ul>;
};

export default NotionList;
