// ** MUI Imports
import { styled, useTheme } from '@mui/material/styles';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import MuiAppBar, { AppBarProps } from '@mui/material/AppBar';
import MuiToolbar, { ToolbarProps } from '@mui/material/Toolbar';

// ** Type Import
import { LayoutProps } from '@/@core/types/mui/type';

// ** Util Import
import { hexToRGBA } from '@/utils/hex-to-rgba';
import AppBarContent from './AppBarContent';

interface Props {
  hidden: LayoutProps['hidden'];
  toggleNavVisibility: () => void;
  settings: LayoutProps['settings'];
  saveSettings: LayoutProps['saveSettings'];
}

const AppBar = styled(MuiAppBar)<AppBarProps>(({ theme }) => ({
  transition: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(0, 6),
  backgroundColor: 'transparent',
  color: theme.palette.text.primary,
  minHeight: theme.mixins.toolbar.minHeight,
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
}));

const Toolbar = styled(MuiToolbar)<ToolbarProps>(({ theme }) => ({
  width: '100%',
  padding: '0 !important',
  borderBottomLeftRadius: theme.shape.borderRadius,
  borderBottomRightRadius: theme.shape.borderRadius,
  minHeight: `${theme.mixins.toolbar.minHeight}px !important`,
  transition: 'padding .25s ease-in-out, box-shadow .25s ease-in-out, backdrop-filter .25s ease-in-out',
}));

const LayoutAppBar = (props: Props) => {
  // ** Props
  const { settings } = props;

  // ** Hooks
  const theme = useTheme();
  const scrollTrigger = useScrollTrigger({ threshold: 0, disableHysteresis: true });

  // ** Vars
  const { skin, appBar, appBarBlur, contentWidth } = settings;

  const appBarFixedStyles = () => {
    return {
      px: `${theme.spacing(6)} !important`,
      boxShadow: skin === 'bordered' ? 0 : 3,
      ...(appBarBlur && { backdropFilter: 'blur(8px)' }),
      backgroundColor: hexToRGBA(theme.palette.background.paper, appBarBlur ? 0.9 : 1),
      ...(skin === 'bordered' && { border: `1px solid ${theme.palette.divider}`, borderTopWidth: 0 }),
    };
  };

  if (appBar === 'hidden') {
    return null;
  }

  return (
    <AppBar elevation={0} color='default' className='layout-navbar' position={appBar === 'fixed' ? 'sticky' : 'static'}>
      <Toolbar
        className='navbar-content-container'
        sx={{
          ...(appBar === 'fixed' && scrollTrigger && { ...appBarFixedStyles() }),
          ...(contentWidth === 'boxed' && {
            '@media (min-width:1440px)': { maxWidth: `calc(1440px - ${theme.spacing(6)} * 2)` },
          }),
        }}
      >
        <AppBarContent {...props} />
      </Toolbar>
    </AppBar>
  );
};

export default LayoutAppBar;
