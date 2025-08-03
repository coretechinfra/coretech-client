import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button, Alert, Spinner, Badge } from 'react-bootstrap';
import { useAPI } from '../../hooks/useAPI';
import { useAuth } from '../../contexts/AuthContext';
import { FaArrowLeft, FaBriefcase, FaDollarSign, FaMapMarkerAlt } from 'react-icons/fa';

const ApplyPosition = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const { authAPI } = useAPI();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [job, setJob] = useState(null);
  const [formData, setFormData] = useState({
    coverLetter: '',
    resume: null,
    answers: []
  });

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await authAPI.get(`/api/jobs/${jobId}`);
        setJob(response.data.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Error fetching job details');
      }
    };

    fetchJob();
  }, [jobId]);

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0]
    });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('coverLetter', formData.coverLetter);
      formDataToSend.append('resume', formData.resume);
      formDataToSend.append('answers', JSON.stringify(formData.answers));

      await authAPI.post(`/api/applications/jobs/${jobId}/apply`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      navigate('/careers/jobs/applications', { 
        state: { 
          message: 'Application submitted successfully!',
          variant: 'success'
        }
      });
    } catch (err) {
      setError(err.response?.data?.message || 'Error submitting application');
    } finally {
      setLoading(false);
    }
  };

  if (!job) {
    return (
      <Container className="py-5">
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      </Container>
    );
  }

  const formatSalary = (salary) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(salary);
  };

  return (
    <>
     <div 
        className="position-relative py-5 mb-4" 
        style={{
          background: 'linear-gradient(135deg,rgb(224, 202, 2) 0%,rgb(254, 254, 0) 100%)',
          minHeight: '200px'
        }}
      >
        <Container className="position-relative text-dark" style={{ zIndex: 1 }}>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to={`/careers/jobs/${job._id}`} className="text-dark text-decoration-none">
                 <FaArrowLeft/> Back to Job Description
                </Link>
              </li>
             
            </ol>
          </nav>
          <h1 className="display-5 fw-bold mb-2">{job.title}</h1>
          <h4 className="mb-4">{job.company}</h4>
          <div className="d-flex flex-wrap gap-4">
            <Badge bg="light" text="dark" className="d-flex align-items-center px-3 py-2">
              <FaMapMarkerAlt className="me-2" />
              {job.city}, {job.state}, {job.country}
            </Badge>
            <Badge bg="light" text="dark" className="d-flex align-items-center px-3 py-2">
              <FaBriefcase className="me-2" />
              {job.type}
            </Badge>
            <Badge bg="light" text="dark" className="d-flex align-items-center px-3 py-2">
              <FaDollarSign className="me-2" />
              {formatSalary(job.salary)}
            </Badge>
          </div>
        </Container>
      </div>
      <Container className="py-5">
      <Row className="justify-content-center">
        <Col lg={8}>
          <Card className="border-0">
            <Card.Body>
              <h2 className="mb-4">Apply for {job.title}</h2>
              
              {error && (
                <Alert variant="danger" className="mb-4">
                  {error}
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-4">
                  <Form.Label>Cover Letter</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={6}
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    style={{borderRadius: '30px', border: '3px solid #000', backgroundColor: '#f0f0f0'}}
                    required
                    placeholder="Tell us why you're the perfect candidate for this position..."
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Resume</Form.Label>
                  <Form.Control
                    type="file"
                    name="resume"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    style={{borderRadius: '30px', border: '3px solid #000', backgroundColor: '#f0f0f0'}}
                    required
                  />
                  <Form.Text className="text-muted">
                    Accepted formats: PDF, DOC, DOCX (Max size: 5MB)
                  </Form.Text>
                </Form.Group>

                {job.questions && job.questions.length > 0 && (
                  <div className="mb-4">
                    <h5 className="mb-3">Additional Questions</h5>
                    {job.questions.map((question, index) => (
                      <Form.Group key={index} className="mb-3">
                        <Form.Label>{question}</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          name={`answer-${index}`}
                          onChange={(e) => {
                            const newAnswers = [...formData.answers];
                            newAnswers[index] = e.target.value;
                            setFormData({ ...formData, answers: newAnswers });
                          }}
                          required
                        />
                      </Form.Group>
                    ))}
                  </div>
                )}

                <div className="d-flex justify-content-between">
                  <button
                    className="theme-btn btn-style-one btn-secondary"
                    onClick={() => navigate(-1)}
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="theme-btn btn-style-one"
                  >
                    {loading ? (
                      <>
                        <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                          className="me-2"
                        />
                        Submitting...
                      </>
                    ) : (
                      'Submit Application'
                    )}
                  </button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <Card className=" mb-4 border-0" style={{backgroundColor: '#f0f0f0', borderRadius: '0px'}}>
            <Card.Body>
              <h4 className="mb-3">Job Details</h4>
              <div className="mb-3">
                <strong>Job ID:</strong> {job._id}
              </div>
              <div className="mb-3">
                <strong>Position:</strong> {job.title}
              </div>
              <div className="mb-3">
                <strong>Department:</strong> {job.department}
              </div>
              <div className="mb-3">
                <strong>Location:</strong> {job.location}
              </div>
              {job.salary && (
                <div className="mb-3">
                  <strong>Salary Range:</strong> {job.salary}
                </div>
              )}
              <div className="mb-3">
                <strong>Employment Type:</strong> {job.employmentType}
              </div>
              <div className="mb-3">
                <strong>Posted Date:</strong> {new Date(job.createdAt).toLocaleDateString()}
              </div>
              {job.applicationDeadline && (
                <div className="mb-3">
                  <strong>Application Deadline:</strong> {new Date(job.applicationDeadline).toLocaleDateString()}
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
    
  );
};

export default ApplyPosition; 