import styled from 'styled-components';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import background from '../../assets/HomeBackGround.svg';


export const HomeWrapper = styled.div`
    background-image: url($(background));
    background-size: cover;
    background-repeat: no-repeat;
`;

export const LogoWrapper = styled.div`
    align-center: center;
    display: flex;
`;

export const LogoImg = styled.img`
    align-center: center;
    width: ;
`;

export const FormWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    min-height: 504px;
    position: relative;
    width: 403px;
`;

export const StyledBox = styled(Box)`
    align-items: center;
    margin-bottom: 10px;
    width: 400px;
    height: 50px;
`;

export const StyledButton = styled(Button)`
    align-items: center;
    width: 400px;
    height: 50px;
`;