
const  jwt = require ("jsonwebtoken");
// id_token
let token = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjAyYTYxZWZkMmE0NGZjMjE1MTQ4ZDRlZmZjMzRkNmE3YjJhYzI2ZjAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIyODc4NTU5MjQwMDMtbHRqbTFrbDM3OGduOWhldjZidGkwdTFqZW1qZ2U0aWQuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiIyODc4NTU5MjQwMDMtbHRqbTFrbDM3OGduOWhldjZidGkwdTFqZW1qZ2U0aWQuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDI4ODM5Nzk0ODY4NjY3NTI3MTgiLCJlbWFpbCI6InZpamF5czA0MDQyMDAwQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoicjlLWkcteUIzeWtmM1gwTnpTSFhmQSIsIm5hbWUiOiJWaWpheSBTIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FFZEZUcDZkOFZBWUxDMmNJcHNocDNQNlN6VEJkbm5xZkJ1RzZhbEkyMnRQPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IlZpamF5IiwiZmFtaWx5X25hbWUiOiJTIiwibG9jYWxlIjoiZW4tR0IiLCJpYXQiOjE2NzIyOTE3NjksImV4cCI6MTY3MjI5NTM2OX0.d7U19XkdiAxIndHvFOFLRmLG_-j6ekQjzK-lx0UBsLJmDNAMIbSyxiPSsXOxIpuATfhsFEeivRnKiJC45YqizPS3U3eNDPr8JTbfVcmbP6VUQtS_LlgiY6fQZ5fJJRAVQMe3YxAVMEQJKcI4_7bvnCt9oO6gSccC0CNnO30-rKMDK6oNAJzkWQP8ksZXj1SPF0JCwn37ux4UkFX0IHubj8aygZnqc98LaJy8kuNlKH4Hj2BkOvDo6A30WcoCw0ZSD4nZP1BJI1viJtMah4BhZnhwdAvCsGT0GH_q14hdeaAA4DdMHvl3M9B3-bECJd6-C_2RGwEfjYUayuNMkNM6cA"
// console.log("-----------Error-------------",token);

 const decodeWithoutVerifying = (token) => {
   
      return jwt.decode(token);
   
  };
// verify
  let data = decodeWithoutVerifying(token)
  console.log("-----------Error-------------",data.email);