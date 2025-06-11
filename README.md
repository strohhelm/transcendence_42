# Transcendence

## how to setup dev container:
```
git clone git@github.com:strohhelm/transcendence_42.git
```

```
	cd transcendence_42
```
```
	docker compose up 
```
#### if you update something in dockerfile
```
	docker compose up --build
```

#### enter the container in the terminal
```
	docker exec -it app zsh
```

## Commands

#### compiles typescript to javascript
```
	npm run build  
```

#### runs the specified javascript file in node -> runs the server
```
	npm run start
```
#### runs a nodemon too that watches changes in the ./app folder and immediately transpiles and restarts the server. Only for development
```
	npm run dev
```

#### open another terminal
```
docker exec -it app bash
```
#### Test For now:
```
curl localhost:8080/ping
```
