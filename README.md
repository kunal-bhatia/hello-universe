# hello-universe

## Node 8 base image
```
docker build -t hello-universe .
```

```
docker run --rm -it -p 9000:9000 hello-universe
```

## Node 8 base image with multi stage
```
docker build -t hello-universe-multistage -f DockerfileMS .
```

```
docker run --rm -it -p 9000:9000 hello-universe-multistage
```

## Node 8 base image with google distroless multi stage
```
docker build -t hello-universe-distroless -f DockerfileDistroless .
```

```
docker run --rm -it -p 9000:9000 hello-universe-distroless
```

## Node 8 base image with alpine multi stage
```
docker build -t hello-universe-alpine -f DockerfileAlpine .
```

```
docker run --rm -it -p 9000:9000 hello-universe-alpine
```
