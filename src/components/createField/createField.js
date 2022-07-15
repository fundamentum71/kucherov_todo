import './createField.scss';

function CreateField() {
	return (
		<div className="createField">
			<h3>Add a new note</h3>
			<form className="createField__form">
				<input
					type="text"
					placeholder="Note title"
					className="createField__title"
				/>
				<textarea
					type="text"
					placeholder="The note"
					className="createField__text"
				></textarea>
				<button type="submit" className="createButton">
					Submit
				</button>
			</form>
		</div>
	);
}

export default CreateField;
