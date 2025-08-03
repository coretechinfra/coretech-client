import { CONFIG } from '../../config-global';
import JobList from '../../components/jobs/JobList';
import Page from '../../Layout/Page';

export default function JobsPage() {
  return (
    <Page
      title={`Jobs - ${CONFIG.appName}`}
      description="Explore career opportunities at Coretech Infrastructure Solutions. Join our team of innovators and make a difference in the IT industry."
      keywords="jobs, careers, employment, IT jobs, software engineering jobs, infrastructure careers"
    > 
      <div className="position-relative mb-5">
        <div 
          className="w-100 bg-dark" 
          style={{ 
            height: '500px', 
            backgroundImage: 'url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            position: 'relative'
          }}
        >
          <div 
            style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '100%', 
              backgroundColor: 'rgba(0,0,0,0.6)' 
            }}
          ></div>
          <div className="container h-100 position-relative">
            <div className="row h-100 align-items-center">
              <div className="col-lg-8 text-white">
                <h1 className="display-4 fw-bold mb-3">Open Positions</h1>
                <p className="fs-5 mb-4">
                  Discover exciting career opportunities at Coretech Infrastructure Solutions. We're looking for talented individuals who are passionate about innovation and making a difference in the IT industry.
                </p>
                <p className="mb-4">
                  Browse our current openings below and find the perfect role that matches your skills and aspirations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <JobList />
    </Page>
  );
} 