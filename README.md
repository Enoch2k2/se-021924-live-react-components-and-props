# React Lecture: Component and Props

Agenda Topics:
* What is React?
  * React is a library used to make user interfaces
  * It has a virtual DOM that uses optimized and lightning quick rendering techniques
  * Made up of reusable components
  * Organized and easier to scale for creating UI

* What are components:
  * Components are the parts of react that make up the UI which return JSX (html in javascript)
  * Components can have children components that it can pass information down to via props, The app component is usually the parent most component
  * Components can have functionality (will be covered in a later lecture)

* What is Vite?
  * Because in 2023 create-react-app (CRA) was depricated and no longer maintained, Vite will be taking it's place for creating react applications.
  * It's easy to use, but here are some differences for phase 2:
    - Instead of `index.js` it's now called `main.jsx`
    - All component files have jsx extensions instead of js
    - To run the server, you type in `npm run vite` instead of `npm start`

*** Snippet for creating a vite project ***

```
npm create vite@latest project-name-here -- --template react
```

Resource Links: 
* [Getting started with Vite](https://vitejs.dev/guide/)
* [Real DOM vs Virtual DOM](https://medium.com/@itsanuragjoshi/mastering-react-understanding-real-dom-vs-virtual-dom-and-the-dom-update-process-78a233454ff8#:~:text=Real%20DOM%20vs%20Virtual%20DOM%3A%20A%20Side%2Dby%2DSide%20Comparison&text=Real%2FActual%2FBrowser%20DOM%3A,web%20page's%20structure%20in%20memory.)