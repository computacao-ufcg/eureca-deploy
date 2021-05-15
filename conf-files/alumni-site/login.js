import { api_AS, api_EAS } from "./api";

const name = "alumni_site_user";
const password = "alumni_site_password";

const handleLogin = async (name, password, publickey) => {
  let query = "/tokens";
  const res = await api_EAS
    .post(query, {
      credentials: {
        username: name,
        password: password,
      },
      publicKey: publickey,
    });

  if (res.status === 201) {
    sessionStorage.setItem("eureca-token", res.data.token);
  } else {
    alert("Usuário ou senha incorretos");
  }
};

const handleSubmit = async () => {
  let query = "/publicKey";
  const res = await api_AS.get(query, {});
  if (res) {
    let publickey = res.data.publicKey;
    await handleLogin(name, password, publickey);
  } else {
    alert("Public Key não encontrada");
  }
};

export default handleSubmit;
