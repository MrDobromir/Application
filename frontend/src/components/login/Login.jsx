import { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!username || !password) {
      alert("Username and password cannot be empty");
      return;
    }
    console.log('Login successful');
    navigate('/'); // Redirect to home after login
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1 className="login-title">MNXS</h1>
          <p className="login-subtitle">- Solutions -</p>
        </div>
        <div className="login-form">
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="login-input"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="login-button"
            disabled={!username || !password}
          >
            Login
          </button>
        </div>
      </div>
      <div className="remember-me">
        <label htmlFor="remember" className="remember-label">
          Remember me
        </label>
        <input
          type="checkbox"
          id="remember"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
          className="remember-checkbox"
        />
      </div>
    </div>
  );
}