# Azurite

Azurite is a prototype CMS (content management system) built by Andrew Mitchell, Mathew Webb, and Noah Winkler.

## Early Development

This CMS is currently in very early development. It is pre-alpha quality software and should only be used in non-critical and non-production environments.
That said, you can help shape our development. Feel free to submit bug reports, pull requests, and discussion posts.
We currently have no code guidelines, test requirements, or pull request process but we plan to implement these once we get a minimum viable product finished.
This repo and its contents are available under the MIT license.

## Getting Started

We are currently using Node **20**.

### Package Management

This project is using Yarn as the package manager. Please do not run NPM.

The important commands to know are:

- `yarn` or `yarn install`. This installs all your packages (similar to `npm install`).
- `yarn add <packagename>`. This will add a new package to the project (similar to `npm install <packagename>`).
- `yarn add -D <packagename>`. This adds a package as a development dependency.
- `yarn run <script>`. Similar to `npm run <script>`.
- `yarn npm audit`. Runs a package audit.
- `yarn upgrade-interactive`, upgrades packages (similar to npm outdated).
- `yarn up`, (similar to npm upgrade).
- `yarn dlx <command>` equivilent to `npx <command>`.


### DB Management

This project uses the Prisma ORM, it has a CLI utility with some useful commands:

- `yarn dlx prisma studio` - Launches a GUI to manage the DB.
- `yarn dlx prisma migrate dev --name <name>` - Creates a DB migration (pushes schema changes to DB). Be careful doing this to a production site.
