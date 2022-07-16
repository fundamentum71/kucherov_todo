import NotionListItem from '../notionListItem/notionListItem';
import './notionList.scss';

const NotionList = ({ data }) => {
	const element = data.map((item) => {
		const { id, ...itemProps } = item;
		return <NotionListItem key={id} {...itemProps} />;
	});

	return <ul className="notionList">{element}</ul>;
};

export default NotionList;
