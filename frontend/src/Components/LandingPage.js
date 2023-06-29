import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Container, Grid, Typography } from '@mui/material';
import { TextContainer, Title, Image, TableContainer, ButtonWrapper, CustomButton } from './LandingStyle';
import landingImage from '../Images/landing_image.svg';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import UploadFile from './UploadFile';

function LandingPage() {
  const [openUploadDialog, setOpenUploadDialog] = useState(false);

  const handleOpenUploadDialog = () => {
    setOpenUploadDialog(true);
  };

  const handleCloseUploadDialog = () => {
    setOpenUploadDialog(false);
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextContainer>
            <Title>VISUALIZE YOUR DATA WITH US</Title>
            <Typography variant="body1" gutterBottom>
              Got a Lot of data and don't want to add it manually?
              
              Just import your excel sheet here and manipulate however you want.
              <h3>Don't Worry, We Got You !</h3>
            </Typography>
            <ButtonWrapper>
              <CustomButton variant="contained" color="primary" onClick={handleOpenUploadDialog}>
                Upload Data or Excel
              </CustomButton>
            </ButtonWrapper>
          </TextContainer>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Image src={landingImage} alt="Your Company" />
        </Grid>
      </Grid>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Employee Name</TableCell>
              <TableCell>Employee ID</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{/* Leave this blank for now */}</TableBody>
        </Table>
      </TableContainer>
      <Dialog open={openUploadDialog} onClose={handleCloseUploadDialog}>
        <DialogTitle>Upload Excel File</DialogTitle>
        <DialogContent>
          <UploadFile onClose={handleCloseUploadDialog} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseUploadDialog}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default LandingPage;
