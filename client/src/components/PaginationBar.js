import React from 'react';

function PaginationBar() {
	return (
		<>
			<div className='flex flex-col items-center'>
				{/* Help text */}
				<span className='text-sm text-gray-700 dark:text-gray-400'>
					Showing
					<span className='font-semibold text-gray-900 dark:text-white'>1</span>
					to
					<span className='font-semibold text-gray-900 dark:text-white'>
						10
					</span>
					of
					<span className='font-semibold text-gray-900 dark:text-white'>
						100
					</span>
					Entries
				</span>
				{/* Buttons  */}
				<div className='inline-flex mt-2 xs:mt-0'>
					<button className='flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
						Prev
					</button>
					<button className='flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
						Next
					</button>
				</div>
			</div>
			<div className='flex flex-col items-center'>
				{/* Help text */}
				<span className='text-sm text-gray-700 dark:text-gray-400'>
					Showing
					<span className='font-semibold text-gray-900 dark:text-white'>1</span>
					to
					<span className='font-semibold text-gray-900 dark:text-white'>
						10
					</span>
					of
					<span className='font-semibold text-gray-900 dark:text-white'>
						100
					</span>
					Entries
				</span>
				{/* Buttons */}
				<div className='inline-flex mt-2 xs:mt-0'>
					<button className='flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
						Prev
					</button>
					<button className='flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
						Next
					</button>
				</div>
			</div>
		</>
	);
}

export default PaginationBar;
