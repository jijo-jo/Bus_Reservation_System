import React from 'react';
import { Typography, Paper, Button } from '@mui/material';

const ErrorPage = () => {
  return (
    <Paper style={{ padding: 20, textAlign: 'center', maxWidth: 400, margin: 'auto' }}>
      <Typography variant="h1" color="error" gutterBottom>
        Oops!
      </Typography>
      <Typography variant="h5" color="error" gutterBottom>
        Something went wrong.
      </Typography>
      <Typography variant="body1" paragraph>
        We're sorry, but an unexpected error occurred.
      </Typography>
      <Button variant="contained" color="primary" href="/">
        Go to Login
      </Button>
    </Paper>
  );
};

export default ErrorPage;
