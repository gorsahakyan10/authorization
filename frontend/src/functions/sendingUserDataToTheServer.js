function sendingUserDataToTheServer(userData, route) {
  return new Promise((resolve) => {
     fetch(`http://localhost:8000${ route }`, {
       method: 'POST',
       body: JSON.stringify({ ...userData })
    })
    .then((resp) => resp.json())
    .then((resp) => resolve(resp))
  })
}

export default sendingUserDataToTheServer