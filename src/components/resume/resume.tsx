import { ResumeData } from './resumetypes';
import resumeData from '../../data/resume.json';
import './resume.scss';
import VisualAid from './visualaid';
import sunnyResume from '../../assets/resume/SunnyResume.pdf'; // ✅ correct import path

const Resume: React.FC = () => {
  const data: ResumeData = resumeData;

  return (
    <div className="resume-container" id="resume">
      <div className="content-wrapper">
        <div className="left-column">
          {data.sections.map((section) => (
            <VisualAid key={section.title} section={section} />
          ))}
        </div>

        <div className="right-column">
          <iframe
            title="Sunny Kumar Resume"
            src={sunnyResume} // ✅ local file from src/assets/resume
            width="100%"
            height="600px"
            style={{ border: 'none' }}
          ></iframe>

          {/* Optional: Download button */}
          {/* <a href={sunnyResume} download="Sunny_Kumar_Resume.pdf" className="download-btn">
            Download Resume
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Resume;
