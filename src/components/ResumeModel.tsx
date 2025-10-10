// components/ResumeModal.tsx
'use client';

import { useState } from 'react';
import { AiOutlineClose, AiOutlineDownload } from 'react-icons/ai';

const ResumeModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const resumeUrl = '/assets/Umair-hassan-cv.pdf';
  const fileName = 'Umair-Hassan-Resume.pdf';

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-2.5 rounded-full font-semibold text-base transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
      >
        View Resume
      </button>

      {/* Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="bg-white dark:bg-gray-800 rounded-xl w-[95%] max-w-5xl h-[90vh] flex flex-col shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with title and controls */}
            <div className="bg-gray-50 dark:bg-gray-900 px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">My Resume</h3>
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                  title="Download Resume"
                >
                  <AiOutlineDownload size={18} />
                  <span>Download</span>
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                  title="Close"
                >
                  <AiOutlineClose size={22} />
                </button>
              </div>
            </div>

            {/* PDF Preview */}
            <div className="flex-1">
              <iframe
                src={`${resumeUrl}#view=fitH`}
                className="w-full h-full border-0"
                title="Resume Preview"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ResumeModal;
