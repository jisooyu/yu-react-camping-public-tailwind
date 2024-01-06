import useFetchData from '../hooks/use-fetch-data';
import CampingListPage from '../pages/CampingListPage';

function Home() {
	const { data: campingData, isLoading } = useFetchData();
	console.log(campingData);
	return (
		<>
			{isLoading ? (
				<div className='fixed top-1/2 left-1/2'>
					<p>Loading...</p>
				</div>
			) : (
				<CampingListPage campingData={campingData} />
			)}
		</>
	);
}

export default Home;
