export const environment = {
  production: false,

  //***************************** LOCAL ENVIORNMENT **********************************//

  api:'https://localhost:4000/platform',
  socket_io_url: 'https://localhost:4000',

  //**************************** AWS COGNITO ENVIORNMENT *****************************//

  client_id: '48ct8hqa1tth015i8diobdleu2',
  client_secret: 'fjju3qbmr65eee6a0turbf2s2dmqbnargt2ls02r0m4l2jld8qa',
  loginURL: 'https://portfolio-platform.auth.ap-south-1.amazoncognito.com/login?' +
              'client_id=48ct8hqa1tth015i8diobdleu2&response_type=code&scope=openid+email&' +
              'redirect_uri=http://localhost:4200/callback',
  redirectURL: 'http://localhost:4200/callback',
  cognitoTokenURL: 'https://portfolio-platform.auth.ap-south-1.amazoncognito.com/oauth2/token',
  logout: 'https://portfolio-platform.auth.ap-south-1.amazoncognito.com/logout?' +
          'client_id=48ct8hqa1tth015i8diobdleu2&' +
          'logout_uri=http://localhost:4200/login'

  //**********************************************************************************//         
}

