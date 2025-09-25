import { useState } from 'react';
import '../styles/Hip.css';

const Hip = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSignUp = () => {
    if (!email.trim()) {
      setMessage('Error input required');
      setIsError(true);
    } else {
      setMessage('You have successfully signed up.');
      setIsError(false);
      setEmail(''); 
    }
  };

  return (
    <section id="blog" className="hip-section">
      <h2>Stay hip with what's fresh!</h2>
      <p>
        Sign up for the weekly LUNA Newsclip to get the latest in LP releases, in-store events, and more!
      </p>
      <div className="signup-form">
        <input
          type="email"
          placeholder="Email Adress"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSignUp}>Sign Up</button>
      </div>
      {message && <p className={`message ${isError ? 'error' : 'success'}`}>{message}</p>}
    </section>
  );
};

export default Hip;
