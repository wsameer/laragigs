import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PageLayout from '@/Layouts/PageLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Dashboard
        </h2>
      }
    >
      <Head title="Dashboard" />

      <PageLayout>
        <div className="p-6 text-gray-900">You're logged in!</div>
      </PageLayout>
    </AuthenticatedLayout>
  );
}
