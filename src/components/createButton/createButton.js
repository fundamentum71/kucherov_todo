import './createButton.scss';

const CreateButton = (props) => {
	const { onToggleCreate } = props;
	return (
		<button className="createButton" onClick={() => onToggleCreate()}>
			Сreate a note
		</button>
	);
};

export default CreateButton;
