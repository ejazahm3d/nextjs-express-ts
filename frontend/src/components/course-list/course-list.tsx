import { Course } from "../../../types";
import Link from "next/link";

interface CourseListProps {
  courses: Course[];
  onCourseDelete(id: number): void;
}

export function CourseList({ courses, onCourseDelete }: CourseListProps) {
  return (
    <div className="container px-5 py-12 lg:px-20 mx-auto">
      <h3 className="text-center text-4xl mb-3">Course List</h3>
      <div className="flex flex-wrap justify-center">
        {courses.map((course) => (
          <Link href={`/courses/${course.id}`} key={course.id}>
            <CourseCard course={course} onCourseDelete={onCourseDelete} />
          </Link>
        ))}
      </div>
    </div>
  );
}

interface CourseCardProps {
  course: Course;
  onCourseDelete(id: number): void;
}

function CourseCard({ course, onCourseDelete }: CourseCardProps) {
  return (
    <div className="w-full mx-4 my-4 bg-white border rounded-lg shadow-xl lg:w-1/4">
      <div className="p-6">
        <h2 className="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font">
          {course.title}
        </h2>
        <p className="mb-3 text-base leading-relaxed text-gray-500">
          {course.description}
        </p>
        <div>
          <Link href={`/courses/${course.id}`} key={course.id}>
            <a>
              <button className="px-6 py-3 text-base font-semibold text-white transition duration-500 ease-in-out transform bg-blue-600 border-blue-600 rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blue-800 ">
                Details
              </button>
            </a>
          </Link>
          <button
            onClick={() => {
              onCourseDelete(course.id);
            }}
            className="ml-2 px-6 py-3 text-base font-semibold text-white transition duration-500 ease-in-out transform bg-red-600 border-red-600 rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-red-800 "
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
