import { Component } from 'react';
import './notionField.scss';

class NotionField extends Component {
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

	render() {
		const { data } = this.props;

		const visibleData = data[0];

		const { title, text } = visibleData;
		return (
			<div className="notionField">
				<form className="notionField__form">
					<input
						type="text"
						value={title}
						name="title"
						onChange={this.onValueChange}
						className="notionField__title"
					/>
					<textarea
						type="text"
						name="text"
						value={text}
						onChange={this.onValueChange}
						className="notionField__text"
					></textarea>
				</form>
			</div>
		);
	}
}

export default NotionField;
