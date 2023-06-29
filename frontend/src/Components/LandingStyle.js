import { styled } from '@mui/system';
import Button from '@mui/material/Button'

export const Container = styled('div')`
  text-align: center;
  margin: 50px;
`;

export const TextContainer = styled('div')`
  padding: 0;
  margin: 0;
   
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-bottom: 10px;
 
 
`;

export const Title = styled('h1')`
  font-size: 24px;
  margin-bottom: 20px;
  color: #6C63FF;
`;

export const Image = styled('img')`
  width: 100%;
  height: auto;
  padding-top: 20px; 
`;

export const ButtonWrapper = styled('div')`
  margin-top: 40px;
`;

export const CustomButton = styled(Button)`
  &:hover {
    background-color: #6C63FF;
    color: #FFFFFF;
  }
`;

export const TableContainer = styled('div')`
  margin-top: 20px;
`;

// Add additional styled components for table styling if needed
