import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import CampingListPage from './pages/CampingListPage';

function App() {
	return (
		<div>
			<Navbar />
			<Router>
				<Routes>
					<Route
						path='/'
						element={<Home />}
					/>
					<Route
						path='camp'
						element={<CampingListPage />}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
