// // Copyright (c) Microsoft.
// // Licensed under the MIT license.

// import  AuthSession from 'expo-auth-session';
// import  WebBrowser from 'expo-web-browser';
// import  SecureStore from 'expo-secure-store';
// import { compareAsc, parseISO, sub } from 'date-fns';
// import { AuthConfig } from './AuthConfig';

// const config: AuthConfiguration = {
//   clientId: AuthConfig.appId,
//    redirectUri: AuthSession.makeRedirectUri({
//     scheme: 'carteirinhaescolar',
//     path: 'auth'
//   }),
//   scopes: AuthConfig.appScopes,
//   additionalParameters: {prompt: 'select_account'},
//   serviceConfiguration: {
//     authorizationEndpoint:
//       'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
//     tokenEndpoint: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
//   },
// };

// export class AuthManager {
//   static signInAsync = async () => {
//     const result = await authorize(config);

//     console.log(result.accessToken);

//     // Store the access token, refresh token, and expiration time in storage
//     await AsyncStorage.setItem('userToken', result.accessToken);
//     await AsyncStorage.setItem('refreshToken', result.refreshToken);
//     await AsyncStorage.setItem('expireTime', result.accessTokenExpirationDate);
//   };

//   static signOutAsync = async () => {
//     // Clear storage
//     await AsyncStorage.removeItem('userToken');
//     await AsyncStorage.removeItem('refreshToken');
//     await AsyncStorage.removeItem('expireTime');
//   };

//   static getAccessTokenAsync = async () => {
//     const expireTime = await AsyncStorage.getItem('expireTime');

//     if (expireTime !== null) {
//       // Get expiration time - 5 minutes
//       // If it's <= 5 minutes before expiration, then refresh
//       const expire = sub(parseISO(expireTime), {minutes: 5});
//       const now = new Date();

//       if (compareAsc(now, expire) >= 0) {
//         // Expired, refresh
//         console.log('Refreshing token');
//         const refreshToken = await AsyncStorage.getItem('refreshToken');
//         console.log(`Refresh token: ${refreshToken}`);
//         const result = await refresh(config, {
//           refreshToken: refreshToken || '',
//         });

//         // Store the new access token, refresh token, and expiration time in storage
//         await AsyncStorage.setItem('userToken', result.accessToken);
//         await AsyncStorage.setItem('refreshToken', result.refreshToken || '');
//         await AsyncStorage.setItem(
//           'expireTime',
//           result.accessTokenExpirationDate,
//         );

//         return result.accessToken;
//       }

//       // Not expired, just return saved access token
//       const accessToken = await AsyncStorage.getItem('userToken');
//       return accessToken;
//     }

//     return null;
//   };
// }