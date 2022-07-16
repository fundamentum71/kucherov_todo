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
	}

	render() {
		const { data } = this.state;
		return (
			<div className="app">
				<Header />
				<div className="main-wrapper">
					<div className="leftPanel">
						<NotionSearch />
						<CreateButton />
						<NotionList data={data} />
					</div>
					<div className="rightPanel">
						<CreateField />
						{/*<NotionField />*/}
					</div>
				</div>
			</div>
		);
	}
}

export default App;
