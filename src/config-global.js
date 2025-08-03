export const CONFIG = {
  appName: 'Coretech',
  apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:5000',
  uploadUrl: import.meta.env.VITE_UPLOAD_URL || 'http://localhost:5000/uploads',
  defaultCurrency: 'USD',
  dateFormat: 'MMM DD, YYYY',
  timeFormat: 'HH:mm',
  maxFileSize: 5 * 1024 * 1024, // 5MB
  allowedFileTypes: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
  pagination: {
    defaultPageSize: 10,
    pageSizeOptions: [5, 10, 25, 50],
  },
  jobTypes: ['Full-time', 'Part-time', 'Contract', 'Internship'],
  jobCategories: ['Engineering', 'Design', 'Marketing', 'Sales', 'Operations'],
  jobStatuses: ['Active', 'Closed', 'Draft'],
  currencies: ['USD', 'EUR', 'GBP', 'INR', 'AUD', 'CAD'],
}; 