import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAPI } from '../../hooks/useAPI';

export default function JobCard({ job }) {
  const navigate = useNavigate();
  const { authAPI } = useAPI();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    jobId: job._id,
    name: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: '',
  });

  const handleApply = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/careers/login', { state: { from: '/careers/positions' } });
      return;
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setError('');
    setFormData({
      name: '',
      email: '',
      phone: '',
      resume: null,
      coverLetter: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        resume: file,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        if (formData[key] !== null) {
          formDataToSend.append(key, formData[key]);
        }
      });

      await authAPI.post(`/api/applications/jobs/${job._id}/apply`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      handleClose();
      navigate('/careers/jobs/applications');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to submit application. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="list-group-item list-group-item-action border-0 mb-3 rounded hover-shadow" onClick={() => navigate(`/careers/jobs/${job._id}`)}>
        <div className="d-flex justify-content-between align-items-start p-3">
          <div className="flex-grow-1">
            <div className="d-flex align-items-center mb-1">
              <h5 className="mb-0 me-2">{job.title}</h5>
              <span className="badge bg-primary me-2">{job.type}</span>
              <span className="badge bg-secondary">{job.category}</span>
            </div>
            
            <div className="text-muted mb-2">
              <i className="fas fa-building me-2"></i>
              {job.company}
              <span className="mx-2">•</span>
              <i className="fas fa-map-marker-alt me-2"></i>
              {job.city}, {job.state}, {job.country}
            </div>

            {/* <div className="mb-2 job-description">
              <div dangerouslySetInnerHTML={{ __html: job.description.substring(0, 150) + '...' }} />
            </div> */}

            <div className="d-flex align-items-center text-muted small">
              <div className="me-3">
                <i className="fas fa-clock me-1"></i>
                Posted {new Date(job.postedDate).toLocaleDateString()}
              </div>
              <div className="me-3">
                <i className="fas fa-calendar me-1"></i>
                Deadline: {new Date(job.deadline).toLocaleDateString()}
              </div>
              <div>
                <i className="fas fa-users me-1"></i>
                {job.applicants} applied{job.applicants !== 1 ? 's' : ''}
              </div>
            </div>
          </div>

          <div className="ms-3 d-flex flex-column align-items-end justify-content-between">
            <div className="text-end mb-2">
              {/* <div className="text-primary fw-bold mb-1">{job.currency} {job.salary}</div> */}
              <span className={`badge ${job.status === 'Active' ? 'bg-success' : 'bg-danger'}`}>
                {job.status}
              </span>
            </div>
            <button 
              className="btn btn-outline-dark rounded-pill px-4 border-3 fw-bold"
              onClick={handleApply}
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {open && (
        <>
          <div className="modal fade show d-block" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header border-0">
                  <h5 className="modal-title">Apply for {job.title}</h5>
                  <button 
                    type="button" 
                    className="btn-close" 
                    onClick={handleClose}
                  ></button>
                </div>
                
                <form onSubmit={handleSubmit}>
                  <div className="modal-body">
                    {error && (
                      <div className="alert alert-danger" role="alert">
                        {error}
                      </div>
                    )}
                    
                   

                    <div className="mb-3">
                      <label htmlFor="coverLetter" className="form-label">Cover Letter</label>
                      <textarea
                        className="form-control"
                        id="coverLetter"
                        name="coverLetter"
                        rows="4"
                        value={formData.coverLetter}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="resume" className="form-label">Resume</label>
                      <input
                        type="file"
                        className="form-control"
                        id="resume"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        required
                      />
                      {formData.resume && (
                        <div className="form-text">
                          Selected file: {formData.resume.name}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="modal-footer border-0">
                    <button 
                      type="button" 
                      className="btn btn-light" 
                      onClick={handleClose}
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit" 
                      className="btn btn-primary"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Submitting...
                        </>
                      ) : (
                        'Submit Application'
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show"></div>
        </>
      )}
    </>
  );
} 