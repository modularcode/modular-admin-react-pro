## This is just a draft document with a thoughts :)

The points below are still in progress


### Features

- Modular and scalable architecture
- Data driven and function ready with pre-set REST API entities, sample data and state management system
- Static typechecking with TypeScript for large scale projects
- Built in authentication with JWT
- Typed data entities
- Uses react hooks
- Simpler state management with Redux + Rematch + Immer for reducing Redux code boilerplate
- Material UI kit
- Smart base applications with real-world usage (sales management, content management)
- Users/Organizations roles with many-to-many relations
- Designed in SAAS setup in mind, with subscription planes and global system roles
- and more...


### State management




## FAQ

#### Who is Modular Material Admin for?

Modular Material Admin is a good fit for advanced developers who want to build a large-scale dashboard application with a good coding practicies.

#### How Modular Material Admin is different from hundreds of other admin templates out there?

The most of the dashboard themes and templates are more focused on the UI components. This brings to the situation, that for the most dashboard you need to fully rewrite or reimplement things like authorization, state management and api entities services setup. Modular Material Admin aims to provide that basic architecture setup out of the box


#### How Modular Material Admin is different from other Admin UI ready CMS systems like Keystonejs, Strapi, WordPress, etc?

Even though there are similarities and can be similar use cases there are major differences between ready-made CMS systems and Modular Material Admin

CMS systems usually adopt the configuration over coding principle which means that in order to extend the existing functionality you need to make lot's of configurations and extend the functionality by the CMS plugins API. Another thing is that the Admin UI layout, style and design is usually predefined without the ability to customize it.

On the controversary the Modular Material Admin + React is a **starter project template** which is meant to be a solid foundation to **build your own** admin system with the best React + TypeScript + MaterialUI coding practices.

So the AdminUI ready CMS systems are really a good fit if

- Your primary objective is content management
- You want to prototype something quickly
- You're fine with extending the AdminUI via CMS plugins API
- You don't need to customize the AdminUI layout
- You don't need to add a lot's of custom business logic which isn't supported via the CMS

Modular Material Admin + React is a good fit if

- You want to write your AdminUI code and business logic
- You want to use React, React Hooks and TypeScript for your project
- You want to extend the existing functionality via your own code
- You don't want to depend on the CMS ecosystem


#### Summing up: what is the Modular Material Admin + React usage niche?


Modular Material Admin + React stand beetween a basic React Admin UI templates and a Admin UI ready CMS systems.

| Basic Admin Template |   |   |  Modular Material Admin  |   |   |   AdminUI Ready CMS |
|----------------------|---|---|:------------------------:|---|---|--------------------:|
| Less features        |   |   |     Moderate features    |   |   |       More Features |
| High customizability |   |   | Moderate customizability |   |   | Low customizability |

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
