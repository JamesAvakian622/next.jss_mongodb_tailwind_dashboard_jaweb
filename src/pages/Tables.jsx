import React from 'react';
import DefaultLayout from '../layout/DefaultLayout';
import Breadcrumb from '../components/Breadcrumb';
import AvailableSoftwareNotice from '../components/AvailableSoftwareNotice';
import TableOne from '../components/TableOne';
import TableTwo from '../components/TableTwo';
import TableThree from '../components/TableThree';

const Tables = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName='Tables' />

      <AvailableSoftwareNotice />
      <div className='flex flex-col gap-10'>
        <TableOne />
        <TableTwo />
        <TableThree />
      </div>
    </DefaultLayout>
  )
}

export default Tables;
