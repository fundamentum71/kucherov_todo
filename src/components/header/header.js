import './header.scss';
import house from '../../resources/img/house.svg';

function Header() {
	return (
		<div className="header">
			<a className="header__link" href="#">
				<img src={house} alt="house" />
			</a>
			<h1 className="header__title">Notes</h1>
		</div>
	);
}

export default Header;
