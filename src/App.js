import Navbar from "./layout/Navbar.js"
import Home from "./components/Home.js"
import Album from "./components/Album.js"
import Artist from "./components/Artist.js"
import AudioAnalysis from "./components/AudioAnalysis.js"
import Playlist from "./components/Playlist.js"
import SearchedArtist from "./components/SearchedArtist.js"
import { BrowserRouter, 
  Routes, 
  Route,} 
 from "react-router-dom";
import { useEffect, useState } from "react"

 
function App() {
  const [data, setData] = useState(null);

  useEffect(()=>{
      const endpointUrl = new URL('https://accounts.spotify.com/api/token');

      const queryParameters = new URLSearchParams({
        grant_type: 'client_credentials'
      });

      const headerParameters = {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic '+ btoa('987ded46633f4a2b9382690566a09c6c:9144e07e02db48bfaee0d5aed2737163')
      }

      const options = {
        method: 'POST',
        headers: headerParameters
      };

      async function fetchAccessToken() {
        try {
          endpointUrl.search = queryParameters;
          const response = await fetch(endpointUrl, options);
          const data = await response.json();
          console.log(data);
          data.access_token = 'Bearer '+ data.access_token;
          setData(data);
        } catch (error) {
          console.log(error);
        }
      }
      fetchAccessToken();
  },[])


  return (
    <>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={data && <Home data={data}/>} />
                {/* <Route path="/album/:id" element={<Album data={data}/>} />
                <Route path="/artist/:id" element={<Artist data={data}/>} />
                <Route path="/audio_analysis/:id" element={<AudioAnalysis data={data}/>} />
                <Route path="/playlist/:id" element={<Playlist data={data}/>} />
                <Route path="/searched_artist" element={<SearchedArtist data={data}/>} /> */}
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
