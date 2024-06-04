import React from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';

const Loading = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 300,
        }}
      >
        <Image 
          src="/loading.gif" 
          alt="Loading" 
          layout="responsive" 
          width={100} 
          height={100} 
        />
      </Box>
    </Box>
  );
};

export default Loading;