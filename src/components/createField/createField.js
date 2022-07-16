import { Component } from 'react';
import './createField.scss';

class CreateField extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			text: '',
		};
	}

	onValueChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		if (this.state.title.length && this.state.text.length) {
			this.props.onAdd(this.state.title, this.state.text);
			this.setState({
				title: '',
				text: '',
			});
		} else {
			alert('Заполните данные');
		}
	};

	render() {
		const { title, text } = this.state;
		return (
			<div className="createField">
				<h3>Add a new note</h3>
				<form className="createField__form" onSubmit={this.onSubmit}>
					<input
						type="text"
						placeholder="Note title"
						className="createField__title"
						name="title"
						value={title}
						onChange={this.onValueChange}
					/>
					<textarea
						type="text"
						placeholder="The note"
						className="createField__text"
						name="text"
						value={text}
						onChange={this.onValueChange}
					></textarea>
					<button type="submit" className="createButton">
						Submit
					</button>
				</form>
			</div>
		);
	}
}

export default CreateField;
