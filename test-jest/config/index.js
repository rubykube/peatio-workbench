const fs = require('fs')
const base64 = require('base-64')


module.exports = {
  PEATIO_URL: process.env["PEATIO_API_URL"] || 'https://platform.qa.etorox.io/api/v2/',
  PEATIO_MANAGEMENT_URL: process.env["PEATIO_MANAGEMENT_API_URL"] || 'https://platform.qa.etorox.io/management_api/v1',
  
  MANAGEMENT_API_SIGNS: {
    "firstSign": {
      algorithm: "RS256",
      private_key: base64.decode(process.env["JWT_SHARED_SECRET_KEY"])
    }
  },


  JWT_TEST_USER: {
    iat: Math.round(new Date().getTime() / 1000) - 1,
    exp: Math.round(new Date().getTime() / 1000) + 4 * 3600,
    sub: 'session',
    iss: 'barong',
    aud: [
      'peatio',
      'barong'
    ],
    jti: 'D304AF7134FC22506E06CF93',
    uid: 'ID53B3505544',
    email: 'admin@etorox.io',
    role: 'admin',
    level: 3,
    state: 'active'
  },
  
  
  BARONG_URL: process.env["BARONG_API_URL"] || 'https://account.qa.etorox.io/api/v1',
  BARONG_TEST_USER: {
    "email":"admin@etorox.io",
    "password":"12345678",
    "application_id":"4bf6a778754b0b2dd8b10a94c66511d140cd9a13cec9815ed590092bdab6e0b6"
  },
  
  BARONG_JWT_PRIVATE_KEY: base64.decode(process.env["JWT_SHARED_SECRET_KEY"]),
  BARONG_JWT_PUBLIC_KEY: base64.decode(process.env["JWT_PUBLIC_KEY"]),
}

