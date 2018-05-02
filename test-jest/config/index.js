const fs = require('fs')
const base64 = require('base-64')

module.exports = {
  PEATIO_URL: process.env["PEATIO_API_URL"] || 'https://platform.qa.etorox.io/api/v2/',
  PEATIO_MANAGEMENT_URL: process.env["PEATIO_MANAGEMENT_API_URL"] || 'https://platform.qa.etorox.io/management_api/v1',

  MANAGEMENT_API_SIGNS: {
    "firstSign": {
      algorithm: "RS256",
      private_key: base64.decode("LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQ0KTUlJRW93SUJBQUtDQVFFQXdzbWsyR0pqU2pXRWlQUDZXSXRjdzU2UTNzQUV6aGdKdVBvY3B4WUY4czR3Y0RTbg0KdUk0WFJmeWRxdnFoSFUxVXpqdEFMRmJ3QUMvMGUvdng0bGozVnJBRnQ4cXo4d3hGSk5hck9LdUZaTG5ZV3l6NQ0KOFVlZVFWdFFIMGJwZXM0YTFtRXR0M1YraVpmbkkvemJ4bW9Gc2ROMThPYWZGVGtSU2ZFb1dSMUFMeVJJVmEzMg0KalcxbDlxYXhyYVdoTGdmUE9KVU52U3FaREloM1RSM0IrVnVNL1JOV0dVNVM5SjhhRE13NVdnN2pqdEJaZzJmWg0KbDFlV09GQWJXOEdyVjJ6bGpaYXFpWmpGSC9iNmpFaXFRdWkzQjNManZFUHNBR1dibisvbzRwSm9EWXlIM09tUA0Kak5OQ1hZbGw3M3RpTU9TdHd2aXFTazR0QXM4RnlxUElFVFZOZlFJREFRQUJBb0lCQUV0SkNHK2h4Mko5UU5aMg0KQmdLSENybUk1ZEZTUWdrdC9VUURWMk8wL1dPVkVkK3NXazdZakdJK2V1b0VxSlRjdUxSazdpNjFBMW52THYxaw0KcVY2a3FDUlhNRDZURis0T2hnTHcvWWlQc3FUMXQ0dTEzSHpIQTRHYk8ySjdVKzVsRHJaaEpQeE5helRmQXpWRA0KbStZYVFFMDB2OWIySy9KVjlqcXYvTHBFdGZRQjBnMTcvZFRtV3JvNTdFczgvMTdCWGoyeWpNYWhnbTlMNDhpZA0KNTZ1UFZ5T0JBK21xWFZMSEEvMi9EQmlmdGFGTnJ5NXRvSTZUWW9iRkl2VWc5aXhrdm1YMjB0SDFIRGh1ckpibg0KdzZLbFZJeWJ0ai9ueVRYTzZvSUtTWFFCS3A3blc0dTd4ZlQ1VGRVdFp1VEVqdE83TEVuNmRNVW45MEhaUU8vUQ0KUC9Ud2Z3RUNnWUVBL0pRcG5qS3B4R25iM0szY042YVdmN2ZyMFZjc3BVclNKVUM4c1JTb1FLMEdvNWp1MHlvag0KQTJRd3lUQmpZOFRPbTdRZEgrWHlxSGI2MHRSUjJpdjJZWjBaaWhjVEt6ekUxQWVMQXlQLzNUakZHRGdGNUdNOQ0KMTJiQWcreFJ3T0xseDVONDJza245SURaLzdUY3FCMHRVc2dmNjI2MGFnckZJSWVqUTN6RmVDRUNnWUVBeFcwVw0KQjBwbzZ3VGZUWCthRmtZQlRKbndsV3p4UklwbjE0MGo2dzlIZzZzSEVFM1JLd3Uxa1NtOUhXbk83aW0rVGl2Ug0KMXk2VE9kczFuS3lDTXFvY0NIMkdKM1FVT1R1UEZKTE9QZ3hubmFkTkM4YzFUbnhFWjhkZ2VpUjBJVEZoOE41TQ0KQ3VLYVVTRzRqaURMQ2N0K21MZ3lQZkVwSVNvS2VVclZMdUpWZWQwQ2dZRUF0MWlDQVhFN1pQV0hBT0UvNnpIRg0KSzc4QnNudDZVQjVJLzN2SHZTK0dselJDam4wVVdEck5JY2dYMWVPSE1rUUp5bUxyaFYweFVYTFV6amdMbHJpMA0KNTlUWFZqTTcyZllKMXZRR3grZlk4dWdqd2xuZ2hSSTVNT1JJdVRyUmVaZjdQbTFobkVmSzlpU1dtcFRhWERxWg0Kek82eXBQOCtmWCtGNndBcTFuRjdFcUVDZ1lCMkpkWXMvc2JTL3ROejJZMHBEelB2MTZBMmpEL0d1TjEwRGE4Vg0KR011L2JEYUo5MGZaN3VQMXYzakJoWFNrNnE1TXNjU2VkZXo5anNZQ3dPb1p6OXQrNlQvRGxLQVZzQ0xzT1A3Yg0KK3loM0hJdnJKSWd1TkFmcjQxRkZSMU9JR2JsM0lGRjVvaXFmcXdKN2EveVdIQVhpOXpoNkFUeVA4RXpjVVlCSw0KMG9BOHNRS0JnSHVlQnhiVTkyQkVMRU5OWGh6TkIrbVFyMHdQYnk3NFZzWHdMY09EZG1nTGtSS1RtcHd1eVN2WQ0Kd2hyZWNpM1YvbW5YdzNFeFNqa1hoZ2lkd1I4QmdseVJkTHIxL1FOTkpLcHdyeFM1cXA2UFlDR1NXbHZjRk5DVw0KbXFESTAzemFaQzQ0eDd2REp5elVTQzhmcU1Dak41bXFYU3hlaDg5bTdramZ0dVUyY1NjdQ0KLS0tLS1FTkQgUlNBIFBSSVZBVEUgS0VZLS0tLS0=")
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

  TEST_DATA_DIR: "/opt/test-data/",
  
  BARONG_URL: process.env["BARONG_API_URL"] || 'https://account.qa.etorox.io/api/v1',
  BARONG_TEST_USER: {
    "email":"admin@etorox.io",
    "password":"12345678",
    "application_id":"4bf6a778754b0b2dd8b10a94c66511d140cd9a13cec9815ed590092bdab6e0b6"
  },
  
  BARONG_JWT_PRIVATE_KEY: base64.decode(process.env["JWT_SHARED_SECRET_KEY"]),
  BARONG_JWT_PUBLIC_KEY: base64.decode(process.env["JWT_PUBLIC_KEY"]),
}

