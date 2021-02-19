import 'mapbox-gl/dist/mapbox-gl.css';
import { Route, Router } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import CheckPlagiarism from './components/books/CheckPlagiarism';
import CreateBookContainer from './components/books/CreateBookContainer';
import SearchBookContainer from './components/books/SearchBookContainer';
import HeaderComponent from './components/HeaderComponent';
import HomeComponent from './components/HomeComponent';
import One from './components/One';
import CreateReader from './components/readers/CreateReader';
import SearchReader from './components/readers/SearchReader';
import Two from './components/Two';
import history from './history';
function App() {
	return (
		<div className='App'>
			<Router history={history}>
				<HeaderComponent />
				<Route path='/' exact component={HomeComponent} />
				<Route path='/books/search' exact component={SearchBookContainer} />
				<Route path='/books/create' exact component={CreateBookContainer} />
				<Route path='/readers/search' exact component={SearchReader} />
				<Route path='/readers/create' exact component={CreateReader} />
				<Route path='/books/check' exact component={CheckPlagiarism} />

				<Route path='/1' exact component={One} />
				<Route path='/2' exact component={Two} />
			</Router>
		</div>
	);
}

export default App;
