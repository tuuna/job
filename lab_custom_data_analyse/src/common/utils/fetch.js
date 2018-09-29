export const fetchApi = (action) => {
    return fetch(action.url,action.param)
      .then(response => response.json())
      .then(data => {
        return data;
      })
};

export const getAPI = action => {
  return fetch(action.url)
    .then(response => response.json())
    .then(data => {
      return data;
    });
};

export const postAPI = action => {
  var opts = {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(action.param)
  };
  return fetch(action.url, opts)
    .then(response => {
      return response.json();
    })
    .then(data => {
      return data;
    });
};
