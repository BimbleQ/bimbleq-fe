import API from './api';

//Login
export const login = async (username, password) => {
    try {
        const body = { username, password }; 

        console.log('Mengirim data login ke backend:', body); 
        const response = await API.post(
            '/auth/login', 
            body, 
            {
                headers: {
                    'Content-Type': 'application/json', 
                },
            }
        );

        console.log('Respons dari backend:', response.data); 
        return response.data; 
    } catch (error) {
        console.error('Error saat login:', error.response?.data || error.message);
        throw error.response?.data?.message || 'Login failed';
    }
};

//Logout
export const logout = async () => {
    try {
        const response = await API.post('/auth/logout', {}, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        console.log('Logout berhasil:', response.data); 
        return response.data;
    } catch (error) {
        console.error('Error saat logout:', error.response?.data || error.message);
        throw error.response?.data?.message || 'Logout failed';
    }
};

//validasi session
export const validateSession = async () => {
    try {
        const response = await API.get('/auth/validate'); 
        console.log('Validasi sesi berhasil:', response.data); 
        return response.data; 
    } catch (error) {
        console.error('Error saat validasi sesi:', error.response?.data || error.message);
        return { isAuthenticated: false }; 
    }
};

export default {
    login,
    logout,
    validateSession,
};