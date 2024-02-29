import { Link, useNavigate } from 'react-router-dom';
import useInput from '../utils/useInput';
import { register } from '../data/network-data';
import { useContext } from 'react';
import LocaleContext from '../context/localeContext';

export default function Registration() {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [confirmPassword, onConfirmPasswordChange] = useInput('');

  const { locale } = useContext(LocaleContext);

  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('password and password confirm must me same');
      return;
    }

    await onRegisterHandler({ name, email, password });
  };

  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate('/');
    }
  }

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 dark:border rounded ">
      <h2 className="sm:mx-auto sm:w-full sm:max-w-smmt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        {locale === 'id' ? 'Registrasi Pengguna Baru' : 'Sign up'}
      </h2>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={onSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              {locale === 'id' ? 'Nama' : 'Name'}
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="name"
                required
                className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={onNameChange}
                value={name}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={onEmailChange}
                value={email}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={onPasswordChange}
                value={password}
                minLength={6}
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="confirm"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                {locale === 'id' ? 'Konfirmasi password' : 'Confirm Password'}
              </label>
            </div>
            <div className="mt-2">
              <input
                id="confirm"
                name="confirm"
                type="password"
                required
                className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={onConfirmPasswordChange}
                value={confirmPassword}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {locale === 'id' ? 'Daftar' : 'Sign Up'}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          {locale === 'id' ? 'Sudah punya akun' : 'Already have account'} ?
          <Link
            to="/"
            className="font-semibold ml-2 leading-6 text-indigo-600 hover:text-indigo-500 underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
