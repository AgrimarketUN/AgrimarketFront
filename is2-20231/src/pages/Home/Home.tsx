import React from 'react';
import { HomeWrapper, LogoWrapper, LogoImg } from './Styles/layout.style.component';
import Logo from '../../assets/Logo.svg';
import LoginForm from './components/Login/LoginForm';
export interface HomeInterface {}

const Home : React.FC<HomeInterface> = () => {
	return (
	<HomeWrapper>
		<LogoWrapper>
			<LogoImg src={Logo} alt='Logo' />
		</LogoWrapper>
		<LoginForm />
	</HomeWrapper>
	);
};

export default Home;
