import { useState, useEffect } from "react";
import { CONFIG } from "../../config-global";
import JobCard from "./JobCard";
import { useAPI } from '../../hooks/useAPI';
export default function JobList() {
  const { authAPI } = useAPI();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filters, setFilters] = useState({
    type: "",
    category: "",
    search: "",
  });

  const fetchJobs = async () => {
    try {
      const response = await authAPI.get(`/api/jobs/public`, {
        params: filters,
      });
      setJobs(response.data.data);
    } catch (err) {
      setError("Failed to fetch jobs. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-50">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    );
  }

  return (
    <div className="container">
      {/* Header Stats */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <h4 className="mb-1">Available Positions</h4>
              <p className="text-muted mb-0">
                Found {jobs.length} {jobs.length === 1 ? "role" : "roles"} in {CONFIG.jobCategories.length} departments
              </p>
            </div>
           </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4">
              <div className="row g-3">
                <div className="col-md-6 col-lg-4">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="search"
                      name="search"
                      value={filters.search}
                      onChange={handleFilterChange}
                      placeholder="Search jobs..."
                    />
                    <label htmlFor="search">
                      <i className="fas fa-search me-2"></i>
                      Search positions
                    </label>
                  </div>
                </div>
                <div className="col-md-3 col-lg-3">
                  <div className="form-floating">
                    <select
                      className="form-select"
                      id="department"
                      name="category"
                      value={filters.category}
                      onChange={handleFilterChange}
                    >
                      <option value="">All Departments</option>
                      {CONFIG.jobCategories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                    <label htmlFor="department">Department</label>
                  </div>
                </div>
                <div className="col-md-3 col-lg-3">
                  <div className="form-floating">
                    <select
                      className="form-select"
                      id="location"
                      name="location"
                      value={filters.location}
                      onChange={handleFilterChange}
                    >
                      <option value="">All Locations</option>
                      <option value="remote">Remote</option>
                      <option value="onsite">On-site</option>
                      <option value="hybrid">Hybrid</option>
                    </select>
                    <label htmlFor="location">Location</label>
                  </div>
                </div>
                <div className="col-md-3 col-lg-2">
                  <div className="form-floating">
                    <select
                      className="form-select"
                      id="jobType"
                      name="type"
                      value={filters.type}
                      onChange={handleFilterChange}
                    >
                      <option value="">All Types</option>
                      {CONFIG.jobTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    <label htmlFor="jobType">Type</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Jobs List */}
      <div className="row">
        <div className="col-12">
          {jobs.length === 0 ? (
            <div className="text-center py-5">
              <div className="mb-4">
                <i className="fas fa-briefcase fa-3x text-muted"></i>
              </div>
              <h5 className="mb-2">No jobs found matching your criteria</h5>
              <p className="text-muted">
                Try adjusting your filters or check back later for new opportunities
              </p>
            </div>
          ) : (
            <div className="list-group">
              {jobs.map((job) => (
                <JobCard key={job._id} job={job} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

