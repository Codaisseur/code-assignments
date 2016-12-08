# code-assignments

> Authentication for code-runner services

## About

This project uses [Feathers](http://feathersjs.com). An open source web  framework for building modern real-time applications.

## Endpoints for authentication

`POST /users`
Creating an account with local authentication
```bash
curl -X POST \
-H 'Content-Type: application/json' \
-d '{ "email": "email@example.com", "password": "mypassword" }' \
http://localhost:3030/users
```

`POST /auth/local`
Login with local authentication using the above credentials
```bash
curl -X POST \
-H 'Content-Type: application/json' \
-d '{ "email": "email@example.com", "password": "mypassword" }' \
http://localhost:3030/auth/local
```

    TODO:

    Github OAuth2: POST /auth/github
    Google OAuth2: POST /auth/google


## Changelog

__0.1.0__

- Initial release

## License

Copyright (c) 2015

Licensed under the [MIT license](LICENSE).
