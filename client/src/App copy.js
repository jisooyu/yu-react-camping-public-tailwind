import useFetchData from './hooks/use-fetch-data';

function App() {
	const { data: campingData, isLoading } = useFetchData();
	return (
		<div>
			{isLoading ? (
				<div className='fixed top-1/2 left-1/2'>Loading...</div>
			) : (
				console.log(campingData)
			)}
		</div>
	);
}

export default App;
