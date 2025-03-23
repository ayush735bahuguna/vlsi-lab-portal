import React from "react";

const taskforces = [
  {
    name: "PDK Analysis",
    tasks: [
      "MOS Vt, Idsat measurement for different PVTs and its automation",
      "Bitcell read/write/disturb margin measurement and its automation",
      "SA offset simulation",
      "SA layout and offset calculation",
    ],
    team: {
      Design: ["Anjali", "Payal", "Ratnesh"],
      Layout: ["Vivek K", "Priyanshu T", "Bhavya"],
      Automation: ["Anushka"],
      "3rd Year Representative": ["Lakshita"],
    },
  },
  {
    name: "Design Margin",
    tasks: [
      "Create instance file, nodemap file, corners file",
      "Code margin checks",
      "Write and automate margin stimulus file",
      "Race ratio and margin limit definition",
    ],
    team: {
      Design: ["Shreyans", "Mohit S", "Ratnesh", "Vidushi", "Yogesh"],
      Layout: ["Lokesh"],
      Automation: ["Deepti", "Vanshika"],
      "3rd Year Representative": ["Priyanshu U"],
    },
  },
  {
    name: "Netlist/DRC/ LVS/Extraction/ Simulation setup flow",
    tasks: [
      "Skill programming integration in Virtuoso",
      "Generate CDL netlist for LVS and simulation",
      "Setup DRC/LVS flow using Calibre/Assura",
      "Setup extraction flow",
    ],
    team: {
      Design: ["Karan", "Vidushi", "Ayush"],
      Layout: ["Rajesh", "Dhruv"],
      Automation: ["Bhavesh", "Navodit"],
      "3rd Year Representative": ["Saloni D"],
    },
  },
  {
    name: "Verilog, Functional verification",
    tasks: [
      "Write behavior code of SRAM instance",
      "Define all xhandling conditions",
      "Define power saving modes",
      "Setup ESPCV flow",
    ],
    team: {
      Design: ["Venkatesh Gunti (IIITA)", "Jyoti", "Vansh", "Yogesh"],
      Automation: ["Aditi Singh", "Janhvi"],
      "3rd Year Representative": ["Avish Panwar"],
    },
  },
  {
    name: "Tiling and Instance making",
    tasks: [
      "Work on project silver",
      "Draw symbol for different cells",
      "Write tiling code using different constructs",
      "Tile symbol and layout",
    ],
    team: {
      Design: ["Surjan", "Ayush", "Mohit P"],
      Layout: ["Rajesh", "Gaurav"],
      Automation: ["Akshay", "Swarnim"],
      "3rd Year Representative": ["Aaditya P"],
    },
  },
  {
    name: "Documentation, Webpage, Project and IT management",
    tasks: [
      "Resolve any IT issue, create web portal",
      "Keep a repository of videos, training",
      "Identify and track risk in all the task force projects",
    ],
    team: {
      Open: ["Mohit P", "Karan", "Anjali", "Tanisha"],
      "3rd Year Representative": ["Sohalia"],
    },
  },
  {
    name: "General Team Details",
    tasks: [
      "Design Team, Layout Team, and Automation Team Members",
      "Work Assignments and Responsibilities",
    ],
    team: {
      "Design Team": [
        "Anjali",
        "Ayush",
        "Karan",
        "Mohit P",
        "Mohit S",
        "Payal",
      ],
      "Layout Team": ["Vivek K", "Amit", "Dhruv", "Gaurav"],
      "Automation Team": ["Aditi", "Akshay", "Anushka", "Bhavya"],
    },
  },
];

const TaskforcePage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Taskforce Details</h1>
      <div className="space-y-6">
        {taskforces.map((taskforce, index) => (
          <div key={index} className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">{taskforce.name}</h2>
            <ul className="list-disc list-inside mb-4">
              {taskforce.tasks.map((task, i) => (
                <li key={i} className="text-gray-700">
                  {task}
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(taskforce.team).map(([role, members], i) => (
                <div key={i} className="p-4 bg-gray-50 rounded-md">
                  <h3 className="text-xl font-medium">{role}</h3>
                  <ul className="list-disc list-inside">
                    {members.map((member: string, j: number) => (
                      <li key={j} className="text-gray-600">
                        {member}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskforcePage;
