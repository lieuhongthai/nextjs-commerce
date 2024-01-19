import { LayoutTypes } from '@/@core/types/app-routes/type';
import { notFound } from 'next/navigation';
import React from 'react';

type Props = {};

const RestPage = (props: LayoutTypes) => {
  console.log(12005, 'RestPage: ', props.params.locale);

  return notFound();
};

export default RestPage;
