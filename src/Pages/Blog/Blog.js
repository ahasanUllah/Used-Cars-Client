import React from 'react';

const Blog = () => {
   return (
      <div>
         <div className="bg-gray-100 text-gray-800">
            <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-50">
               <div className="mt-3">
                  <a rel="noopener noreferrer" className="text-2xl font-bold hover:underline">
                     What are the different ways to manage a state in a React application?
                  </a>
                  <p className="mt-2">
                     In React apps, there are at least seven ways to handle the state. <br />
                     <strong>URL</strong> <br />
                     It is recommended to avoid storing such information in the app’s state to avoid the URL in our app
                     getting out of sync. The URL should be used as the system of record, Read from it as needed for
                     information related to sorting, pagination, etc. Update the URL as required when the settings
                     change <br />
                     <strong>Web Storage</strong> <br />
                     The second option is to store the state in the browser via web storage. This is useful when we want
                     to persist state between reloads and reboots. Examples include cookies, local storage, and
                     IndexedDB. These are native browser technologies.
                     <strong>Local State</strong> <br />
                     The third option is to use store state locally. It is useful when one component needs the state.
                     Examples include a toggle button, a form, etc. <br />
                     <strong>Lifted State</strong> <br />
                     <strong>Derived State</strong> <br />
                  </p>
               </div>
            </div>
         </div>
         <div className="bg-gray-100 text-gray-800">
            <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-50">
               <div className="mt-3">
                  <a rel="noopener noreferrer" className="text-2xl font-bold hover:underline">
                     How does prototypical inheritance work?
                  </a>
                  <p className="mt-2">
                     Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It
                     is a method by which an object can inherit the properties and methods of another object.
                     Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf
                     and Object
                  </p>
               </div>
            </div>
         </div>
         <div className="bg-gray-100 text-gray-800">
            <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-50">
               <div className="mt-3">
                  <a rel="noopener noreferrer" className="text-2xl font-bold hover:underline">
                     What is a unit test? Why should we write unit tests?
                  </a>
                  <p className="mt-2">
                     The main objective of unit testing is to isolate written code to test and determine if it works as
                     intended. Unit testing is an important step in the development process, because if done correctly,
                     it can help detect early flaws in code which may be more difficult to find in later testing stages.
                  </p>
               </div>
            </div>
         </div>
         <div className="bg-gray-100 text-gray-800">
            <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-50">
               <div className="mt-3">
                  <a rel="noopener noreferrer" className="text-2xl font-bold hover:underline">
                     React vs. Angular vs. Vue?
                  </a>
                  <p className="mt-2">
                     <strong>React</strong> <br />
                     React is considered a UI library. They define themselves as: “A JavaScript library for building
                     user interfaces” Facebook developers are behind the development and maintenance of this library.
                     And, in this case, most of Facebook’s products are made with React. <br />
                     <strong>Angular</strong> <br />
                     Angular is a front-end framework with lots of components, services, and tools. On Angular’s site,
                     you can see that they define Angular as: “The modern web developer’s platform” It is developed and
                     maintained by Google developers, but curiously it is not used to implement any of their most common
                     products such as Search or YouTube. <br />
                     <strong>Vue</strong> <br />
                     “A progressive JavaScript framework” Vue.js is developed and led by Evan You, but also it counts on
                     a huge open-source community.
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Blog;
