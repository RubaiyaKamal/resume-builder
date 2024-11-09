import React, { ChangeEvent, useState } from "react";
import { ResumeData } from "../types";

interface ResumeFormProps {
  onChange: (data: ResumeData) => void;
}

const ResumeForm: React.FC<ResumeFormProps> = ({ onChange }) => {
  const [formData, setFormData] = useState<ResumeData>({
    name: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
    skills: "",
    profilePic: null,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);
    onChange(updatedData);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedData = { ...formData, profilePic: reader.result as string };
        setFormData(updatedData);
        onChange(updatedData);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-4 bg-blue-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 flex justify-center items-center mx-auto">Resume Information</h2>
    
    
     <div>
      <label htmlFor="text" className="font-bold">Name:</label>
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        value={formData.name}
        onChange={handleChange}
        className="block w-full p-2 mb-4 border rounded"
      />
      </div>

      <div>
      <label htmlFor="text" className="font-bold">Email:</label>
      <input
        type="email"
        name="email"
        placeholder="Enter your Email address"
        value={formData.email}
        onChange={handleChange}
        className="block w-full p-2 mb-4 border rounded"
      />
      </div>

      <div>
      <label htmlFor="text" className="font-bold">Mobile No.:</label>
      <input
        type="text"
        name="phone"
        placeholder="Enter your mobile number"
        value={formData.phone}
        onChange={handleChange}
        className="block w-full p-2 mb-4 border rounded"
      />
      </div>

      <div>
      <label htmlFor="text" className="font-bold">Education:</label>
      <textarea
        name="education"
        placeholder="Write about your education"
        value={formData.education}
        onChange={handleChange}
        className="block w-full p-2 mb-4 border rounded"
      />
      </div>

      <div>
      <label htmlFor="text" className="font-bold">Experience:</label>
      <textarea
        name="experience"
        placeholder="Write about your experience"
        value={formData.experience}
        onChange={handleChange}
        className="block w-full p-2 mb-4 border rounded"
      />
      </div>

      <div>
      <label htmlFor="text" className="font-bold">Skills:</label>
      <textarea
        name="skills"
        placeholder="Write about your skills"
        value={formData.skills}
        onChange={handleChange}
        className="block w-full p-2 mb-4 border rounded"
      />
      </div>


      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="block w-full mb-4"
      />
    </div>
  );
};

export default ResumeForm;
