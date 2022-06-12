const URL = "http://localhost:5000";

//this value isnt used anywhere, just used to test that the result coming back from the BE is correct
let fetchedResult = 0;

//return the current stored result in the backend
async function getResult() {
  const response = await fetch(URL + "/getResult", {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log("getResult data was: ", data);
  return data;
}

//Send data to backend to perform the math operations
async function sendData(dataToSend) {
  await fetch(URL + "/sendData", {
    method: "PATCH",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({dataToSend: dataToSend}),
  }).then(
    (response) => {
      if (response.status !== 200) {
        console.log(`Something went wrong: http-status=${response.status}`);
        return;
      }
      response.text().then((data) => {
        fetchedResult = JSON.parse(data).body.data;
        console.log(fetchedResult)
      });
    },
    (error) => {
      console.log(`There was an error: error=${error}`);
    }
  );
}

export { sendData, getResult };