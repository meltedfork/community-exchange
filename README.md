# README

## Useful commands

Stop db docker container:

```
docker ps -a
docker stop <container-name>
docker rm <container-name>
```

kill PIDs:

```
sudo lsof -i:5432
sudo kill -15 <pid>
```
