build: yarn bundle_install
	bundle exec nanoc

clean:
	rm -rf output/*

yarn:
	yarn

bundle_install:
	bundle install

start:
	bundle exec nanoc view

watch:
	bundle exec nanoc live

check:
	bundle exec nanoc check

lint-md:
	yarn prettier --check "content/**/*.md"

format-md:
	yarn prettier --write "content/**/*.md"

check-links: build
	htmlproofer ./output --allow-hash-href --ignore-files "/assets/" --ignore-urls "/assets/files/TBC/,http://example.com,http://127.0.0.1:3000/TBC"
