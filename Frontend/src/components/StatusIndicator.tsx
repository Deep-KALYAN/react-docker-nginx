import { useEffect, useState } from 'react';
import { checkStatus } from '../api/books';

export const StatusIndicator = () => {
  const [status, setStatus] = useState('Checking...');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkServerStatus = async () => {
      try {
        const data = await checkStatus();
        setStatus(data.status);
      } catch (error) {
        setStatus('Server unavailable');
      } finally {
        setLoading(false);
      }
    };

    checkServerStatus();
  }, []);

  return (
    <div className="status-indicator">
      {/* <h3>Server Status</h3> */}
      {loading ? (
        <p>Checking...</p>
      ) : (
        <p style={{ color: status.includes('OK') ? 'green' : 'red' }}>
          {/* {status} */}
        </p>
      )}
    </div>
  );
};