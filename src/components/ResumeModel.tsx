// components/ResumeModal.tsx
'use client';

import { useState } from 'react';
import { AiOutlineClose, AiOutlineDownload } from 'react-icons/ai';

const ResumeModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const resumeUrl = '/public/assets/Resume-Umair-1.pdf'; // Place your resume in public folder

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        View Resume
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white rounded-lg w-[90%] max-w-3xl p-6 relative shadow-lg">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-2xl text-gray-700 hover:text-red-500"
            >
              <AiOutlineClose />
            </button>

            {/* Download Button */}
            <a
              href={resumeUrl}
              download
              className="absolute top-4 left-4 text-2xl text-gray-700 hover:text-green-600"
              title="Download Resume"
            >
              <AiOutlineDownload />
            </a>

            {/* PDF Preview */}
            <iframe
              src={resumeUrl}
              className="w-full h-[80vh] rounded"
              title="Resume Preview"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default ResumeModal;
