import React, { useState } from 'react';
import axios from 'axios';
import './MainPage.css';

const MainPage = () => {
  const [query, setQuery] = useState('');
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://remotive.io/api/remote-jobs`, {
        params: {
          search: query,
        },
      });

      if (response.data.jobs.length === 0) {
        setError('No jobs found');
      } else {
        setJobs(response.data.jobs);
      }
      setLoading(false);
    } catch (error) {
      setError('Error fetching jobs');
      setLoading(false);
    }
  };

  return (
    <div className="main-page">
      <h1 className="main-title">Job Search</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for jobs"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      <div className="job-results">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div key={job.id} className="job-card">
              <h2 className="job-title">{job.title}</h2>
              <p className="job-company">{job.company_name}</p>
              <p className="job-location">{job.candidate_required_location}</p>
              <a href={job.url} target="_blank" rel="noopener noreferrer" className="job-link">
                View Job
              </a>
            </div>
          ))
        ) : (
          !loading && <p className="no-jobs">No jobs found</p>
        )}
      </div>
    </div>
  );
};

export default MainPage;
