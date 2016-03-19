# React Redux Demo - Quora like UI

### How to run
1. git clone https://github.com/lawrence0819/react-redux-demo.git
2. cd react-redux-demo
3. npm install
4. npm run dev
5. Open browser and go to http://localhost:8080

### Code structure
The frist level categorized by file type, includes js, css, html and assets. The assest directory for place non programming web resource, just like image and font file. Js file structure is follow this tutorial: https://facebook.github.io/flux/docs/todo-list.html. All React.js components are placed in components folder. Actions, reducers and store directories are for place redux related files. Utils directory for place common util function.

### How to use components 
In components folder, frameset is a application UI wrapper for wrap view component and share common UI tructure acrosss different view such as top navbar and footer. The frameset and view components only used by react-router only. Most of components are stateless function instead of React class, because the React.js team say: 
> In an ideal world, most of your components would be stateless functions because in the future we’ll also be able to make performance optimizations specific to these components by avoiding unnecessary checks and memory allocations. This is the recommended pattern, when possible.

### Attention to detail
Redux action won't work when you not wrpped by react-redux connect or not use Redux dispatcher. All objects stored in Redux store are immutable. Please don't directly update object value in reducer.

### Readability and maintainability
This project require you have ES2015 and JSX for React knowledge. If you don't have ES2015 or JSX for React knowledge, please go to https://babeljs.io/docs/learn-es2015/ and https://facebook.github.io/react/docs/tutorial.html for learn more about ES2015 and JSX.

JSX makes it easy to read the code of components. It is also really easy to see the layout, or how components are combined with each other. It ensures readability and makes maintainability easier. Also, components are easy to test. It can integrated with Jest. Some other js function such as utils or API call, we can use Mocha and Chai to test.

### Limitations
Redux only support sync operation, please add redux-thunk middleware for handle async operation. 

The semantic-ui only support modern browser:
* Last 2 Versions FF, Chrome, IE 10+, Safari Mac
* IE 10+
* Android 4.4+, Chrome for Android 44+
* iOS Safari 7+

This project only implement "pass" function. Other function just have layout only. Assump user logged in and viewing main page.
