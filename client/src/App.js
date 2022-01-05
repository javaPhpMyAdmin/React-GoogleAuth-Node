import './App.css';
import GoogleLogin from 'react-google-login';
import axios from 'axios'

function App() {

  const responseGoogle = (respSuccess) => {
    console.log(respSuccess);
    axios({
      method: 'POST',
      url: 'http://locahost:5000/api/googleLogin',
      data: {
        tokenId: respSuccess.tokenId,
      }
    }).then((res) => {
      console.log('Response from server', res);
    })
  }

  const responseFailureGoogle = (respFailure) => {
    console.log(respFailure);
  }

  return (
    <div className="App">
      <p>
        LOGIN WITH GOOGLE
      </p>

      <GoogleLogin
        clientId="548284117977-i6o9pkvotmfhu3mgvoj0dt2uqoel82bj.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseFailureGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default App;
