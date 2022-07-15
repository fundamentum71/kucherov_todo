import Header from '../header/header';

import NotionSearch from '../notionSearch/notionSearch';
import CreateButton from '../createButton/createButton';
import NotionList from '../notionList/notionList';

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
			</div>
		</div>
	);
}

export default App;
