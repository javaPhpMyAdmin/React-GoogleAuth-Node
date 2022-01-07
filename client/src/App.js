import './App.css';
import GoogleLogin from 'react-google-login';

const uri = 'http://localhost:5000/api/googlelogin'

function App() {
  const responseGoogle = async (respSuccess) => {
    try {
      const dataFromServer = await fetch(uri, {
        method: 'POST',
        body: new URLSearchParams({
          'idToken': `${respSuccess.tokenId}`
        })
      })
      const finalData = await dataFromServer.json()
      console.log('data Server', finalData);

    } catch (error) {
      console.log('error en catch', error);
    }
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
  )
}

export default App
