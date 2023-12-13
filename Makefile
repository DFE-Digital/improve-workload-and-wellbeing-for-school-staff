build: npm_install bundle_install
	bundle exec nanoc

clean:
	rm -rf output/*

bundle_install:
	bundle install

start:
	bundle exec nanoc view

watch:
	bundle exec nanoc live

check:
	bundle exec nanoc check
