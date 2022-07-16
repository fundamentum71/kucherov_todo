import NotionListItem from '../notionListItem/notionListItem';
import './notionList.scss';

const NotionList = ({ data, onDelete }) => {
	const element = data.map((item) => {
		const { id, ...itemProps } = item;
		return (
			<NotionListItem key={id} {...itemProps} onDelete={() => onDelete(id)} />
		);
	});

	return <ul className="notionList">{element}</ul>;
};

export default NotionList;
