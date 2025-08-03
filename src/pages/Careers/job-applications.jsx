import { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  CircularProgress,
  Alert,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { useAPI } from '../../hooks/useAPI';
import { CONFIG } from '../../config-global';
import Page from '../../Layout/Page';
import moment from 'moment';

export default function JobApplicationsPage() {
  const { authAPI } = useAPI();
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      setLoading(true);
      const response = await authAPI.get('/api/applications');
      setApplications(response.data.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch applications. Please try again later.');
      console.error('Error fetching applications:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleViewDetails = (application) => {
    setSelectedApplication(application);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedApplication(null);
  };

  const handleDownloadResume = async (resumeUrl) => {
    try {
    //   const response = await authAPI.get(resumeUrl, {
    //     responseType: 'blob',
    //   });
    //   const url = window.URL.createObjectURL(new Blob([response.data]));
      const url = resumeUrl;
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'resume.pdf');
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      console.error('Error downloading resume:', err);
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  return (
    <Page
      title={`My Applications - ${CONFIG.appName}`}
      description="View and manage your job applications at Shoora Technologies. Track the status of your applications and access your submitted documents."
      keywords="job applications, application status, career applications, job tracking"
    >
     <div className='container-fluid px-5 py-5'>
     <Typography variant="h4" gutterBottom>
          My Applications
        </Typography>

        {applications.length === 0 ? (
          <Typography variant="h6" color="text.secondary" align="center">
            You haven't applied for any jobs yet
          </Typography>
        ) : (
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell  sx={{fontWeight: 'bold'}}>Job Title</TableCell>
                  <TableCell  sx={{fontWeight: 'bold'}}>Applied Date</TableCell>
                  <TableCell  sx={{fontWeight: 'bold'}}>Status</TableCell>
                  <TableCell  sx={{fontWeight: 'bold'}}>Remarks</TableCell>
                  <TableCell align="right"  sx={{fontWeight: 'bold'}}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {applications?.map((application) => (
                  <TableRow key={application?._id}>
                    <TableCell>{application?.job?.title}</TableCell>
                    <TableCell>
                      {moment(application?.appliedAt).format('Do MMMM, YYYY')}
                    </TableCell> 
                    <TableCell>{application?.status}</TableCell>
                    <TableCell>{application?.notes || '-'}</TableCell>
                    <TableCell align="right">
                      <Button
                        className='rounded-5 text-capitalize'
                        variant="solid"
                        color='secondary'
                        size="small"
                        onClick={() => handleViewDetails(application)}
                      >
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
     </div>
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        {selectedApplication && (
          <>
            <DialogTitle>
              Application for {selectedApplication.job.title}
            </DialogTitle>
            <DialogContent>
              <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle1" gutterBottom>
                  Job Details
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Company: {selectedApplication.job.company}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Location: {selectedApplication.job.city}, {selectedApplication.job.state}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Type: {selectedApplication.job.type}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Applied Date: {new Date(selectedApplication.appliedAt).toLocaleDateString()}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Status: {selectedApplication.status}
                </Typography>
              </Box>

              <Box sx={{ mt: 3 }}>
                <Typography variant="subtitle1" gutterBottom>
                  Cover Letter
                </Typography>
                <Typography variant="body2" paragraph>
                  {selectedApplication?.applicationData?.coverLetter}
                </Typography>
              </Box>

              <Box sx={{ mt: 3 }}>
                <Typography variant="subtitle1" gutterBottom>
                  Resume
                </Typography>
                <Button
                  variant="outlined"
                  onClick={() => handleDownloadResume(selectedApplication?.applicationData?.resume)}
                >
                  Download Resume
                </Button>
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog}>Close</Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Page>
  );
} 