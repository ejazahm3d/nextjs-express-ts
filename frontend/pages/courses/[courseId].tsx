import {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPageContext,
} from "next";
import agent from "../../src/api/agent";
import { Layout } from "../../src/components/layout/layout";
import { Course } from "../../types";

interface CoursePageProps {
  course: Course;
}

export default function CoursePage({ course }: CoursePageProps) {
  return (
    <>
      <section className="text-gray-700 mx-auto">
        <div className="container flex flex-col items-center px-5 py-8 mx-auto">
          <div className="flex flex-col w-full mb-12 text-left ">
            <div className="w-full mx-auto lg:w-1/2">
              <h2 className="mx-auto mb-6 text-xl font-semibold leading-none tracking-tighter text-black title-font">
                {course.title}
              </h2>
              <p className="mx-auto mb-4 text-base font-medium leading-relaxed text-gray-700 ">
                {course.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<CoursePageProps> = async (
  context: GetServerSidePropsContext<{ courseId: string }>
) => {
  const courseId = context.params.courseId;
  const course = await agent.Courses.details(courseId);
  return {
    props: {
      course,
    },
  };
};
