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

export default function CoursePage(props: CoursePageProps) {
  return <div>{props.course.title}</div>;
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
