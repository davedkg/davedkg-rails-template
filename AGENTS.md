# AGENTS.md

Instructions for coding agents. The README is for humans. After a product app merges this template, delete the Template repo section and keep the App section.

## Template repo

These rules apply while the GitHub repository is `davedkg/davedkg-rails-template`.

- Product apps merge this `main` and inherit this file. Keep the App section true for a fresh app.
- Leave `bin/bundle` out of the tree. Heroku puts `/app/bin` first on `PATH`, and that stub fails to activate the Bundler version in `Gemfile.lock`.
- Verify here with local RSpec, the linters below, and CircleCI. A Heroku deploy is not a check for this repo.
- Keep Ruby at `3.4.13` in `.ruby-version`, the `Gemfile`, `Dockerfile` `RUBY_VERSION`, and the CircleCI image `cimg/ruby:3.4.13-browsers`.
- Keep Node at `24.22.3` in `.nvmrc`, `package.json` `engines.node`, `Dockerfile` `NODE_VERSION`, and CircleCI `node-version`. Keep Yarn at `1.22.22` in `package.json` `engines.yarn`.
- Keep Gemfile constraints pessimistic (`~> x.y.z`). Keep Bootstrap on 5.x. Keep the Yarn `resolutions` pin `minimatch` at `11.0.9`. Leave `prism` transitive. Keep `marcel`, `diff-lcs`, and `net-ssh` on the versions Rails, RSpec, and Kamal allow.
- Bump a major only when asked.
- Invitation rows live in `devise_invitations`, created inside `db/migrate/20241215071844_devise_create_users.rb`. Extend that migration for a fresh install. A unique index on a paranoid table is composite and starts with `deleted_at`.
- Run RSpec. `config/ci.rb` still calls `bin/rails test`, and this app has no Minitest suite.

## App

Rails 8.1, PostgreSQL, Haml, Importmap, Stimulus, Turbo, Devise with devise_invitable, Pundit, Solid Queue, Solid Cache, and Solid Cable.

### Setup

```bash
brew install postgresql
bundle && yarn
cp .env.template .env
bundle exec rake db:setup db:seed
foreman start -f Procfile.dev
```

Open http://localhost:3000/ . The root redirects to `/sign-in`. Postgres uses the Unix socket and the OS role. `config/database.yml` sets no host, port, username, or `DATABASE_URL`. Seeded logins are in the README.

### Where things go

- Views are Haml. The ERB file is `app/views/pwa/manifest.json.erb`.
- Policies are Pundit. `ApplicationPolicy` denies every action.
- Soft-deleted models include `Paranoidal` (`acts_as_paranoid`).
- Generators use UUID primary keys and skip assets, helpers, jbuilder, and controller, helper, routing, and view specs (`config/initializers/generators.rb`).
- `rails g scaffold Name field:type` writes the Haml views, the Pundit policy, and the RSpec files. Request specs are one file per verb under `spec/requests/<name>/VERB_*.rb`.
- Request and feature specs sign in with Devise's `sign_in` helper (`spec/support/devise.rb`). Policy specs use `pundit-matchers`.

### Checks

Run the commands that cover the files you changed.

- `bundle exec rspec spec/requests/users`
- `bundle exec rubocop`
- `bundle exec rake haml_lint`
- `bundle exec brakeman --quiet --no-pager --exit-on-warn --exit-on-error`
- `bundle exec fasterer`
- `bin/importmap audit` when an importmap pin changes

`bundle exec rake fix` autocorrects RuboCop. CircleCI runs RSpec, RuboCop, Brakeman, Fasterer, and haml-lint. Report the commands you actually ran.

### Specs

One `expect` per `it`. Share setup with `let`, `subject`, and `before`. Cover HTTP behavior with request specs.

### Secrets

Leave `.env`, `config/master.key`, and `coverage/` untracked.

## Skills

No project skills yet. Add one at `.agents/skills/<name>/SKILL.md`. The note in that directory explains the file.
