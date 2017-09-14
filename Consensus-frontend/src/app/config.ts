interface Config {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  REDIRECT: string;

  REST_API_URL:string
}

export const CONFIG: Config = {

  CLIENT_ID: 'hluGymViD3Dm1GZ3qm8Om7xwKgJkCwWu',

  CLIENT_DOMAIN: 'qpairio.auth0.com',

  REDIRECT: 'http://localhost:4200/callback',

  REST_API_URL:'localhost:3001'
};

