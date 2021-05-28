import express, { Request, Response } from "express";
import { Course, courses } from "./data";

import { CourseDto } from "./dtos";
import cors from "cors";

const app = express();
const port = 5000;

// middlewares
app.use(express.json());
// app.use(cors());

// Get all courses
app.get("/api/courses", (req, res) => {
  res.status(200).json(courses);
});

// Get single course
app.get("/api/courses/:courseId", (req, res) => {
  const id = parseInt(req.params.courseId);
  const course = courses.find((course) => course.id === id);
  if (!course) return res.status(404).send();
  res.status(200).json(course);
});

// Create a course
app.post("/api/courses", (req, res) => {
  const body = req.body as CourseDto;

  if (!body.title || !body.description) {
    return res.status(400).send();
  }

  const course: Course = {
    id: Math.round(Math.random() * 100),
    title: body.title,
    description: body.description,
  };

  courses.push(course);

  res.status(201).send();
});

// Delete a course
app.delete("/api/courses/:courseId", (req, res) => {
  const id = parseInt(req.params.courseId);
  const indexOfCourse = courses.findIndex((item) => item.id === id);
  if (indexOfCourse === -1) return res.status(404).send();
  courses.splice(indexOfCourse, 1);
  res.status(200).send();
});

app.listen(port, () => {
  console.log("Started listening on port " + port);
});
