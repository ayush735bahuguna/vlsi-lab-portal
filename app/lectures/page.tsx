"use client";

import { useState, useEffect } from "react";
import { Video, ExternalLink } from "lucide-react";

interface Lecture {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  date: string;
}

const dummyLectures: Lecture[] = [
  {
    id: "1",
    title: "Introduction to React",
    description: "A beginner-friendly guide to React.js basics.",
    videoUrl: "https://www.example.com/react-intro",
    date: "2025-03-15",
  },
  {
    id: "2",
    title: "Advanced JavaScript",
    description: "Deep dive into closures, hoisting, and async programming.",
    videoUrl: "https://www.example.com/js-advanced",
    date: "2025-03-10",
  },
  {
    id: "3",
    title: "CSS Grid & Flexbox",
    description: "Master layout techniques with CSS Grid and Flexbox.",
    videoUrl: "https://www.example.com/css-layouts",
    date: "2025-03-08",
  },
];

export default function LecturesPage() {
  const [lectures, setLectures] = useState<Lecture[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setLectures(dummyLectures);
    }, 1000);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Lecture Recordings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lectures.length === 0
          ? [1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-100 p-4 rounded-lg animate-pulse">
                <div className="h-6 w-3/4 bg-gray-300 mb-2"></div>
                <div className="h-4 w-full bg-gray-300 mb-2"></div>
                <div className="h-4 w-2/3 bg-gray-300"></div>
              </div>
            ))
          : lectures.map((lecture) => (
              <div
                key={lecture.id}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-2 text-lg font-semibold">
                  <Video className="h-5 w-5 text-blue-500" />
                  {lecture.title}
                </div>
                <p className="text-sm text-gray-600 mt-2 mb-4">
                  {lecture.description}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  Date: {new Date(lecture.date).toLocaleDateString()}
                </p>
                <a
                  href={lecture.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:underline"
                >
                  Watch Lecture <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            ))}
      </div>
    </div>
  );
}
