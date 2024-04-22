import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import PageLayout from '@/Layouts/PageLayout';
import Pagination from '@/Components/Pagination';
import {
  TASK_PRIORITY_CLASS_MAP,
  TASK_PRIORITY_TEXT_MAP,
  TASK_STATUS_CLASS_MAP,
  TASK_STATUS_TEXT_MAP,
} from '@/constants';

const Index = React.memo(({ auth, tasks }) => {
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
          {/* <pre>{JSON.stringify(tasks, undefined, 2)}</pre> */}

          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b-2 border-gray-500">
              <tr className="text-nowrap">
                <th className="px-3 py-3">ID</th>
                <th className="px-3 py-3">Image</th>
                <th className="px-3 py-3">Name</th>
                <th className="px-3 py-3">Status</th>
                <th className="px-3 py-3">Priority</th>
                <th className="px-3 py-3">Create Date</th>
                <th className="px-3 py-3">Due Date</th>
                <th className="px-3 py-3">Created By</th>
                <th className="px-3 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="">
              {tasks.data.map(task => (
                <tr className="bg-white border-b" key={task.id}>
                  <td className="px-3 py-2 ">{task.id}</td>
                  <td className="px-3 py-2">
                    <img
                      src={task.image_path}
                      alt={task.description}
                      width={60}
                      height={40}
                    />
                  </td>
                  <td className="px-3 py-2">{task.name}</td>
                  <td className="px-3 py-2 ">
                    <span
                      className={`px-2 py-1 text-white rounded ${TASK_STATUS_CLASS_MAP[task.status]}`}
                    >
                      {TASK_STATUS_TEXT_MAP[task.status]}
                    </span>
                  </td>
                  <td className="px-3 py-2 ">
                    <span
                      className={`px-2 py-1 text-white rounded ${TASK_PRIORITY_CLASS_MAP[task.priority]}`}
                    >
                      {TASK_PRIORITY_TEXT_MAP[task.priority]}
                    </span>
                  </td>
                  <td className="px-3 py-2 text-nowrap">{task.created_at}</td>
                  <td className="px-3 py-2">{task.due_date}</td>
                  <td className="px-3 py-2">{task.createdBy.name}</td>
                  <td className="px-3 py-2 text-right">
                    <Link
                      href={route('task.edit', task.id)}
                      className="font-medium text-blue-600 hover:underline mx-1"
                    >
                      Edit
                    </Link>
                    <Link
                      href={route('task.destroy', task.id)}
                      className="font-medium text-red-600 hover:underline mx-1"
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination links={tasks.meta.links} />
        </div>
      </PageLayout>
    </AuthenticatedLayout>
  );
});

Index.displayName = 'Task';

export default Index;
