import VerticalLayoutRoot from '@/layouts/VerticalLayoutRoot'
import React, { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => {
  return <VerticalLayoutRoot>{children}</VerticalLayoutRoot>
}

export default Layout
