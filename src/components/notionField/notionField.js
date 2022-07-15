import './notionField.scss';

function NotionField() {
	return (
		<div className="notionField">
			<form className="notionField__form">
				<input
					type="text"
					placeholder="Note title"
					className="notionField__title"
				/>
				<textarea
					type="text"
					placeholder="The note"
					className="notionField__text"
				></textarea>
			</form>
		</div>
	);
}

export default NotionField;
