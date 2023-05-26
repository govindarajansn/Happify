const endpointUrl = new URL('https://accounts.spotify.com/api/token');

const queryParameters = new URLSearchParams({
  grant_type: 'client_credentials'
});

const required_ids = Buffer.from('8260cb49e7274906ad6af18d9c8f63ca:08e425987a624763b8dec94b15f9986a');
const encoded = required_ids.toString('base64');

console.log(encoded);

const headerParameters = {
  'Content-Type': 'application/x-www-form-urlencoded',
  'Authorization': 'Basic ' + encoded
}

const options = {
  method: 'POST',
  headers: headerParameters
};

async function fetchAccessToken() {
  try {
    endpointUrl.search = queryParameters;
    const response = await fetch(endpointUrl, options);
  } catch (error) {
    console.log(error);
  }
}

fetchAccessToken();