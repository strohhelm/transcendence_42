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

#### compiles typescript to javascript (only the frontend atm)
```
npm run build  
```

#### compiles the frontend ts with tsc and runs the backens ts with tsx directly in node atm
```
npm run dev
```

#### Visit Website
```
http://localhost:8080
```
