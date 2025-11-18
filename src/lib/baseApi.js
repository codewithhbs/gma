
// Base API URL
export const BASE_API_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3002';

// Helper function to build full API endpoint
export const apiUrl = (endpoint) => `${BASE_API_URL}${endpoint}`;
