import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../services/api';
import Button from '../components/Button';
import { Cookies } from 'react-cookie';

function Login() {
  const cook = new Cookies()

  const [error, setError] = useState('');
  const [loginForm, setLoginForm] = useState({ login: '', password: '' });
  const navigate = useNavigate();

  function handleInput(e) {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
    setError('');
  }

  function handleSubmit(e) {
    e.preventDefault();
    login(loginForm)
      .then((res) => {
        if (res.data.token) {
          cook.set('login-token', res.data.token)
          navigate('/');
          alert(`xos geldiz ${loginForm.login}!`);
        } else {
          setError('Şifrə və ya istifadəçi adı yanlışdır');
        }
      })
      .catch(() => setError('Şifrə və ya istifadəçi adı yanlışdır'));
  }

  return (
   <div className='n-container'>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto py-14 px-6">
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
        <h2 className="text-xl font-semibold mb-3">Yeni müştəri</h2>
        <p className="text-sm text-gray-600 mb-6">
          Hesab yaratmaqla alış-verişin bütün imkanlarından istifadə edə bilərsiniz.
        </p>
        <Link to="/create-account">
          <Button label="Davam et" />
        </Link>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
        <h2 className="text-xl font-semibold mb-3">Daimi müştəri</h2>
        <p className="text-sm text-gray-600 mb-6">Zəhmət olmasa, hesabınıza daxil olun.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              İstifadəçi adı və ya email
            </label>
            <input
              onChange={handleInput}
              type="text"
              id="name"
              name="login"
              required
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Şifrə
            </label>
            <input
              onChange={handleInput}
              type="password"
              id="password"
              name="password"
              required
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm italic font-medium">{error}</p>
          )}

          <Button type="submit" label="Giriş" />
        </form>
      </div>
    </div>
   </div>
  );
}

export default Login;
