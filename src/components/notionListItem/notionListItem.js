import './notionListItem.scss';
import star from '../../resources/img/star.svg';
import trash from '../../resources/img/trash.svg';

const NotionListItem = (props) => {
	const { title, text, important, onDelete, onToggleProp, active, onActive } =
		props;

	let className = 'notionListItem';

	if (important) {
		className += ' important';
	}

	if (active) {
		className += ' active';
	}

	return (
		<li className={className}>
			<div className="notionListItem__wpapper">
				<span
					onClick={onActive}
					//onClick={onToggleProp}
					//data-toggle="active"
				>
					{title}
				</span>
				<div className="notionListItem__wpapper-inner">
					<button
						className="notionListItem__like"
						onClick={onToggleProp}
						data-toggle="important"
					>
						<img src={star} alt="like" />
					</button>
					<button className="notionListItem__trash" onClick={onDelete}>
						<img src={trash} alt="trash" />
					</button>
				</div>
			</div>
		</li>
	);
};

export default NotionListItem;
