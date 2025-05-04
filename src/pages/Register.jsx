import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../services/api';
import Button from '../components/Button';

function Register() {
  const [form, setForm] = useState({
    name: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.termsAccepted) {
      setError('Qaydalarla razılaşmaq vacibdir.');
      return;
    }
    if (form.password.length < 8) {
      setError('Şifrənin uzunluğu minimum 8 simvol olmalıdır.');
      return;
    }

    register(form)
      .then((res) => {
        const token = res.data.token;
        if (token) {
          localStorage.setItem('register-token', token);
          navigate('/');
        } else {
          setError('Qeydiyyat zamanı xəta baş verdi.');
        }
      })
      .catch(() => setError('Server xətası baş verdi.'));
  };

  return (
    <div className="max-w-2xl mx-auto p-8 my-10 bg-gray-50 rounded-xl shadow-md">
      <h1 className="text-3xl font-bold mb-2">Hesab qeydiyyatı</h1>
      <p className="text-gray-600 mb-6">Əgər artıq hesabınız varsa, giriş səhifəsinə keçin.</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Şəxsi məlumatlar */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Şəxsi məlumatlar</h2>

          <input
            type="text"
            name="name"
            placeholder="Ad"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
              </div>

        {/* Şifrə */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Şifrə</h2>
          <input
            type="password"
            name="password"
            placeholder="Şifrə"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>

        {/* Xəbər bülleteni */}
        {/* <div className="space-y-2">
          <h2 className="text-xl font-semibold">Xəbər bülleteni</h2>
          <div className="flex gap-4">
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="newsletter"
                value="yes"
                checked={form.newsletter === 'yes'}
                onChange={handleChange}
              />
              Bəli
            </label>
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="newsletter"
                value="no"
                checked={form.newsletter === 'no'}
                onChange={handleChange}
              />
              Xeyr
            </label>
          </div>
        </div> */}

        {/* Qaydalar */}
        {/* <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="termsAccepted"
            checked={form.termsAccepted}
            onChange={handleChange}
          />
          <label>
            Mən <span className="font-semibold">Qaydalar</span>-ı oxudum və razıyam
          </label>
        </div> */}

        {error && <p className="text-red-500 font-medium">{error}</p>}

        {/* Submit */}
        <Button type="submit" label="Davam et" disabled={!form.termsAccepted} />
      </form>
    </div>
  );
}

export default Register;
