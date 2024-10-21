import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from 'react-router-dom';

// Utility function for API calls
const API_URL = 'http://localhost:5000';
const fetchAPI = async (endpoint, method = 'GET', body = null) => {
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` })
  };
  const response = await fetch(`${API_URL}${endpoint}`, {
    method,
    headers,
    ...(body && { body: JSON.stringify(body) })
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Something went wrong');
  }
  return response.json();
};

// Components
const Register = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '', user_type: 'startup' });
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await fetchAPI('/register', 'POST', formData);
      history.push('/login');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-5">Register</h2>
      {error && <p className="text-red-500 mb-3">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Form inputs remain the same */}
      </form>
    </div>
  );
};

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await fetchAPI('/login', 'POST', formData);
      localStorage.setItem('token', result.access_token);
      history.push('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-5">Login</h2>
      {error && <p className="text-red-500 mb-3">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Form inputs remain the same */}
      </form>
    </div>
  );
};

const StartupList = () => {
  const [startups, setStartups] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStartups = async () => {
      try {
        const result = await fetchAPI('/startups');
        setStartups(result);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchStartups();
  }, []);

  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-5">Startup Listings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {startups.map((startup) => (
          <div key={startup.id} className="border p-4 rounded shadow">
            <h3 className="text-xl font-semibold">{startup.name}</h3>
            <p className="text-gray-600">{startup.category}</p>
            <p className="mt-2">${startup.price}</p>
            <p className="mt-2 text-sm">{startup.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const CreateStartup = () => {
  const [formData, setFormData] = useState({ name: '', description: '', category: '', price: '' });
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await fetchAPI('/startups', 'POST', formData);
      history.push('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-5">List Your Startup</h2>
      {error && <p className="text-red-500 mb-3">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Form inputs remain the same */}
      </form>
    </div>
  );
};

const App = () => {
  // App component remains the same
};

export default App;
