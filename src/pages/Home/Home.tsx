import React from 'react';
import LoginForm from './components/Login/LoginForm';
import { HomeGrid } from '@/common';
export interface HomeInterface {}

const HomePage : React.FC<HomeInterface> = () => {
	return (
	<HomeGrid>
		<LoginForm />
	</HomeGrid>
	);
};

export default HomePage;
