"use client"

import { useState } from "react";
import ResumeForm from "../components/ResumeForm";
import ResumePreview from "../components/ResumePreview";
import { ResumeData } from "../types";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function Home() {
  const [resumeData, setResumeData] = useState<ResumeData>({
    name: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
    skills: "",
    profilePic: null,
  });

  const handleDownload = async () => {
    const resumeElement = document.getElementById("resume-preview");
    if (resumeElement) {
      const canvas = await html2canvas(resumeElement);
      const imageData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const width = pdf.internal.pageSize.getWidth();
      const height = (canvas.height * width) / canvas.width;
      pdf.addImage(imageData, "PNG", 0, 0, width, height);
      pdf.save("resume.pdf");
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 p-8">
      <div className="md:w-1/2">
        <ResumeForm onChange={setResumeData} />
      </div>
      <div className="md:w-1/2">
        <ResumePreview data={resumeData} onDownload={handleDownload} />
      </div>
    </div>
  );
}
