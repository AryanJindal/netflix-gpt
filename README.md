# npx create-react-app netflix-gpt

- testing already there
- HMR

Lets start by setting up tailwind in the project
Tailwind-webpage ==> get-started ==> Framework guide ==>create-react-app
```bash
npm install -D tailwindcss
npx tailwindcss init
```
- Configure the tailwind.config.js
- modify index.css


**rafce** ==> react arrow function export component

## formik

**formik** best library to use form inside the react application
because when form grows, it becomes tougher to do authentication, validation and handling error.

## useRef hooks

### difference between useState and useRef
Certainly, here is a simplified explanation without code blocks:

1. **`useState`**:
   - Used to manage state in functional components.
   - Causes a re-render when the state value changes.

2. **`useRef`**:
   - Used to persist values across renders without triggering re-renders.
   - Does not cause the component to re-render when the ref's value changes.
   - Useful for accessing and interacting with the DOM directly, storing mutable values, or persisting values between renders.

**Use Cases:**
- Use `useState` when you need to manage and display changing values in your UI.
- Use `useRef` when you need to store and access a mutable value that doesn't trigger re-renders. Common use cases include accessing and modifying DOM elements directly or persisting values across renders.

In summary, use `useState` for managing state that affects your component's rendering, and use `useRef` for persisting values without triggering re-renders, especially for non-reactive data like DOM references.

```js
import React, { useRef } from 'react';

const SignInForm = () => {
  // Create refs for email and password inputs
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSignIn = () => {
    // Access input values using ref.current.value
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // Now you can use email and password as needed (e.g., for authentication)
    console.log('Email:', email);
    console.log('Password:', password);
    // Implement your sign-in logic here
  };

  return (
    <div>
      <form>
        <label>
          Email:
          <input type="email" ref={emailRef} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" ref={passwordRef} />
        </label>
        <br />
        <button type="button" onClick={handleSignIn}>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignInForm;

```

## Firebase
Setting up a project named "NetflixGPT" on Firebase with Google Analytics, hosting, and user authentication involves several steps. Below is a step-by-step guide to help you achieve this:

### Step 1: Create a Firebase Project

1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Click on the "Add Project" button.
3. Enter the project name as "NetflixGPT" and follow the on-screen instructions to complete the setup.

### Step 2: Enable Google Analytics

1. After creating the project, click on the project name in the Firebase Console.
2. In the left-hand menu, click on "Analytics."
3. Follow the prompts to enable Google Analytics for your project.

### Step 3: Set Up Authentication

1. In the Firebase Console, navigate to "Authentication" from the left-hand menu.
2. Click on the "Sign-in method" tab.
3. Enable the sign-in providers you want to use (e.g., Email/Password, Google Sign-in).
4. Follow the instructions to configure each sign-in provider.

### Step 4: Install Firebase CLI

Ensure you have the Firebase CLI installed on your machine. If not, you can install it using:

```bash
npm install -g firebase-tools
```

### Step 5: Initialize Firebase in Your Project

1. Open a terminal and navigate to your project folder.
2. Run the following command to initialize Firebase:

```bash
firebase init
```

3. Choose the features you want to set up (Hosting is mandatory for web hosting).

### Step 6: Deploy Your Project

1. Run the following command to deploy your project to Firebase Hosting:

```bash
firebase deploy
```

2. After deployment, you will get a hosting URL. Access your project using that URL.

### Step 7: Integrate Firebase in Your Web App

1. In your web app code, add the Firebase configuration. You can get this configuration from the Firebase Console under Project settings.

```javascript
// Initialize Firebase
var firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
```

2. You may also need to install the Firebase SDK in your project:

```bash
npm install firebase
```

3. Use Firebase Authentication in your app based on your chosen authentication providers.

### Step 8: Monitor with Google Analytics

Firebase Analytics is integrated by default. You can view analytics data in the Firebase Console under the "Analytics" section.

That's it! You've now set up a Firebase project named "NetflixGPT" with Google Analytics, hosting, and user authentication. Make sure to refer to the Firebase documentation for detailed information and additional configuration options: [Firebase Documentation](https://firebase.google.com/docs).

## Firebase keeps changing the documention
- use modular API from firefox

## Creating a password based account
```js
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
```

- Add `const auth = getAuth()` inside firebase.js
- as soon as the user signin/sign-up we may need the data anywhere , so we will keep it now inside our redux store


## onAuthStateChange

- Once our user signins ,  sign-up, Sign-out we are required to add the userInfo to our userSlice, but dont want to do that repeatedly. Threfore this API comes in picture
- kind of  like a event listener on user's activity

```js
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});
```

## useNavigate
- when wants to re-direct to another page from one page
The `useNavigate` hook is part of the React Router library and is used for navigating between different views or pages in a React application. It's particularly useful in components that are not directly rendered by a `Route` component but still need to perform navigation.

2. **Import `useNavigate`:**
   Import the `useNavigate` hook at the beginning of the file where you want to use it.

   ```jsx
   import { useNavigate } from 'react-router-dom';
   ```

3. **Use `useNavigate` in your component:**
   In your component, call `useNavigate()` to get the `navigate` function. This function can be used to programmatically navigate to different routes.

   ```jsx
   const MyComponent = () => {
     const navigate = useNavigate();

     const handleClick = () => {
       // Use the navigate function to go to a specific route
       navigate('/some-route');
     };

     return (
       <div>
         <p>This is my component</p>
         <button onClick={handleClick}>Go to Some Route</button>
       </div>
     );
   };
   ```

   In the example above, when the button is clicked, the `handleClick` function is called, and it uses the `navigate` function to go to the `/some-route`.

4. **Dynamic Navigation:**
   You can also use `navigate` with dynamic routes by providing parameters.

   ```jsx
   const MyComponent = () => {
     const navigate = useNavigate();

     const handleDynamicClick = (id) => {
       // Use navigate with dynamic route parameters
       navigate(`/dynamic-route/${id}`);
     };

     return (
       <div>
         <p>This is my component</p>
         <button onClick={() => handleDynamicClick(123)}>Go to Dynamic Route</button>
       </div>
     );
   };
   ```

   In this example, clicking the button will navigate to a dynamic route with the provided `id`.

And that's how you can use the `useNavigate` hook in a React component to handle navigation. It provides a convenient way to navigate programmatically without relying on `history` prop drilling or other patterns.


## StrictMode
- Each call is made two times inside the dev phase 
- react checks for inconsistencies inside the data
- 