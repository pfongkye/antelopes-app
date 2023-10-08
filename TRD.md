# Objective

Create a web application that visualizes data related to antelope species so that users can compare themselves to antelopes.

# Requirements (Frontend)

- JavaScript or TypeScript
- React.js
- Functional POC
- Use data from endpoint https://work-sample-mk-fs.s3-us-west-2.amazonaws.com/species.json
- Page components:
  - Table displaying antelope data.
  - At least two charts to represent data in a sensible way.

```json
  {
    "name": {antelope name: string},
    "continent": {antelope country: string},
    "weight": {antelope weight: number},
    "height": {antelope height: number},
    "horns": {antelope horn type: string},
    "picture": {antelope picture: URL/string}
  },
```

# Implementation

- Use react and vite to scaffold a project to quick start the application.
```bash
npm create vite@latest antelopes-app -- --template react-ts
```

- Use [tabulator](https://tabulator.info/) library to implement a table view. It allows filtering, sorting and formatting for custom data display. It is responsive and easily stylable.

| HTML Table            | Tabulator                |
| --------------------- | ------------------------ |
| Simple                | Complex                  |
| Rigid in style        | Easily customizable      |
| Not easily responsive | Responsive               |
| -                     | Filtering, Sorting, etc. |

- Use [Jest](https://jestjs.io/docs/getting-started#using-typescript) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for testing purposes.

# Test Cases

- View a table with data related to antelope in columns

# Production Deployment Checklist

# Efforts

# Miscallenous

- Follow this [article](https://dev.to/hannahadora/jest-testing-with-vite-and-react-typescript-4bap) to setup jest on a React TypeScript project using Vite.

# Learnings

- New libraries tabulator and data visualization library Chart.js
- User Vite [server proxy](https://vitejs.dev/config/server-options.html#server-proxy) to avoid blocking CORs policy on client side
