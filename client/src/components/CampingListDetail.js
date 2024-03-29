import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

export default function CampingListDetail({ items }) {
	const [expandedIndex, setExpandedIndex] = useState(-1);

	const handleClick = (nextIndex) => {
		nextIndex === expandedIndex
			? setExpandedIndex(-1)
			: setExpandedIndex(nextIndex);
	};

	const renderedItems = items.map((item, index) => {
		const isExpanded = expandedIndex === index;
		const icon = (
			<span className='text-2xl'>
				{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
			</span>
		);
		return (
			<div key={item.contentId}>
				<div
					className='flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer'
					onClick={() => handleClick(index)}
				>
					{item.facltNm}
					{icon}
				</div>
				{isExpanded && <div className='border-b p-5'>{item.lineIntro}</div>}
			</div>
		);
	});
	return <div className='border-x border-t rounded'>{renderedItems}</div>;
}
