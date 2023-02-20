const endpointUrl = new URL('https://accounts.spotify.com/api/token');

const queryParameters = new URLSearchParams({
  grant_type: 'client_credentials'
});

const required_ids = Buffer.from('987ded46633f4a2b9382690566a09c6c:9144e07e02db48bfaee0d5aed2737163');
const encoded = required_ids.toString('base64');

console.log(encoded);

const headerParameters = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic '+ encoded
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