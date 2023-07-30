# APIShowcase 🚀

![npm version](https://badge.fury.io/js/cra-template-typescript-redux.svg)
![Action status](https://github.com/alexandr-g/cra-template-typescript-redux/workflows/CI/badge.svg?branch=master)
![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)
![npm downloads](https://img.shields.io/npm/dm/cra-template-typescript-redux)

## Description 📝

Welcome to APIShowcase, an amazing React App built with TypeScript. This project aims to demonstrate the handling of React component rendering and API mocked calls while utilizing Redux 🔄 for efficient state management. 

Get ready to experience delayed component rendering that simulates API calls and gain valuable insights into the power of Redux for managing actions in a global store.

## Getting Started 🚀

These simple instructions will help you set up and run the project on your local machine in no time! 🏃‍♂️

### Prerequisites 🛠️

To get started, make sure you have the following installed on your machine:

- Node.js and npm/yarn 🖥️

### Installation ⚙️

1. Clone this repository to your local machine. 👯‍♂️
2. Navigate to the project directory.
3. Install the required dependencies using npm or yarn: 📦

```bash
# If using npm
npm install

# If using yarn
yarn install
```

### Running the App 🏃‍♂️

Now that you have everything set up, it's time to run the app and experience the magic! ✨

```bash
# If using npm
npm start

# If using yarn
yarn start
```

The app will start and will be accessible at [http://localhost:3000](http://localhost:3000) in your favorite web browser.

## Built With 🔧

APIShowcase is built with the following awesome technologies:

- React (with TypeScript) ⚛️
- Redux (for state management) 🗃️
- Pure CSS (for styling) 🎨

## Introduction to APIShowcase 📜

Welcome to APIShowcase, an incredible React App designed to demonstrate the power of Redux for efficient state management and showcase the handling of component rendering and API mocked calls. Let's dive in and explore the exciting features of this project! 🎉

### Loading State at Start ⏳

At the beginning of your journey with APIShowcase, you will experience a loading state as the app prepares to showcase its magic.

### Simulated API Calls 📡

Our app will perform API calls, returning mock data, simulating a real API experience. The calls are set on a timer to provide a delayed response, mimicking actual network interactions:

1. 0ms: calls API for mock 1 -> 500ms: response
2. 500ms: calls API for mock 2 -> 1000ms: response
3. 1000ms: calls API for mock 3 -> 1500ms: response
4. 1500ms: calls API for mock 4 -> 2000ms: response

### Component Rendering 🖼️

After each API response, the relevant component will get rendered on the page. Keep an eye on those boundaries, as each component is styled uniquely with different backgrounds, borders, margins, and more!

### Redux Store Insights 🔄

At the top of the page, you'll find another exciting component connected to the Redux store. It provides valuable insights, displaying the number of API calls made and the name of the last rendered component.

## Extra Efforts 💪

In this project, we have gone the extra mile to make it even more impressive:

- Avoided the use of media queries for responsive design.
- Utilized TypeScript for enhanced type safety and better development experience.
- Managed the render of components in a single wrapper component for a cleaner code structure.

We hope you enjoy exploring APIShowcase and discover the true potential of Redux and React in creating powerful, efficient, and responsive applications! 🚀

## Thank You! 🙏

Thank you for using APIShowcase! We hope this template proves to be a valuable asset in your React projects. If you have any feedback or questions, feel free to share them with us. Happy coding! 🖤
