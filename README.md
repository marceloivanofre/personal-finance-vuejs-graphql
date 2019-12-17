# personal-finance-vuejs-graphql

Personal finance app built with GraphQL and Vue.js

## Tips

- Script to generate a jwt secret

```
$ node -e "console.log(require('crypto').randomBytes(256).toString('base64'));"
```
