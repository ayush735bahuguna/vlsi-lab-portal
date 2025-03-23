"use client";

import { useState, useEffect } from "react";
import { Lightbulb, Calendar, Download } from "lucide-react";

interface Assignment {
  id: string;
  title: string;
  dueDate: string;
  fileUrl: string;
}

const dummyAssignments: Assignment[] = [
  {
    id: "1",
    title: "Introduction to React",
    dueDate: "2025-04-10",
    fileUrl: "#",
  },
  {
    id: "2",
    title: "Firebase Authentication",
    dueDate: "2025-04-15",
    fileUrl: "#",
  },
  {
    id: "3",
    title: "State Management with Redux",
    dueDate: "2025-04-20",
    fileUrl: "#",
  },
  {
    id: "5",
    title: "State Management with Redux",
    dueDate: "2025-04-20",
    fileUrl: "#",
  },
];

export default function AssignmentsPage() {
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAssignments(dummyAssignments);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">All Assignments</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading
          ? Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="p-6 bg-gray-200 animate-pulse border border-gray-300 rounded-2xl h-32"
              ></div>
            ))
          : assignments.map((assignment) => (
              <div
                key={assignment.id}
                className="p-6 bg-white border border-slate-200 rounded-2xl"
              >
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-blue-500" />
                    {assignment.title}
                  </h2>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                  <Calendar className="h-4 w-4" />
                  <span>
                    Due: {new Date(assignment.dueDate).toLocaleDateString()}
                  </span>
                </div>
                <a
                  href={assignment.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
                >
                  <Download className="inline h-4 w-4 mr-2" />
                  Download Assignment
                </a>
              </div>
            ))}
      </div>
    </div>
  );
}
