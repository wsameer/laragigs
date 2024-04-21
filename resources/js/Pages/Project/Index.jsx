import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import PageLayout from '@/Layouts/PageLayout';

const Index = ({ auth, header }) => {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Projects
        </h2>
      }
    >
      <Head title="Projects" />

      <PageLayout>
        <div className="p-6 text-gray-900">You projects here!</div>
      </PageLayout>
    </AuthenticatedLayout>
  );
};

Index.displayName = 'Project';

export default Index;
