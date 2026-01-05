import React, { useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import "./contribution_map.scss";

const ContributionMap: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.15 });
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);

  // GitHub account creation year - adjust this to your actual account creation year
  const minYear = 2020;

  const labels = {
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    totalCount: `{{count}} contributions in ${selectedYear}`,
    legend: {
      less: 'Less',
      more: 'More',
    },
  };

  const handlePreviousYear = () => {
    if (selectedYear > minYear) {
      setSelectedYear(selectedYear - 1);
    }
  };

  const handleNextYear = () => {
    if (selectedYear < currentYear) {
      setSelectedYear(selectedYear + 1);
    }
  };

  return (
    <div
      className={`contribution-map-container ${isVisible ? 'visible' : ''}`}
      ref={elementRef}
    >
      <section className="contribution-map">
        <h2>My Github Contributions</h2>

        <div className="year-navigation">
          <button
            className="year-nav-button"
            onClick={handlePreviousYear}
            disabled={selectedYear <= minYear}
            aria-label="Previous Year"
          >
            <FaChevronLeft />
            <span>Previous</span>
          </button>

          <span className="current-year">{selectedYear}</span>

          <button
            className="year-nav-button"
            onClick={handleNextYear}
            disabled={selectedYear >= currentYear}
            aria-label="Next Year"
          >
            <span>Next</span>
            <FaChevronRight />
          </button>
        </div>

        <div className="react-github-calendar">
          <div className="calendar-wrapper">
            <GitHubCalendar
              username="sunnykr117"
              blockSize={18}
              fontSize={16}
              theme={{
                light: ["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196127"],
                dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
              }}
              labels={labels}
              year={selectedYear}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContributionMap;
