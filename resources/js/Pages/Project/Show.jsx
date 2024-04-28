import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PROJECT_STATUS_CLASS_MAP, PROJECT_STATUS_TEXT_MAP } from '@/constants';
import { Head } from '@inertiajs/react';
import React from 'react';
import TasksTable from '../Task/TasksTable';

const Show = ({ auth, project, tasks, queryParams = null }) => {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          {`Project "${project.name}"`}
        </h2>
      }
    >
      <Head title="Project" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">
              <div>
                <img
                  src={project.image_path}
                  alt=""
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="grid gap-1 grid-cols-3 mt-2">
                <div id="column-1">
                  <div className="mt-4">
                    <label className="font-bold text-lg">Project ID</label>
                    <p className="mt-1">{project.id}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">Project Status</label>
                    <p className="mt-1">
                      <span
                        className={`px-2 py-1 text-white rounded ${PROJECT_STATUS_CLASS_MAP[project.status]}`}
                      >
                        {PROJECT_STATUS_TEXT_MAP[project.status]}
                      </span>
                    </p>
                  </div>
                </div>

                <div id="column-2">
                  <div className="mt-4">
                    <label className="font-bold text-lg">Created Date</label>
                    <p className="mt-1">{project.created_at}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">Due Date</label>
                    <p className="mt-1">{project.due_date}</p>
                  </div>
                </div>

                <div id="column-3">
                  <div className="mt-4">
                    <label className="font-bold text-lg">Created by</label>
                    <p className="mt-1">{project.createdBy.name}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">Updated by</label>
                    <p className="mt-1">{project.updatedBy.name}</p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <label className="mt-1 font-bold text-lg">
                  Project Description
                </label>
                <p className="mt-1">{project.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="overflow-hidden shadow-sm sm:rounded-lg">
          <div className="p-6 text-gray-900">
            <TasksTable
              tasks={tasks}
              queryParams={queryParams}
              showProjectNameColumn={true}
            />
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default Show;
