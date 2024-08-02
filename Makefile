# Makefile

install: #installing project dependencies
	npm ci

brain-games: #run brain-games.js from /bin/brain-games.js
	node bin/brain-games.js

brain-even: #run brain-even.js from /bin/brain-even.js
	node bin/brain-even.js

publish: 
	npm publish --dry-run