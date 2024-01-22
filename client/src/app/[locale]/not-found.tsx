'use client';
// ** Next Import
import Link from 'next/link';

// ** MUI Components
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BlankLayout from '@/@core/layouts/BlankLayout';
import Image from 'next/image';

import NotFoundImage from '../../../public/images/pages/404.png';

export default function NotFound() {
  return (
    <BlankLayout>
      <Box className='content-center'>
        <Box sx={{ p: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <Box
            sx={{
              width: theme => theme.breakpoints.down('sm') && '90vw',
            }}
          >
            <Typography variant='h1' sx={{ mb: 2.5 }}>
              404
            </Typography>
            <Typography variant='h5' sx={{ mb: 2.5, letterSpacing: '0.18px', fontSize: '1.5rem !important' }}>
              Page Not Found ⚠️
            </Typography>
            <Typography variant='body2'>We couldn&prime;t find the page you are looking for.</Typography>
          </Box>
          <Image src={NotFoundImage} alt='error-illustration' />

          <Button href='/' component={Link} variant='contained' sx={{ px: 5.5 }}>
            Back to Home
          </Button>
        </Box>
      </Box>
    </BlankLayout>
  );
}
