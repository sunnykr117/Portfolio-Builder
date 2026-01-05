import { ResumeData } from './resumetypes';
import resumeData from '../../data/resume.json';
import './resume.scss';
import VisualAid from './visualaid';
import sunnyResume from '../../assets/resume/SunnyResume.pdf';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Resume: React.FC = () => {
  const data: ResumeData = resumeData;
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      className={`resume-container ${isVisible ? 'visible' : ''}`}
      id="resume"
      ref={elementRef}
    >
      <div className="content-wrapper">
        <div className="left-column">
          {data.sections.map((section, index) => (
            <div
              key={section.title}
              className={`section-wrapper stagger-${Math.min(index + 1, 6)}`}
            >
              <VisualAid section={section} />
            </div>
          ))}
        </div>

        <div className="right-column">
          <div className="pdf-viewer">
            <iframe
              title="Sunny Kumar Resume"
              src={sunnyResume}
              width="100%"
              height="600px"
              style={{ border: 'none' }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
