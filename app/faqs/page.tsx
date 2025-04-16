"use client";

import { useState } from "react";
import { HelpCircle, Video, ExternalLink } from "lucide-react";

interface FAQ {
  id: string;
  question: string;
  answer: string;
  videoUrl?: string;
  category: string;
}

const dummyFAQs: FAQ[] = [];

export default function FAQsPage() {
  // const [faqs] = useState<FAQ[]>(dummyFAQs);
  // const categories = Array.from(new Set(faqs.map((faq) => faq.category)));
  // return (
  //   <div className="container mx-auto px-6 py-12 max-w-4xl">
  //     <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">
  //       Frequently Asked Questions
  //     </h1>
  //     {categories.map((category) => (
  //       <div key={category} className="mb-10">
  //         <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
  //           {category}
  //         </h2>
  //         <div className="space-y-4">
  //           {faqs
  //             .filter((faq) => faq.category === category)
  //             .map((faq) => (
  //               <div
  //                 key={faq.id}
  //                 className="bg-white p-6 rounded-xl transition-transform transform hover:scale-[1.02]"
  //               >
  //                 <div className="flex items-center gap-3 font-semibold text-gray-900 text-lg">
  //                   <HelpCircle className="h-6 w-6 text-blue-600" />
  //                   <span>{faq.question}</span>
  //                 </div>
  //                 <p className="text-gray-600 mt-3 leading-relaxed">
  //                   {faq.answer}
  //                 </p>
  //                 {faq.videoUrl && (
  //                   <a
  //                     href={faq.videoUrl}
  //                     target="_blank"
  //                     rel="noopener noreferrer"
  //                     className="flex items-center gap-2 text-blue-600 mt-3 hover:underline font-medium"
  //                   >
  //                     <Video className="h-5 w-5" /> Watch Tutorial Video{" "}
  //                     <ExternalLink className="h-5 w-5" />
  //                   </a>
  //                 )}
  //               </div>
  //             ))}
  //         </div>
  //       </div>
  //     ))}
  //   </div>
  // );
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <p>Content will be uploaded soon</p>
    </div>
  );
}
