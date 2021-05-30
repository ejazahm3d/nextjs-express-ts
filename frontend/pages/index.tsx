import { Course } from "../types";
import agent from "../src/api/agent";
import { GetServerSideProps } from "next";
import { CourseList } from "../src/components/course-list/course-list";
import {
  CourseForm,
  CourseFormValues,
} from "../src/components/course-form/course-form";
import { useEffect, useState } from "react";

interface HomeProps {
  courses: Course[];
}

export default function Home(props: HomeProps) {
  const [courses, setCourses] = useState<Course[]>(props.courses);

  async function handleCourseAdd(data: CourseFormValues, reset: () => void) {
    await agent.Courses.create(data);
    reset();
    const courses = await agent.Courses.list();
    setCourses(courses);
  }

  async function handleCourseDelete(id: number) {
    await agent.Courses.delete(id);
    const courses = await agent.Courses.list();
    setCourses(courses);
  }

  return (
    <div>
      <CourseForm onSubmit={handleCourseAdd} />
      <CourseList courses={courses} onCourseDelete={handleCourseDelete} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const courses = await agent.Courses.list();

  return {
    props: {
      courses: courses,
    },
  };
};
