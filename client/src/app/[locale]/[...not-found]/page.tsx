import { LayoutTypes } from '@/@core/types/app-routes/type';
import { notFound } from 'next/navigation';
import React from 'react';

const RestPage = (props: LayoutTypes) => {
  console.log(12005, 'RestPage: ', props);

  return notFound();
};

export default RestPage;
