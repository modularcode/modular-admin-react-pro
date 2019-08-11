## This is just a draft document with a thoughts :)

The points below are still in progress


### Features

- Static typecheckign with TypeScript for large scale projects
- Modular and scalable architecture
- Built in JWT authentication
- Typed data entities
- Not just a dummy template
- Uses react hooks
- Simpler state management with Redux + Rematch for reducing Redux code boilerplate
- Material UI kit
- Smart basic applications with real-world usage
- Users/Organizations roles with many-to-many relations
- Designed in SAAS setup in mind, with subscription planes and global system roles
- and more...


### State management




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

#### Why Redux + Rematch for the state management?

Redux has became de-facto standart solution for the React state management. Unfortunately you need to write lot's of boilerplate code by default. Rematch is a framework build on top of Redux which simplifies working with redux and eliminates lot's of boilerplate code.


#### Can I use Apollo and GraphQL instead of Redux?

The state shape withing the `_state` directories is designed in a way to be simillar to Appolo Client state provided by It's useState, useMutation hooks.

To abstract away from the app state management solution implementation  the Modular Material Admin components use custom hooks (e.g. useDashboardState, useDashboardEffects).

So if you want to use Apollo Client with it's recommended way of state management instead of Redux, you should be able to use `useQuery` and `useMutation` hooks instead or inside `useDashboardState` and `useDashboardEffects` without any dramatical changes in UI

The GraphQL + Apollo learning curve was too steep, that's why I decided to exclude it from the initial version of Modular Material Admin.

-----

Not Valid

#### Why do you use two different approaches for state management?

Initially I was thinking about using Redux only as a state management with GraphQL Apollo Client as well, but it turns out that Appolo Client is also prefered way to manage the UI state.

More info available here
https://github.com/rematch/rematch/issues/366
https://www.apollographql.com/docs/react/essentials/local-state/


#### So REST or GraphQL?

I'm trying to build the Modular Material Admin in a way that you would be able to use your desired approach. Each component that needs an ASYNC data, has it's own data usage custom hook, which can be Redux state or Appolo state.
The custom hook of the component abstracts away the state management implementation under the hood, so we can use the preferred method for the state management: Apollo GraphQL or Redux + Rematch
