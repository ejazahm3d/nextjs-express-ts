import axios, { AxiosResponse } from "axios";
import { Course } from "../../types";
import { CourseFormValues } from "../components/course-form/course-form";

axios.defaults.baseURL = "http://localhost:5000";

const responseBody = <T>(response: AxiosResponse<T>): T => response.data;

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  delete: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const Courses = {
  list: () => requests.get<Course[]>("/api/courses"),
  details: (id: string) => requests.get<Course>(`/api/courses/${id}`),
  create: (course: CourseFormValues) =>
    requests.post<void>(`/api/courses`, course),
  delete: (id: number) => requests.delete<void>(`/api/courses/${id}`),
};

export default {
  Courses,
};
