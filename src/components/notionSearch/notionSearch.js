import './notionSearch.scss';
import vector from '../../resources/img/vector.svg';
function NotionSearch() {
	return (
		<section className="search">
			<input type="text" className="notionSearch" placeholder="Search..." />
			<img className="notionSearch__vector" src={vector} alt="vector" />
		</section>
	);
}

export default NotionSearch;
