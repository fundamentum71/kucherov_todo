import Header from '../header/header';

import NotionSearch from '../notionSearch/notionSearch';
import CreateButton from '../createButton/createButton';
import NotionList from '../notionList/notionList';
import CreateField from '../createField/createField';
import NotionField from '../notionField/notionField';

import '../../style/style.scss';

function App() {
	return (
		<div className="app">
			<Header />
			<div className="main-wrapper">
				<div className="leftPanel">
					<NotionSearch />
					<CreateButton />
					<NotionList />
				</div>
				<div className="rightPanel">
					<CreateField />
					{/*<NotionField />*/}
				</div>
			</div>
		</div>
	);
}

export default App;
