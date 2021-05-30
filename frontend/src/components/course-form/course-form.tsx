import React from "react";
import agent from "../../api/agent";
import { useForm } from "react-hook-form";

export interface CourseFormValues {
  title: string;
  description: string;
}

interface CourseFormProps {
  onSubmit: (data: CourseFormValues) => void;
}

export function CourseForm(props: CourseFormProps) {
  const { handleSubmit, register, reset } = useForm<CourseFormValues>();

  return (
    <section>
      <div className="container mx-auto items-center px-5 py-12 lg:px-20">
        <form
          onSubmit={handleSubmit(props.onSubmit)}
          className="flex flex-col w-full p-10 px-8 pt-6 mx-auto my-6 mb-4 transition duration-500 ease-in-out transform bg-white border rounded-lg lg:w-1/2"
        >
          <div className="flex flex-wrap mb-6 -mx-3">
            <div className="w-full px-3  ">
              <label
                className="text-base leading-7 text-gray-500"
                htmlFor="grid-title"
              >
                Title
              </label>
              <input
                className="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
                id="grid-title"
                type="text"
                name="title"
                placeholder="Title"
                required={true}
                {...register("title")}
              />
            </div>
          </div>
          <div className="flex flex-wrap mb-6 -mx-3">
            <div className="w-full px-3">
              <label
                className="text-base leading-7 text-gray-500"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                className="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 apearance-none autoexpand"
                id="description"
                name="description"
                placeholder="Course Description"
                required={true}
                {...register("description")}
              ></textarea>
            </div>
          </div>

          <div className="flex items-center w-full pt-4">
            <button className="w-full py-3 text-base font-semibold text-white transition duration-500 ease-in-out transform bg-blue-600 border-blue-600 rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blue-800 ">
              Add Course
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
