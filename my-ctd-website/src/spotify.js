// https://github.com/spotify/web-api-examples/blob/master/authorization/authorization_code_pkce/public/app.js
// https://developer.spotify.com/documentation/web-api/tutorials/code-pkce-flow

const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID
const redirectUrl = 'http://localhost:8080'

const authorizationEndpoint = "https://accounts.spotify.com/authorize";
const tokenEndpoint = "https://accounts.spotify.com/api/token";
const scope = 'user-read-private user-read-email';

const currentToken = {
    get access_token() { return localStorage.getItem('access_token') || null; },
    get refresh_token() { return localStorage.getItem('refresh_token') || null; },
    get expires_in() { return localStorage.getItem('refresh_in') || null; },
    get expires() { return localStorage.getItem('expires') || null; },

    save: function (response) {
        const { access_token, refresh_token, expires_in } = response;
        localStorage.setItem('access_token', access_token);
        localStorage.setItem('refresh_token', refresh_token);
        localStorage.setItem('expires_in', expires_in);

        const now = new Date();
        const expiry = new Date(now.getTime() + (expires_in * 1000));
        localStorage.setItem('expires', expiry);
    }
};