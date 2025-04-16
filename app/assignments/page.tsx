"use client";

import { useState, useEffect } from "react";
import { Lightbulb, Download } from "lucide-react";

interface Assignment {
  id: string;
  title: string;
  fileUrl: string;
}

const dummyAssignments: Assignment[] = [
  {
    id: "",
    title: "Cadence Logbook",
    fileUrl:
      "https://onedrive.live.com/personal/32ea012a06c155e9/_layouts/15/Doc.aspx?sourcedoc=%7Becd29b5c-ba06-4e90-a00b-a5da1fad33f3%7D&action=default&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3AvYy8zMmVhMDEyYTA2YzE1NWU5L0VWeWIwdXdHdXBCT29BdWwyaC10TV9NQlhXeUMtcnlxTU5ITzg2QTRGWTdhWFE_ZT1KSzNEVFE&slrid=05a594a1-60b2-8000-a654-41891141c3d2&originalPath=aHR0cHM6Ly8xZHJ2Lm1zL3AvYy8zMmVhMDEyYTA2YzE1NWU5L0VWeWIwdXdHdXBCT29BdWwyaC10TV9NQlhXeUMtcnlxTU5ITzg2QTRGWTdhWFE_cnRpbWU9bkdKMDdPWjczVWc&CID=1cd12da0-9ed8-4a96-b24d-676157f86145&_SRM=0:G:58&file=cadence_assignments.pptx",
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
      <h1 className="text-3xl font-bold mb-8">Assignments</h1>
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
                {/* <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                  <Calendar className="h-4 w-4" />
                  <span>
                    Due: {new Date(assignment.dueDate).toLocaleDateString()}
                  </span>
                </div> */}
                <a
                  href={assignment.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
                >
                  <Download className="inline h-4 w-4 mr-2" />
                  Open Assignment
                </a>
              </div>
            ))}
      </div>
    </div>
  );
}
