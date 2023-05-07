import { HomeWrapper, LogoWrapper, LogoImg } from '@/common/Styles/layout.style.component';
import React from 'react';
import Logo from '../../assets/Logo.svg';
export interface HomeGridProps {
	children: React.ReactNode;
}

const HomeGrid : React.FC<HomeGridProps> = ({children}) => {
	return (
		<HomeWrapper>
			<LogoWrapper>
				<LogoImg src={Logo} alt='Logo' />
			</LogoWrapper>
			{children}
		</HomeWrapper>
	);
};

export default HomeGrid;
