import React, { useState, useEffect } from 'react';
import { Container, Card, Form, Button, Alert, Spinner } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { useAPI } from '../hooks/useAPI';

const Profile = () => {
  const { user, updateUser } = useAuth();
  const { api } = useAPI();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    profile: {
      education: '',
      experience: '',
      skills: '',
      resume: ''
    }
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get('/api/applicant/profile');
        const profileData = response.data.data;
        setFormData({
          name: profileData.name || '',
          email: profileData.email || '',
          phone: profileData.phone || '',
          profile: {
            education: profileData.profile?.education || '',
            experience: profileData.profile?.experience || '',
            skills: profileData.profile?.skills || '',
            resume: profileData.profile?.resume || ''
          }
        });
      } catch (err) {
        setError(err.response?.data?.message || 'Error fetching profile');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [api]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError('');
    setSuccess('');

    try {
      const response = await api.put('/api/applicant/profile', formData);
      setSuccess('Profile updated successfully');
      updateUser(response.data.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Error updating profile');
    } finally {
      setSaving(false);
    }
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

  return (
    <Container className="py-5">
      <Card className="shadow-sm">
        <Card.Header className="bg-dark text-white">
          <h4 className="mb-0">Profile Settings</h4>
        </Card.Header>
        <Card.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={formData.email}
                disabled
                className="bg-light"
              />
              <Form.Text className="text-muted">
                Email cannot be changed
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Education</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="profile.education"
                value={formData.profile.education}
                onChange={handleChange}
                placeholder="Enter your educational background"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Work Experience</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="profile.experience"
                value={formData.profile.experience}
                onChange={handleChange}
                placeholder="Enter your work experience"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Skills</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="profile.skills"
                value={formData.profile.skills}
                onChange={handleChange}
                placeholder="Enter your skills (e.g., Programming languages, tools, soft skills)"
              />
            </Form.Group>

            <div className="d-grid gap-2">
              <Button 
                variant="dark" 
                type="submit" 
                disabled={saving}
              >
                {saving ? (
                  <>
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                      className="me-2"
                    />
                    Saving...
                  </>
                ) : (
                  'Save Changes'
                )}
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Profile;