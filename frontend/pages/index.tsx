import { Course } from "../types";
import axios from "axios";
import { GetServerSideProps } from "next";

interface HomeProps {
  courses: Course[];
}

export default function Home(props: HomeProps) {
  return (
    <div>
      {props.courses.map((item) => {
        return <div key={item.id}>{item.title}</div>;
      })}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const url = "http://localhost:5000/api/courses";
  const res = await axios.get<Course[]>(url);

  return {
    props: {
      courses: res.data,
    },
  };
};
