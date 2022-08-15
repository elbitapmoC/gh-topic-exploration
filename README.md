# GitHub Topic Explorer:

![Screenshot of Github Explorer](https://user-images.githubusercontent.com/11306948/184694467-8ce42f87-fba2-426b-8b1c-45d8569bc9fe.png)

## Assignment

- Build a React web app that displays all the "[topics](https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#topic)" related to the term "react".
- Utilize GitHub's GraphQL API: `https://api.github.com/graphql`

- Display how many "[stargazers](https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#stargazerconnection)" each topic has.
- Clicking on a topic will display related topics & how many stargazers they have.

- Has search capabilities to query any term or topic.

- Implement best practices with the UI.

### Github GraphQL API requirements

- [Github API key](https://docs.github.com/en/free-pro-team@latest/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql)
- Use the `.env.local` file within your app.

### Evaluation:

- Code organization & overall readability.
- Unit tests, greatly appreciated.
- Design will be ignored, however usability & accessibility will be taken into consideration.
- Improve it however you see fit.

## Dev Notes / What we used

- [Apollo GraphQL](https://www.apollographql.com/)
  - Fixes the issue of over-fetching
  - Fixes the issue of making multiple requests for multiple resources
- [NextJS](https://nextjs.org/)
  - Lots of features
  - Performance! Performance! Performance!
  - SEO
  - Accesibility
  - plus so much more
- [React](https://reactjs.org/)
  - Components. Create once, use everywhere.
  - Big time saver.
  - Very large community, which means great support.
  - There's nothing I can't figure out
- [Tailwind CSS](https://tailwindcss.com/docs/installation)
  - Utility-first CSS framework
  - Less time thinking of class names, more time making progress.
  - Lightweight because it's use what you need, it won't download everything from the framework.
  - Responsiveness
  - UI 👍
- Testing
  - Tested on multiple devices-- Windows Laptops & Macbooks, testing on local devices as well as mobile devices.
  - Had a few other developers test out on their device to see if the instructions were clear and if they had the same results as my local machine.
  - Options for CSS--
    - global style for everything..
    - BEM, Atomic, ITCSS
    - CSS Modules
    - etc.
    - Winner: Styled JSX.
      - Setup for doing more programmatic things.
      - Creating dynamic styles
      - 😄 The medicine we want, no side effects (scope/component specific styles)

### How to run app & test

1. Get your Github Token
   - Profile > Settings > Developer Settings > Personal Access Token > Generate New Token > Give your Access Token a Name / Note (Up to you what you name it) > Enable: public_repo, user:email > Generate Token, **MAKE SURE TO COPY your token, place it in a safe spot, for if you need to access it again.**
1. Open terminal or favorite text editor of choice.
1. Clone the repo: `git clone git@github.com:elbitapmoC/gh-topic-exploration.git`
1. cd into your cloned repo.
1. (If you don't have [node](https://nodejs.org/en/download/), make sure to download it before going to the next step)
  - Restart your text editor once you've installed Node.
1. Run `npm install`
1. Create an `.env.local` file to make a query to the server.
   - At the root create a file & name it: `.env.local`
     - PLEASEEEE make sure this file name is correct!
     - Otherwise the content will not load up when you search. (I came across this issue while testing.)
   - Paste in the `.env.local` file: `GITHUB_ACCESS_TOKEN = PASTE_KEY_HERE`
   - **Replace PASTE_KEY_HERE with your Access Token.**
   - Save
1. In the terminal, run: `npm run dev`
1. Finally, load up `http://localhost:3000` and have fun and enjoy the Github explorer!

### Future Improvements / Thoughts

- React -> Svelte
- Refactoring
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
- Dive more into GraphQL 🤿 & Apollo, fully fleshed out app idea.
