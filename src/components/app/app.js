import { Component } from 'react';
import Header from '../header/header';

import NotionSearch from '../notionSearch/notionSearch';
import CreateButton from '../createButton/createButton';
import NotionList from '../notionList/notionList';
import CreateField from '../createField/createField';
//import NotionField from '../notionField/notionField';

import '../../style/style.scss';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					title: 'apple',
					text: 'an apple grows on a tree',
					important: true,
					id: 1,
				},
				{
					title: 'cow',
					text: 'cow grazing in the meadow',
					important: false,
					id: 2,
				},
				{
					title: 'bird',
					text: 'a bird flies across the sky',
					important: true,
					id: 3,
				},
			],
		};
		this.maxId = 4;
	}

	deleteItem = (id) => {
		this.setState(({ data }) => {
			return {
				data: data.filter((item) => item.id !== id),
			};
		});
	};

	addItem = (title, text) => {
		const newItem = { title, text, id: this.maxId++, important: false };
		this.setState(({ data }) => {
			const newArr = [...data, newItem];
			return {
				data: newArr,
			};
		});
	};

	render() {
		const { data } = this.state;
		return (
			<div className="app">
				<Header />
				<div className="main-wrapper">
					<div className="leftPanel">
						<NotionSearch />
						<CreateButton />
						<NotionList data={data} onDelete={(id) => this.deleteItem(id)} />
					</div>
					<div className="rightPanel">
						<CreateField onAdd={this.addItem} />
						{/*<NotionField />*/}
					</div>
				</div>
			</div>
		);
	}
}

export default App;
