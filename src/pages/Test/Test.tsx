import TestingService from '@/services/TestingService';
import React, { useEffect, useState } from 'react';
export interface TestProps {}

const Test : React.FC<TestProps> = () => {
	const [morty, setMorty] = useState({} as any);
	const fetchMorty = async () => {
		const {data} = await TestingService();
		setMorty(data);
	};

	useEffect(() => {
		try {
			fetchMorty();
		} catch (error) {}
  }, []);

	return <div>{JSON.stringify(morty)}</div>;
};

export default Test;
