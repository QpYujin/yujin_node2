interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  SCOPE: string;
}

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: '0mxwpb5RLX5142oHCCjWRFjmk5LNENQy',
  CLIENT_DOMAIN: 'ramani.auth0.com',
  AUDIENCE: 'http://localhost:3001/api/',
  REDIRECT: 'http://localhost:4200/callback',
  SCOPE: 'openid profile email'
};

