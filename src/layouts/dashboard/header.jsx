import PropTypes from 'prop-types';

import AppBar from '@mui/material/AppBar';
import { useTheme } from '@mui/material/styles';
import { Box, Stack, IconButton, Typography } from '@mui/material';

import { useResponsive } from 'src/hooks/use-responsive';

import { bgBlur } from 'src/theme/css';

import Iconify from 'src/components/iconify';

import { NAV, HEADER } from './config-layout';

// ----------------------------------------------------------------------

export default function Header({ onOpenNav }) {
  const theme = useTheme();

  const lgUp = useResponsive('up', 'lg');


  return (
    <AppBar
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        boxShadow: 'none',
        height: HEADER.H_MOBILE,
        zIndex: theme.zIndex.appBar + 1,
        ...bgBlur({
          color: theme.palette.background.default,
        }),
        transition: theme.transitions.create(['height'], {
          duration: theme.transitions.duration.shorter,
        }),
        ...(lgUp && {
          width: `calc(100% - ${NAV.WIDTH + 1}px)`,
          height: HEADER.H_DESKTOP,
        }),
      }}
    >
      <Box
        sx={{
          my: 3,
          mx: 2.5,
          py: 2,
          px: 2.5,
          display: 'flex',
          borderRadius: 1.5,
          alignItems: 'center',
          // bgcolor: (theme) => alpha(theme.palette.grey[500], 0.12),
        }}
      >

        {!lgUp && (
          <IconButton onClick={onOpenNav} sx={{ mr: 1 }} >
            <Iconify icon="eva:menu-2-fill" />
          </IconButton>
        )}

        <Stack direction="row" alignItems="center" sx={{ marginLeft: "30px" }} spacing={1}>
          <Typography variant="h4" sx={{ mb: 5, color: "black", textAlign: "center" }}>
            Noc Certificate Generator
          </Typography>
        </Stack>
      </Box>

    </AppBar>
  );
}

Header.propTypes = {
  onOpenNav: PropTypes.func,
};