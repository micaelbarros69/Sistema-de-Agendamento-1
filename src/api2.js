import axios from "axios";

class api {
  async Cadastrar(data) {
    return axios({
      url: "http://192.168.18.49:3000/usuario/cadastrar",
      method: "POST",
      timeout: 5000,
      data: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        return Promise.resolve(response);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }

  async Login(data) {
    return axios({
      url: "http://192.168.18.49:3000/",
      method: "POST",
      timeout: 5000,
      data: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        return Promise.resolve(response);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }
}
