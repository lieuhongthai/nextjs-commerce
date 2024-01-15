'use client';

// ** React Imports
import { ReactNode } from 'react';
import { SettingsConsumer, SettingsProvider } from '@/@core/contexts/settingContext';

// ** Components
import VerticalLayout from '@/@core/layouts/VerticalLayout';

// ** MUI Imports
import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const VerticalLayoutRoot = ({ children }: { children: ReactNode }) => {
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));

  return (
    <SettingsProvider>
      <SettingsConsumer>
        {({ settings, saveSettings }) => (
          <VerticalLayout hidden={hidden} settings={settings} saveSettings={saveSettings}>
            {children}
          </VerticalLayout>
        )}
      </SettingsConsumer>
    </SettingsProvider>
  );
};

export default VerticalLayoutRoot;
