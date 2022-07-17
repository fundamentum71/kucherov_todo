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
			data: [],
			create: true,
			term: '',
		};
		this.maxId = 0;
	}

	deleteItem = (id) => {
		this.state.data.forEach((item) => {
			if (item.id === id && item.active === true) {
				this.onSingleActive();
				this.setState(({ create }) => ({
					create: true,
				}));
			}
		});

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
		this.onSingleActive();
		this.setState(({ create }) => ({
			create: true,
		}));
	};

	onToggleNotes = () => {
		this.setState(({ create }) => ({
			create: false,
		}));
	};

	searchNotes = (items, term) => {
		if (term.length === 0) {
			return items;
		}
		return items.filter((item) => {
			return item.title.indexOf(term) > -1;
		});
	};

	onUpdateSearch = (term) => {
		this.setState({ term: term });
	};

	onSaveLocal = () => {
		localStorage.setItem('todos', JSON.stringify(this.state.data));
		localStorage.setItem('id', JSON.stringify(this.maxId));
	};

	onGetLocal = () => {
		this.setState({ data: JSON.parse(localStorage.getItem('todos')) });
		this.maxId = JSON.parse(localStorage.getItem('id'));
	};
	componentDidMount() {
		this.onGetLocal();
		this.onSingleActive();
	}
	componentDidUpdate() {
		this.onSaveLocal();
	}

	render() {
		const { data, create, term } = this.state;
		const visibleNotes = data.filter((item) => item.active);
		const searchNotes = this.searchNotes(data, term);

		return (
			<div className="app">
				<Header />
				<div className="main-wrapper">
					<div className="leftPanel">
						<NotionSearch onUpdateSearch={this.onUpdateSearch} />
						<CreateButton onToggleCreate={() => this.onToggleCreate()} />
						<NotionList
							data={searchNotes}
							onDelete={(id) => this.deleteItem(id)}
							onToggleProp={this.onToggleProp}
							onActive={this.onActive}
						/>
					</div>
					<div className="rightPanel">
						{create || !this.state.data.length ? (
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
