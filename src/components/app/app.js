import { Component } from 'react';
import Header from '../header/header';

import NotionSearch from '../notionSearch/notionSearch';
import CreateButton from '../createButton/createButton';
import NotionList from '../notionList/notionList';
import CreateField from '../createField/createField';
import NotionField from '../notionField/notionField';

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
					active: true,
					id: 1,
				},
				{
					title: 'cow',
					text: 'cow grazing in the meadow',
					important: false,
					active: false,
					id: 2,
				},
				{
					title: 'bird',
					text: 'a bird flies across the sky',
					important: false,
					active: false,
					id: 3,
				},
			],
			create: false,
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
		const newItem = {
			title,
			text,
			id: this.maxId++,
			important: false,
			active: false,
		};
		this.setState(({ data }) => {
			const newArr = [...data, newItem];
			return {
				data: newArr,
			};
		});
	};

	onToggleProp = (id, prop) => {
		this.setState(({ data }) => ({
			data: data.map((item) => {
				if (item.id === id) {
					return { ...item, [prop]: !item[prop] };
				}
				return item;
			}),
		}));
	};

	onActive = (id) => {
		this.onSingleActive();
		this.onToggleNotes();

		this.setState(({ data }) => ({
			data: data.map((item) => {
				if (item.id === id) {
					return { ...item, active: !item.active };
				}
				return item;
			}),
		}));
	};

	onSingleActive = () => {
		this.setState(({ data }) => ({
			data: data.map((item) => {
				return { ...item, active: false };
			}),
		}));
	};

	onToggleCreate = () => {
		this.setState(({ create }) => ({
			create: true,
		}));
	};

	onToggleNotes = () => {
		this.setState(({ create }) => ({
			create: false,
		}));
	};

	//visibleNotes = () => {
	//	this.setState(({ data }) => ({
	//		data: data.filter((item) => (item.active = true)),
	//	}));
	//};

	render() {
		const { data, create } = this.state;
		const visibleNotes = data.filter((item) => item.active);
		//console.log(visibleNotes);
		return (
			<div className="app">
				<Header />
				<div className="main-wrapper">
					<div className="leftPanel">
						<NotionSearch />
						<CreateButton onToggleCreate={() => this.onToggleCreate()} />
						<NotionList
							data={data}
							onDelete={(id) => this.deleteItem(id)}
							onToggleProp={this.onToggleProp}
							onActive={this.onActive}
						/>
					</div>
					<div className="rightPanel">
						{create ? (
							<CreateField onAdd={this.addItem} />
						) : (
							<NotionField data={visibleNotes} />
						)}
					</div>
				</div>
			</div>
		);
	}
}

export default App;
