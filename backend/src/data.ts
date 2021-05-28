export interface Course {
  id: number;
  title: string;
  description: string;
}

export const courses: Course[] = [
  {
    id: 1,
    title: "JavaScript",
    description: "Something about javaScript",
  },
  {
    id: 2,
    title: "Typescript",
    description: "Something about Typescript",
  },
  {
    id: 3,
    title: "Rust",
    description: "Something about Rust",
  },
  {
    id: 4,
    title: "React",
    description: "Something about React",
  },
];
