import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import PageLayout from '@/Layouts/PageLayout';

const Index = React.memo(({ auth, projects }) => {
  console.log('🚀 ~ Index ~ projects:', projects);
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
        <div className="p-6 text-gray-900">
          <pre>{JSON.stringify(projects, undefined, 2)}</pre>
        </div>
      </PageLayout>
    </AuthenticatedLayout>
  );
});

Index.displayName = 'Project';

export default Index;
