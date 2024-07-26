# Makefile

install: #installing project dependencies
	npm ci

brain-games: #run brain-games.js from /bin/brain-games.js
	node bin/brain-games.js

publish: 
	npm publish --dry-run