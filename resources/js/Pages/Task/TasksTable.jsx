import React from 'react';
import Pagination from '@/Components/Pagination';
import {
  TASK_PRIORITY_CLASS_MAP,
  TASK_PRIORITY_TEXT_MAP,
  TASK_STATUS_CLASS_MAP,
  TASK_STATUS_TEXT_MAP,
} from '@/constants';
import { Link, router } from '@inertiajs/react';
import TableHeading from '@/Components/TableHeading';
import TextInput from '@/Components/TextInput';
import SelectInput from '@/Components/SelectInput';

const TasksTable = ({ tasks, queryParams, showProjectNameColumn = false }) => {
  queryParams = queryParams || {};

  const searchFieldChanged = (name, value) => {
    if (value) {
      queryParams[name] = value;
    } else {
      delete queryParams[name];
    }
    router.get(route('task.index'), queryParams);
  };

  const onKeyUp = (name, event) => {
    if (event.key !== 'Enter') return;
    searchFieldChanged(name, event.target.value);
  };

  const sortChanged = fieldName => {
    if (fieldName === queryParams.sort_field) {
      queryParams.sort_direction =
        queryParams.sort_direction === 'desc' ? 'asc' : 'desc';
    } else {
      queryParams.sort_field = fieldName;
      queryParams.sort_direction = 'asc';
    }

    router.get(route('task.index'), queryParams);
  };

  return (
    <div className="overflow-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b-2 border-gray-500">
          <tr className="text-nowrap">
            <TableHeading
              name="id"
              sortChanged={sortChanged}
              sortField={queryParams.sort_field}
              sortDirection={queryParams.sort_direction}
            >
              Id
            </TableHeading>
            <th className="px-3 py-3">Image</th>
            {showProjectNameColumn && (
              <th className="px-3 py-3">Project Name</th>
            )}
            <TableHeading
              name="name"
              sortChanged={sortChanged}
              sortField={queryParams.sort_field}
              sortDirection={queryParams.sort_direction}
            >
              Name
            </TableHeading>
            <TableHeading
              name="status"
              sortChanged={sortChanged}
              sortField={queryParams.sort_field}
              sortDirection={queryParams.sort_direction}
            >
              Status
            </TableHeading>
            <TableHeading
              name="priority"
              sortChanged={sortChanged}
              sortField={queryParams.sort_field}
              sortDirection={queryParams.sort_direction}
            >
              Status
            </TableHeading>
            <TableHeading
              name="created_at"
              sortChanged={sortChanged}
              sortField={queryParams.sort_field}
              sortDirection={queryParams.sort_direction}
            >
              Create Date
            </TableHeading>
            <TableHeading
              name="due_date"
              sortChanged={sortChanged}
              sortField={queryParams.sort_field}
              sortDirection={queryParams.sort_direction}
            >
              Due Date
            </TableHeading>
            <th className="px-3 py-3">Created By</th>
            <th className="px-3 py-3">Actions</th>
          </tr>
        </thead>
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b-2 border-gray-500">
          <tr className="text-nowrap">
            <th className="px-3 py-3"></th>
            <th className="px-3 py-3"></th>
            {showProjectNameColumn && <th className="px-3 py-3"></th>}
            <th className="px-3 py-3">
              <TextInput
                className="w-full"
                defaultValue={queryParams.name}
                placeholder="Task Name"
                onBlur={e => searchFieldChanged('name', e.target.value)}
                onKeyUp={e => onKeyUp('name', e)}
              />
            </th>
            <th className="px-3 py-3">
              <SelectInput
                className="w-full"
                defaultValue={queryParams.status}
                onChange={e => searchFieldChanged('status', e.target.value)}
              >
                <option value="">Select Name</option>
                {Object.keys(TASK_STATUS_TEXT_MAP).map(status => (
                  <option key={status} value={status}>
                    {TASK_STATUS_TEXT_MAP[status]}
                  </option>
                ))}
              </SelectInput>
            </th>
            <th className="px-3 py-3">
              <SelectInput
                className="w-full"
                defaultValue={queryParams.status}
                onChange={e => searchFieldChanged('priority', e.target.value)}
              >
                <option value="">Select Priority</option>
                {Object.keys(TASK_PRIORITY_TEXT_MAP).map(status => (
                  <option key={status} value={status}>
                    {TASK_PRIORITY_TEXT_MAP[status]}
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
              {showProjectNameColumn && (
                <td className="px-3 py-2">{task.project.name}</td>
              )}
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
  );
};

export default TasksTable;
