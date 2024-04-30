import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import SelectInput from '@/Components/SelectInput';
import TextAreaInput from '@/Components/TextAreaInput';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { TASK_STATUS_TEXT_MAP } from '@/constants';
import { Head, Link, useForm } from '@inertiajs/react';
import React from 'react';

const Create = ({ auth }) => {
  const { data, setData, post, processing, reset, errors } = useForm({
    image: '',
    name: '',
    status: '',
    description: '',
    due_date: '',
  });

  const onSubmit = e => {
    e.preventDefault();
    console.log('🚀 ~ Create ~ data:', data);

    post(route('project.store'));
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            Create a New Project
          </h2>
        </div>
      }
    >
      <Head title="Create Project" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <form
              action=""
              onSubmit={onSubmit}
              className="p-4 sm:p-8 bg-white shadow sm:rounded-lg"
            >
              <div>
                <InputLabel
                  htmlFor="project_image_path"
                  value="Project Image"
                />
                <TextInput
                  id="project_image_path"
                  type="file"
                  name="image"
                  className="mt-1 block w-full"
                  onChange={e => setData('image', e.targe.files[0])}
                />
                <InputError message={errors.image} className="" />
              </div>

              <div className="mt-4">
                <InputLabel htmlFor="project_name" value="Project Name" />
                <TextInput
                  id="project_name"
                  type="text"
                  name="name"
                  value={data.name}
                  isFocused={true}
                  className="mt-1 block w-full"
                  onChange={e => setData('name', e.target.value)}
                />
                <InputError message={errors.name} className="" />
              </div>

              <div className="mt-4">
                <InputLabel
                  htmlFor="project_description"
                  value="Project Description"
                />
                <TextAreaInput
                  id="project_description"
                  type="text"
                  name="description"
                  value={data.description}
                  isFocused={true}
                  className="mt-1 block w-full"
                  onChange={e => setData('description', e.target.value)}
                />
              </div>

              <div className="mt-4">
                <InputLabel
                  htmlFor="project_due_date"
                  value="Project Deadline"
                />
                <TextInput
                  id="project_due_date"
                  type="date"
                  name="due_date"
                  value={data.due_date}
                  isFocused={true}
                  className="mt-1 block w-full"
                  onChange={e => setData('due_date', e.target.value)}
                />
              </div>

              <div className="mt-4">
                <InputLabel htmlFor="project_status" value="Project Status" />
                <SelectInput
                  id="project_status"
                  name="status"
                  className="mt-1 block w-full"
                  onChange={e => setData('status', e.target.value)}
                >
                  <option value="">Select Status</option>
                  {Object.keys(TASK_STATUS_TEXT_MAP).map(status => (
                    <option key={status} value={status}>
                      {TASK_STATUS_TEXT_MAP[status]}
                    </option>
                  ))}
                </SelectInput>
              </div>

              <div className="mt-4 text-right">
                <Link
                  className="bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-4 text-sm"
                  href={route('project.index')}
                >
                  Cancel
                </Link>
                <button
                  className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600 text-sm"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default Create;
