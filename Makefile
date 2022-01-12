install-all:
	npm install -g yarn
	cd backend && yarn

	cd frontend && yarn

start:
	cd backend && yarn dev

	cd frontend && yarn dev