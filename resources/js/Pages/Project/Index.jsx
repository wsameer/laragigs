import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';
import PageLayout from '@/Layouts/PageLayout';
import Pagination from '@/Components/Pagination';
import SelectInput from '@/Components/SelectInput';
import { PROJECT_STATUS_CLASS_MAP, PROJECT_STATUS_TEXT_MAP } from '@/constants';
import TextInput from '@/Components/TextInput';
import { ChevronDown, ChevronUp } from 'react-feather';

const Index = React.memo(({ auth, projects, queryParams }) => {
  queryParams = queryParams || {};
  console.log('🚀 ~ Index ~ queryParams:', queryParams);

  const searchFieldChanged = (name, value) => {
    if (value) {
      queryParams[name] = value;
    } else {
      delete queryParams[name];
    }
    router.get(route('project.index'), queryParams);
  };

  const onKeyUp = (name, event) => {
    if (event.key !== 'Enter') return;
    searchFieldChanged(name, event.target.value);
  };

  const sortChanged = fieldName => {
    console.log('🚀 ~ sortChanged ~ fieldName:', fieldName);

    if (fieldName === queryParams.sort_field) {
      queryParams.sort_direction =
        queryParams.sort_direction === 'desc' ? 'asc' : 'desc';
    } else {
      queryParams.sort_field = fieldName;
      queryParams.sort_direction = 'asc';
    }

    router.get(route('project.index'), queryParams);
  };

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
          <div className="overflow-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b-2 border-gray-500">
                <tr className="text-nowrap">
                  <th
                    onClick={e => sortChanged('id')}
                    className="px-3 py-3 flex items-center justify-between gap-1"
                  >
                    ID
                    {queryParams.sort_direction === 'asc' ? (
                      <ChevronDown className="w-4" size={16} />
                    ) : (
                      <ChevronUp className="w-4" size={16} />
                    )}
                  </th>
                  <th className="px-3 py-3">Image</th>
                  <th onClick={e => sortChanged('name')} className="px-3 py-3">
                    Name
                  </th>
                  <th
                    onClick={e => sortChanged('status')}
                    className="px-3 py-3"
                  >
                    Status
                  </th>
                  <th
                    onClick={e => sortChanged('created_at')}
                    className="px-3 py-3"
                  >
                    Create Date
                  </th>
                  <th
                    onClick={e => sortChanged('due_date')}
                    className="px-3 py-3"
                  >
                    Due Date
                  </th>
                  <th className="px-3 py-3">Created By</th>
                  <th className="px-3 py-3">Actions</th>
                </tr>
              </thead>
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b-2 border-gray-500">
                <tr className="text-nowrap">
                  <th className="px-3 py-3"></th>
                  <th className="px-3 py-3"></th>
                  <th className="px-3 py-3">
                    <TextInput
                      className="w-full"
                      defaultValue={queryParams.name}
                      placeholder="Project Name"
                      onBlur={e => searchFieldChanged('name', e.target.value)}
                      onKeyUp={e => onKeyUp('name', e)}
                    />
                  </th>
                  <th className="px-3 py-3">
                    <SelectInput
                      className="w-full"
                      defaultValue={queryParams.status}
                      onChange={e =>
                        searchFieldChanged('status', e.target.value)
                      }
                    >
                      <option value="">Select Name</option>
                      {Object.keys(PROJECT_STATUS_TEXT_MAP).map(status => (
                        <option key={status} value={status}>
                          {PROJECT_STATUS_TEXT_MAP[status]}
                        </option>
                      ))}
                    </SelectInput>
                  </th>
                  <th className="px-3 py-3"></th>
                  <th className="px-3 py-3"></th>
                  <th className="px-3 py-3"></th>
                  <th className="px-3 py-3"></th>
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
          </div>
          <Pagination links={projects.meta.links} />
        </div>
      </PageLayout>
    </AuthenticatedLayout>
  );
});

Index.displayName = 'Project';

export default Index;
