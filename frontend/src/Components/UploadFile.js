import React, { useState } from 'react';
 
import { UploadContainer, UploadText, UploadButton, UploadInput, WarningText } from './UploadStyle';

function UploadFile({ onClose }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileWarning, setFileWarning] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/vnd.ms-excel') {
      setSelectedFile(file);
      setFileWarning(false);
    } else {
      setSelectedFile(null);
      setFileWarning(true);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Handle the file upload logic here
      console.log('File selected:', selectedFile);
      onClose();
    }
  };

  return (
    <UploadContainer>
      <UploadText>Select an Excel file to upload:</UploadText>
      <UploadButton>
        Choose File
        <UploadInput type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
      </UploadButton>
      {fileWarning && <WarningText>Please select a valid Excel file.</WarningText>}
      {/* <button onClick={handleUpload}>Upload</button> */}
    </UploadContainer>
  );



}

export default UploadFile;
