import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Alert, Spinner, Badge } from 'react-bootstrap';
import { useAPI } from '../../hooks/useAPI';
import { FaMapMarkerAlt, FaClock, FaBriefcase, FaCalendarAlt, FaUsers, FaDollarSign, FaGlobe } from 'react-icons/fa';
import DOMPurify from 'dompurify';
import Page from '../../Layout/Page';

const JobDescription = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const { api } = useAPI();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchJobDetails = useCallback(async () => {
    try {
      const response = await api.get(`/api/jobs/${jobId}`);
      setJob(response.data.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch job details');
    } finally {
      setLoading(false);
    }
  }, [jobId]);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchJobDetails();
  }, [fetchJobDetails]);

  const formatSalary = (salary) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(salary);
  };

  const createMarkup = (html) => {
    return { __html: DOMPurify.sanitize(html) };
  };

  if (loading) {
    return (
      <Container className="py-5 text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="py-5">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  if (!job) {
    return (
      <Container className="py-5">
        <Alert variant="warning">Job not found</Alert>
      </Container>
    );
  }

  return (
    <Page
      title={job?.title}
      description={job?.description}
      keywords={job?.keywords}
      image={job?.image}
      url={`${window.location.origin}/careers/jobs/${jobId}`}
    >
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
                <Link to="/careers/jobs" className="text-dark text-decoration-none">
                  Careers
                </Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/careers/jobs/positions" className="text-dark text-decoration-none">
                  Open Positions
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {job.title}
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

      <Container className="py-4">
        <Row>
          <Col lg={8}>
            <Card className="border-0 mb-4">
              <Card.Body>
                <div className="job-description mb-5">
                  <div dangerouslySetInnerHTML={createMarkup(job.description)} />
                </div>

                {job.requirements && (
                  <div className="job-requirements">
                    <div dangerouslySetInnerHTML={createMarkup(job.requirements)} />
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4}>
            <div className="" style={{ top: '2rem' }}>
              <Card className="border-0 mb-4" style={{ backgroundColor: '#f0f0f0', borderRadius: '0px' }}>
                <Card.Body>
                  <h5 className="mb-4">Job Overview</h5>
                  <ul className="list-unstyled">
                    <li className="mb-3 d-flex align-items-center">
                      <FaGlobe className="me-3 text-dark" />
                      <div>
                        <small className="text-muted d-block">Location</small>
                        <strong>{job.city}, {job.state}</strong>
                      </div>
                    </li>
                    <li className="mb-3 d-flex align-items-center">
                      <FaBriefcase className="me-3 text-dark" />
                      <div>
                        <small className="text-muted d-block">Job Type</small>
                        <strong>{job.type}</strong>
                      </div>
                    </li>
                    <li className="mb-3 d-flex align-items-center">
                      <FaDollarSign className="me-3 text-dark" />
                      <div>
                        <small className="text-muted d-block">Salary</small>
                        <strong>{formatSalary(job.salary)}</strong>
                      </div>
                    </li>
                    <li className="mb-3 d-flex align-items-center">
                      <FaCalendarAlt className="me-3 text-dark" />
                      <div>
                        <small className="text-muted d-block">Posted Date</small>
                        <strong>{new Date(job.postedDate).toLocaleDateString()}</strong>
                      </div>
                    </li>
                    <li className="mb-3 d-flex align-items-center">
                      <FaClock className="me-3 text-dark" />
                      <div>
                        <small className="text-muted d-block">Application Deadline</small>
                        <strong>{new Date(job.deadline).toLocaleDateString()}</strong>
                      </div>
                    </li>
                    <li className="mb-3 d-flex align-items-center">
                      <FaUsers className="me-3 text-dark" />
                      <div>
                        <small className="text-muted d-block">Applications</small>
                        <strong>{job.applicants} applicant{job.applicants !== 1 ? 's' : ''}</strong>
                      </div>
                    </li>
                  </ul>
                  <div className="d-grid gap-2 mt-4">
                    <Button 
                      size="lg"
                      variant="dark"
                      onClick={() => navigate(`/careers/jobs/${jobId}/apply`)}
                      disabled={job.status !== 'Active'}
                    >
                      {job.status === 'Active' ? 'Apply Now' : 'Applications Closed'}
                    </Button>
                  </div>
                </Card.Body>
              </Card>

              {/* <Card className="shadow-sm">
                <Card.Body>
                  <h5 className="mb-3">Share Job</h5>
                  <div className="d-flex gap-2">
                    <Button variant="outline-primary" size="sm">
                      LinkedIn
                    </Button>
                    <Button variant="outline-primary" size="sm">
                      Twitter
                    </Button>
                    <Button variant="outline-primary" size="sm">
                      Email
                    </Button>
                  </div>
                </Card.Body>
              </Card> */}
            </div>
          </Col>
        </Row>
      </Container>
    </Page>
  );
};

export default JobDescription; 