import React from "react";
import { ResumeData } from "../types";

interface ResumePreviewProps {
  data: ResumeData;
  onDownload: () => void;
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ data, onDownload }) => {
  return (
    <div id="resume-preview" className="p-4 bg-blue-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 flex justify-center items-center mx-auto">Resume Preview</h2>
      {data.profilePic && (
        <img src={data.profilePic} alt="Profile" className="w-24 h-24 rounded-full mb-4" />
      )}
     
     <div>
      <label htmlFor="text" className="font-bold">Name:</label>
      <p className="block w-full h-10 border rounded bg-gray-100 p-2 mb-4"> {data.name}</p>
      </div>

      <div>
      <label htmlFor="text" className="font-bold">Email:</label>
      <p className="block w-full h-10 border rounded bg-gray-100 p-2 mb-4"> {data.email}</p>
      </div>

      <div>
      <label htmlFor="text" className="font-bold">Mobile No.:</label>
      <p className="block w-full h-10 border rounded bg-gray-100 p-2 mb-4"> {data.phone}</p>
      </div>
     
      <div>
      <label htmlFor="text" className="font-bold">Education:</label>
      <p className="block w-full h-10 border rounded bg-gray-100 p-2 mb-4"> {data.education}</p>
      </div>

      <div>
      <label htmlFor="text" className="font-bold">Experience:</label>
      <p className="block w-full h-10 border rounded bg-gray-100 p-2 mb-4"> {data.experience}</p>
      </div>

      <div>
      <label htmlFor="text" className="font-bold">Skills:</label>
      <p className="block w-full h-10 border rounded bg-gray-100 p-2 mb-4"> {data.skills}</p>
      </div>
      
      <div>
      <button onClick={onDownload} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Download as PDF
      </button>
      </div>


    </div>
  );
};

export default ResumePreview;
