all: build-api build-exercises

build-all: build-api build-exercises

push-all: push-api push-exercises

build-api:
	scripts/build api

build-exercises:
	scripts/build exercises

push-api: build-api
	scripts/push api

push-exercises: build-exercises
	scripts/push exercises

release: build-all push-all
