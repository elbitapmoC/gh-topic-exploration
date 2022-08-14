# GitHub Topic Explorer:

![Screen Shot 2022-08-12 at 3 03 29 PM](https://user-images.githubusercontent.com/11306948/184452481-cf388de0-cda8-4572-a636-95385cbfd0d2.png)

![Screen Shot 2022-08-12 at 5 21 10 AM](https://user-images.githubusercontent.com/11306948/184452506-e0f5960f-f8f1-4187-8d70-0b94f67462c9.png)

## Assignment

- Build a React web app that displays all the "[topics](https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#topic)" related to the term "react".
- Utilize GitHub's GraphQL API: `https://api.github.com/graphql`

- Display how many "[stargazers](https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#stargazerconnection)" each topic has.
- Clicking on a topic will display related topics & how many stargazers they have.

- Has search capabilities to query any term or topic.

- Implement best practices with the UI.

### Github GraphQL API requirements

- [Github API key](https://docs.github.com/en/free-pro-team@latest/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql)
- Use the `.env` file within your app.

### Evaluation:

- Code organization & overall readability.
- Unit tests, greatly appreciated.
- Design will be ignored, however usability & accessibility will be taken into consideration.
- Improve it however you see fit.

## Dev Notes / What we used

- [Apollo GraphQL](https://www.apollographql.com/)
  - I'm a bit newer to this, GraphQL this seemed like the best fit for the ask.
- [NextJS](https://nextjs.org/)
  - Lots of features
  - Performance! Performance! Performance!
  - SEO
  - Accesibility
  - plus so much more
- [React](https://reactjs.org/)
  - It's react, not much else to say
- [Tailwind CSS](https://tailwindcss.com/docs/installation)
  - Utility-first CSS framework
  - Less time thinking of class names, more time making progress.
  - Lightweight because it's use what you need, it won't download everything from the framework.
  - Responsiveness
  - I believe I have an eye for design. UI 👍

### How to run app & test

1. Get your Github Token
   - Profile > Settings > Developer Settings > Personal Access Token > Generate New Token > Enable: public_repo, user:email
   - Generate Token, **MAKE SURE TO COPY your token!**
1. Clone the repo: `git clone git@github.com:elbitapmoC/gh-topic-exploration.git`
1. Open project in terminal or text editor of choice.
1. Run `npm install`
1. Create a .env file to access.
   - At the root create a file > name it: '.env.local'
   - Update the content in the file to: `GITHUB_ACCESS_TOKEN = "PASTE KEY HERE"`
   - Save
1. Run `npm run dev`
1. Finally, load up `http://localhost:3000` and have fun and enjoy the Github explorer!

### Future Improvements

- Code Structuring
- React -> Svelte
- Refactoring
  - I'd like to use styled components for component specific styles
  - and Keep tailwind for those quick on the go class additions.
- Additional Features (I'd like to recreate Github's full Explorer)
  - Pagination (Resources below, maybe something to tackle later. For fun.)
    - https://stackoverflow.com/questions/48116781/github-api-v4-how-can-i-traverse-with-pagination-graphql
    - https://stackoverflow.com/questions/64115904/how-to-search-specific-page-through-github-api-v4
    - https://stackoverflow.com/questions/70136467/graphql-api-pagination-issue
    - https://www.youtube.com/watch?v=_DhYAk4Iy-0
  - Adding time last updated
  - No need for design system since Tailwind takes care of this for the most part.
  - Filtering out what to search by:
    - Discussions
    - Marketplace
    - Wikis
    - etc.
  - Filtering by Languages
  - Add in micro-interactions
  - Themes to support different color schemes (light or dark)
- Dive more into GraphQL 🤿
