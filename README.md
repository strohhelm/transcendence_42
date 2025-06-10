# Transcendence

## how to setup dev container:
```
git@github.com:strohhelm/transcendence_42.git
```

```
cd transcendence_42
```

```
docker compose up
```
```
docker exec -it app bash
```
```
npm run build
```
```
npm run start
```
#### open another terminal
```
docker exec -it app bash
```
Test For now:
```
curl localhost:8080/ping
```
