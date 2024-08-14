# Makefile

install: #installing project dependencies
	npm ci

brain-even: #run brain-even.js from /bin/games/brain-even.js
	node bin/games/brain-even.js

brain-calc: #run brain-calc.js from /bin/games/brain-even.js
	node bin/games/brain-calc.js

brain-gcd: #run brain-gcd.js from /bin/games/brain-gcd.js
	node bin/games/brain-gcd.js

brain-progression: #run brain-progression.js from /bin/games/brain-progression.js
	node bin/games/brain-progression.js
	
publish: #make fake global publishing
	npm publish --dry-run