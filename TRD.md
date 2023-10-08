# Objective

Create a web application that visualizes data related to antelope species so that users can compare themselves to antelopes.

# Requirements (Frontend path)

- JavaScript or TypeScript
- React.js
- Functional POC
- Use data from endpoint https://work-sample-mk-fs.s3-us-west-2.amazonaws.com/species.json

```json
  [{
    "name": {antelope name: string},
    "continent": {antelope continent: string},
    "weight": {antelope weight: number},
    "height": {antelope height: number},
    "horns": {antelope horn type: string},
    "picture": {antelope picture: URL/string}
  },]
```

- Page components:
  - Table displaying antelope data.
  - At least two charts to represent data in a sensible way.

# Test Cases

- Given users who want to compare themselves to an antelope, when they click on Table View, they can see a table with data related to antelopes in columns. And users can sort the columns.
- Given users who want to compare themselves to an antelope, when they click on Scatter View, they can see a scatter plot with weight as x-axis and height as y-axis, and where each dot is colored depending on the continent. And users can filter out the continents by clicking on the corresponding legend.
- Given users who want to compare themselves to an antelope, when they click on Doughnut View, they can see a doughnut which displays the antelopes grouped by the type of horns. And users can filter out the horns by clicking on the corresponding legend.

# Implementation Decisions and Tradeoffs

- Use react and [vite](https://vitejs.dev/guide/) to scaffold a project to quick start the application.

```bash
npm create vite@latest antelopes-app -- --template react-ts
```

- Use [tabulator](https://tabulator.info/) library to implement a table view. It allows filtering, sorting and formatting for custom data display. It is responsive and easily stylable.

| HTML Table                        | Tabulator                  |
| --------------------------------- | -------------------------- |
| + Simple                          | + Responsive               |
| - Rigid in style                  | + Easily customizable      |
| - Have to implement sorting, etc. | + Filtering, Sorting, etc. |
|                                   | + Accessible               |
|                                   | - Complex                  |
|                                   | - Add Bundle Size          |

- Use [chart.js](https://www.chartjs.org/) as data visualization library. It is highly customizable, has animations and uses canvas that can load a large dataset compared to SVG nodes (like [d3.js](https://d3js.org/)). It adds to the bundle size though.

- I wanted to do [TDD](https://en.wikipedia.org/wiki/Test-driven_development) using [Jest](https://jestjs.io/docs/getting-started#using-typescript) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) to build the different pages step by step and have a safety net but due to time constraint and issues (see [article](https://dev.to/hannahadora/jest-testing-with-vite-and-react-typescript-4bap) for how to resolve some the issues) in configuring properly the testing libraries with Vite, I decided to implement without TDD approach.

- I used radio buttons to navigate between the different data visualizations but a better way would be to use client-side routing (using [React Router](https://reactrouter.com/en/main) for example) and navigate through links.

- I used `useEffect` hook to fetch data from antelopes API but a better way would be to use a library that caches the data and prevents waterfall API calls in nested components (for example [RTK query](https://redux-toolkit.js.org/rtk-query/overview)). I could manage the antelopes data in a context and a reducer to share them between the page components but I preferred as a first simple implementation to use `useState` hook and passing props to the components. Also, since antelopes is server data, I would instead use RTK query to handle the data instead of classical state management.

- I assume the antelopes data would not grow in size (fixed amount of antelopes), thus I don't need any pagination or virtualization in data table.

- I left out some typings that can be improved.

# Observations

- The little knowledge on some libraries (tabulator and chart.js) took me some time to learn how to use them.
- There was an issue on Vite configuration that prevented me to call the antelopes API (blocking CORs policy). Use Vite [server proxy](https://vitejs.dev/config/server-options.html#server-proxy) to resolve the issue.
- I did some TDD on the utils functions to build step by step the behaviors expected from the functions.
- Use [React Chart](https://github.com/reactchartjs/react-chartjs-2) wrapper and [examples](https://react-chartjs-2.js.org/examples).
- Use [React Tabulator](https://github.com/ngduc/react-tabulator) wrapper.
- Use [bundlephobia](https://bundlephobia.com/) to check for bundle size.
- TRD written based on this [article](https://medium.com/workindia-in/trd-what-is-it-and-how-it-helps-software-engineers-manage-their-work-9c381132cc76).
