# Makefile

install: #installing project dependencies
	npm ci

brain-games: #run brain-games.js from /bin/brain-games.js
	node bin/brain-games.js

brain-even: #run brain-even.js from /bin/games/brain-even.js
	node bin/games/brain-even.js

brain-calc: #run brain-calc.js from /bin/games/brain-even.js
	node bin/games/brain-calc.js

brain-gcd: #run brain-gcd.js from /bin/games/brain-gcd.js
	node bin/games/brain-gcd.js
	
publish: 
	npm publish --dry-run