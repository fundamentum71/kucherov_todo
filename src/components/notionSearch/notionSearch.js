import { Component } from 'react';
import './notionSearch.scss';
import vector from '../../resources/img/vector.svg';

class NotionSearch extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: '',
		};
	}

	onUpdateSearchNotes = (e) => {
		const term = e.target.value;
		this.setState({ term });
		this.props.onUpdateSearch(term);
	};
	render() {
		return (
			<section className="search">
				<input
					type="text"
					className="notionSearch"
					placeholder="Search..."
					value={this.state.term}
					onChange={this.onUpdateSearchNotes}
				/>
				<img className="notionSearch__vector" src={vector} alt="vector" />
			</section>
		);
	}
}

export default NotionSearch;
