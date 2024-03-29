[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/SunsetFrost/anime-backend) 

# Anime backend
A simple demo server Based on Egg + Typescript, get interesting ACG data provided by third-party.

- [Anime backend](#anime-backend)
  - [QuickStart](#quickstart)
    - [Development](#development)
    - [Deploy](#deploy)
    - [Npm Scripts](#npm-scripts)
    - [Requirement](#requirement)
  - [Anilist](#anilist)
  - [Pokemon](#pokemon)
    - [Pokemon GraphQL Bug](#pokemon-graphql-bug)
    - [采用将图片缓存到本地](#采用将图片缓存到本地)
  - [Nginx图片服务器](#nginx图片服务器)
    - [Docker部署Nginx](#docker部署nginx)
  - [Nginx转发请求至本地端口](#nginx转发请求至本地端口)
    - [转发至本地Egg后台端口](#转发至本地egg后台端口)
  - [Code Format](#code-format)

## QuickStart

### Development
```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

Don't tsc compile at development mode, if you had run `tsc` then you need to `npm run clean` before `npm run dev`.

### Deploy

```bash
$ npm run tsc
$ npm start
```

### Npm Scripts

- Use `npm run lint` to check code style
- Use `npm test` to run unit test
- se `npm run clean` to clean compiled js at development mode once

### Requirement

- Node.js 8.x
- Typescript 2.8+

## Anilist
- use api provided by https://github.com/AniList/ApiV2-GraphQL-Docs  
- use GraphQL to request data

## Pokemon
- use api provided by https://beta.pokeapi.co/graphql/console/  
- use GraphQL to request data

### Pokemon GraphQL Bug
cannot find the picture data of pokemon, only get null
```
{"id":1,"sprites":"{\"front_default\": null, \"front_female\": null, \"front_shiny\": null, \"front_shiny_female\": null, \"back_default\": null, \"back_female\": null, \"back_shiny\": null, \"back_shiny_female\": null, \"other\": {\"dream_world\": {\"front_default\": null, \"front_female\": null}, \"official-artwork\": {\"front_default\": null}}, \"versions\": {\"generation-i\": {\"red-blue\": {\"front_default\": null, \"front_gray\": null, \"back_default\": null, \"back_gray\": null}
```

- find out it's a bug
https://github.com/PokeAPI/pokeapi/issues/614


### 采用将图片缓存到本地
https://github.com/PokeAPI/sprites#sprites

## Nginx图片服务器
### Docker部署Nginx
```bash
// 拉取镜像
docker pull nginx:stable

```

## Nginx转发请求至本地端口
### 转发至本地Egg后台端口
```
server{
  listen 80;
  server_name  tomcat.shaochenfeng.com;
  index  index.php index.html index.htm;

  location / {
    proxy_pass  http://127.0.0.1:8080; # 转发规则
    proxy_set_header Host $proxy_host; # 修改转发请求头，让8080端口的应用可以受到真实的请求
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  }
}

// 在配置proxy_pass代理转发时，如果后面的url加/，表示绝对根路径；如果没有/，表示相对路径
```

## Code Format
tslint + prettier