import { styled } from '@mui/system';

export const UploadContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const UploadText = styled('p')`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const UploadButton = styled('label')`
  background-color: #6C63FF;
  color: #fff;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d5004f;
  }
`;

export const UploadInput = styled('input')`
  display: none;
`;

export const WarningText = styled('p')({
    color: 'red',
    marginTop: 8,
  });
