export const API_KEY = '';
export const BASE_URL = process.env.REACT_APP_BASE_URL;

export const endpoints = {
  // Auth
  register: `${BASE_URL}/api/auth/register`,
  login: `${BASE_URL}/api/auth/login`,
  forgotPassword: `${BASE_URL}/api/auth/forgot-password`,
  resetPassword: `${BASE_URL}/api/auth/reset-password`, 
  microsoftAuth: `${BASE_URL}/api/auth/microsoft`,

  // Student
  updateStudent: `${BASE_URL}/api/student/user`,
  getStudent: `${BASE_URL}/api/student/user`,
  verifyStudent: `${BASE_URL}/api/student/verification`,
};