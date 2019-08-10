## This is just a draft document with a thoughts :)

The points below are still in progress


### Features

- Static typecheckign with TypeScript for large scale projects
- Modular and scalable architecture
- Built in JWT authentication
- Built in interchangable REST and GraphQL API interaction services, pick the prefered option
- Typed data entities
- Not just a dummy template
- Uses react hooks
- State management with Redux + Rematch for reducing Redux code boilerplate
- Material UI kit
- Smart basic applications with real-world usage
- Users/Organizations roles with many-to-many relations
- Designed in SAAS setup in mind, with subscription planes and global system roles
- and more...


## FAQ

#### Who is Modular Material Admin for?

Modular Material Admin is a good fit for the more-advanced developers who want to build a large-scale dashboard application with a good coding practicies.

#### How Modular Material Admin is different from hundreds of other admin templates out there?

The most of the dashboard themes and templates are more focused on the UI components. This brings to the situation, that for the most dashboard you need to fully rewrite or reimplement things like authorization, state management and api entities services setup. Modular Material Admin aims to provide all the architecture setup out of the box


#### Why do you call it modular?

I've been working on different large scale apps for years already, and have developed my own way of structuring and naming the application parts. This turned out a really successfull approach, which helped me to ofocus on a single functionality module. The modules are like lego building blocks and mostly represent the application logical structure. If you think about our app in a small pieces, it's all about a tree! There are also directories starting with underscore, e.g. `_services`, which combine files or modules of the same type or purpose.


#### Why do use TypeScript?

I beleive that the fucture of the JavaScript in large scale applications is TypeScript.
It improves the code quality, helps to avoid of lot's of runtime errors, during refactoring and maintenance. In addition it provides a great intelisense, which boosts the productivity. TypeScript comes with it's overhead cost though, so if you want to build something small, it might be a bit of complicated to use.

#### Why do you use MaterialUI?

Although I'm not a big fan of material design, but the MaterialUI gives a huge solid fundation for building user interfaces. I never enjoyed using any UI framework that much as I did with MaterialUI. Big appreciation and my credits to the MaterialUI team.


#### So REST or GraphQL?

I'm trying to build the Modular Material Admin in a way that you would be able to use your desired approach. Each component that needs an ASYNC data, has it's own {ComponentName}Service.tsx file, in which the ASYNC data can be obtained both from REST or GraphQL and resolved to the component. So it should be easy to pick the solution which fits better.


#### Why Redux + Rematch for the state management?

Redux has became de-facto standart solution for the React state management. Unfortunately you need to write lot's of boilerplate code by default. Rematch solves that issue
