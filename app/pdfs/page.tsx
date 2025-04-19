"use client";

import { useState } from "react";
import { FileText, Download } from "lucide-react";

interface Document {
  id: string;
  title: string;
  fileUrl: string;
  category: string;
}

const dummyDocuments: Document[] = [
  {
    id: "1",
    title: "PDK Analysis Lab",
    fileUrl:
      "https://drive.google.com/drive/folders/1xMkBCvjMUWI4MzPpj7Kgimd_Hem7dvcy?usp=drive_link ",
    category: "",
  },
  {
    id: "2",
    title: "Layout",
    fileUrl:
      "https://drive.google.com/drive/folders/1vg0izITWH1NOHWQRsHPH38GYpO50gzYn?usp=drive_link",
    category: "",
  },
  {
    id: "3",
    title: "Design",
    fileUrl:
      "https://drive.google.com/drive/folders/1tNyyBR12geR-EdyJLcQ-WNqe6ssGKaN5?usp=drive_link",
    category: "",
  },
  {
    id: "4",
    title: "Linux",
    fileUrl:
      "https://drive.google.com/drive/folders/1OYLIpRgi7du_ej4Fw_t2SELOVp7nQNf3",
    category: "",
  },
  {
    id: "5",
    title: "External-Westand Harris",
    fileUrl:
      "https://drive.google.com/drive/folders/1bag-gyS7Bnvkwi1yRLtyK2jMV2Fdr3Vr",
    category: "",
  },
  {
    id: "6",
    title: "External-Fischer",
    fileUrl:
      "https://drive.google.com/drive/folders/1ctkCEyGiUTSvAbR4JdtRS6wRufV6Lzuu",
    category: "",
  },
];

export default function PDFsPage() {
  const [documents] = useState<Document[]>(dummyDocuments);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Reference Documents</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {documents?.map((doc) => (
          <div
            key={doc.id}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-2 mb-4">
              <FileText className="h-6 w-6 text-primary" />
              <h3 className="text-lg font-medium">{doc.title}</h3>
            </div>

            <a
              href={doc.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
            >
              <div className="flex items-center justify-center gap-2">
                <Download className="h-4 w-4" /> View
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
