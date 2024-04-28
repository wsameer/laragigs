import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import PageLayout from '@/Layouts/PageLayout';

import TasksTable from './TasksTable';

const Index = React.memo(({ auth, tasks, queryParams }) => {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Task
        </h2>
      }
    >
      <Head title="Task" />

      <PageLayout>
        <div className="p-6 text-gray-900">
          <TasksTable
            tasks={tasks}
            queryParams={queryParams}
            showProjectNameColumn={false}
          />
        </div>
      </PageLayout>
    </AuthenticatedLayout>
  );
});

Index.displayName = 'Task';

export default Index;
