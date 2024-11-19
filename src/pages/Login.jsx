import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/authService'; 

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault(); 
        setError('');

        try {
            const response = await login(username, password);
            console.log('Login berhasil:', response);

            //redirect based on role user
            if (response.role === 'admin') {
                navigate('/admin-dashboard');
            } else if (response.role === 'pengajar') {
                navigate('/teacher-dashboard');
            } else if (response.role === 'siswa') {
                navigate('/student-dashboard');
            }
        } catch (err) {
            setError(err); //show error jika login gagal
        }
    };

    return (
        <section>
            <div className="left">
                <div className="container mx-auto">
                    <p className="text-6xl text-white">Bimbel</p>
                    <p className="text-6xl text-brandQ">Q</p>
                </div>
            </div>
            <div className="flex justify-center py-10 items-center bg-lightgray">
                <form
                    className="bg-white col-lg-6 col-xl-4 px-10 py-4 rounded-md"
                    onSubmit={handleLogin}
                >
                    <p className="text-2xl font-bold text-gray-600 mb-7">Masuk</p>
                    <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 bg-lightgray border-textfield">
                        <input
                            className="pl-2 outline-none border-none bg-lightgray"
                            type="text"
                            placeholder="Username"
                            value={username} //binding input to state
                            onChange={(e) => setUsername(e.target.value)} //update state
                        />
                    </div>
                    <div className="flex items-center border-2 py-2 px-3 rounded-2xl bg-lightgray border-textfield">
                        <input
                            className="pl-2 outline-none border-none bg-lightgray"
                            type="password" 
                            placeholder="Password"
                            value={password} //binding input to state
                            onChange={(e) => setPassword(e.target.value)} //update state
                        />
                    </div>
                    <button
                        type="submit"
                        className="container mx-center my-3 rounded-2xl text-white bg-tombol border border-8 item-center"
                    >
                        Masuk
                    </button>
                    {error && <p className="text-red-500 mt-4">{error}</p>}
                </form>
            </div>
        </section>
    );
};

export default Login;