import axios from "axios";

export const registerUser = async (values) => {
  return new Promise((resolve, reject) => {
    let data = JSON.stringify(values);
    var config = {
      method: "post",
      url: `http://localhost:8080/api/register`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config).then(function (response) {
      if (response.data.success === true) {
        resolve(response.data);
      } else {
        resolve([]);
      }
    });
  });
};


export const loginUser = async (values) => {
  return new Promise((resolve, reject) => {
    let data = JSON.stringify(values);
    var config = {
      method: "post",
      url: `http://localhost:8080/api/login`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config).then(function (response) {
      if (response.data.success === true) {
        resolve(response.data);
      } else {
        resolve(response.data);
      }
    });
  });
};


export const otpVerify = async (values) => {
  return new Promise((resolve, reject) => {
    let data = JSON.stringify(values);
    var config = {
      method: "post",
      url: `http://localhost:8080/api/verifyOtp`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config).then(function (response) {
      if (response.data.success === true) {
        resolve(response.data);
      } else {
        resolve([]);
      }
    });
  });
};
