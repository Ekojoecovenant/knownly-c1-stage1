export function fetchHome() {
  return 'Backend server running';
}

export function fetchStatus() {
  return {
    status: 'running',
    message: 'Server is active',
  };
}
