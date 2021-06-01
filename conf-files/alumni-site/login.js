import { api_AS, api_EAS } from './api';

const name = 'alumni_site_user';
const password = 'alumni_site_password';

const handleLogin = async (username, password, publickey) => {
  let query = '/tokens';
  const res = await api_EAS.post(query, {
    credentials: {
      username: username,
      password: password,
    },
    publicKey: publickey,
  });

  if (res.status === 201) {
    sessionStorage.setItem('eureca-token', res.data.token);
  } else {
    alert('Usuário ou senha incorretos');
  }
};

const handleSubmit = async () => {
  try {
    const query = '/publicKey';
    const res = await api_AS.get(query);
    if (res) {
      let publickey = res.data.publicKey;
      await handleLogin(name, password, publickey);
    } else {
      alert('Public Key não encontrada');
    }
  } catch (err) {
    throw err;
  }
};

export default handleSubmit;
