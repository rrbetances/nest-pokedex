<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

#Execute in dev enviroment

1. Clone the repository
2. Execute
```
yarn install
```
3. Have Nest CLI installed
```
npm i -g @nestjs/cli
```

4. up database
```
docker-compose up -d
```

5. Clone the file __.env.template__ and rename the copy __.env__

6. Full fill the environment variables defined in ```.env```
  
7. Execute the aplication with:
```
npm run start:dev
```

8. Rebuild the db with the seed
```
http://localhost:3000/api/v2/seed
```

## Stack
* MongoDB
* Nest