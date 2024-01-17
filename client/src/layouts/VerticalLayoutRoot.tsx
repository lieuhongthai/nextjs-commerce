// ** React Imports
import { ReactNode } from 'react';

// ** Components
import VerticalLayout from '@/@core/layouts/VerticalLayout';

// ** MUI Imports
import { initialSettings } from '@/configs/initialSettings';

const VerticalLayoutRoot = ({ children }: { children: ReactNode }) => {
  return <VerticalLayout settings={initialSettings}>{children}</VerticalLayout>;
};

export default VerticalLayoutRoot;
