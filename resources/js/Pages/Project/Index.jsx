import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import PageLayout from '@/Layouts/PageLayout';
import Pagination from '@/Components/Pagination';
import { PROJECT_STATUS_CLASS_MAP, PROJECT_STATUS_TEXT_MAP } from '@/constants';

const Index = React.memo(({ auth, projects }) => {
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
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b-2 border-gray-500">
              <tr className="text-nowrap">
                <th className="px-3 py-3">ID</th>
                <th className="px-3 py-3">Image</th>
                <th className="px-3 py-3">Name</th>
                <th className="px-3 py-3">Status</th>
                <th className="px-3 py-3">Create Date</th>
                <th className="px-3 py-3">Due Date</th>
                <th className="px-3 py-3">Created By</th>
                <th className="px-3 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="">
              {projects.data.map(project => (
                <tr className="bg-white border-b" key={project.id}>
                  <td className="px-3 py-2 ">{project.id}</td>
                  <td className="px-3 py-2">
                    <img
                      src={project.image_path}
                      alt={project.description}
                      width={60}
                      height={40}
                    />
                  </td>
                  <td className="px-3 py-2">{project.name}</td>
                  <td className="px-3 py-2 ">
                    <span
                      className={`px-2 py-1 text-white rounded ${PROJECT_STATUS_CLASS_MAP[project.status]}`}
                    >
                      {PROJECT_STATUS_TEXT_MAP[project.status]}
                    </span>
                  </td>
                  <td className="px-3 py-2 text-nowrap">
                    {project.created_at}
                  </td>
                  <td className="px-3 py-2">{project.due_date}</td>
                  <td className="px-3 py-2">{project.createdBy.name}</td>
                  <td className="px-3 py-2 text-right">
                    <Link
                      href={route('project.edit', project.id)}
                      className="font-medium text-blue-600 hover:underline mx-1"
                    >
                      Edit
                    </Link>
                    <Link
                      href={route('project.destroy', project.id)}
                      className="font-medium text-red-600 hover:underline mx-1"
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination links={projects.meta.links} />
        </div>
      </PageLayout>
    </AuthenticatedLayout>
  );
});

Index.displayName = 'Project';

export default Index;
