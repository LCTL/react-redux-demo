export const questionPage = {
  content: [
    {
      id: 1,
      category: 'Node.js',
      title: 'Is Node.js overrated?',
      views: 2100,
      follow: 10,
      date: new Date(),
      bestAnswer: {
        content: `
          The three most important things about things about NodeJS that make it so special is:
          1. Non-blocking I/O (this was big). This is what it owes it's high performance to.
          2. It's Javascript on the backend. This may not seem like a big deal (especially to people who still hate JS), but it basically means reduced complexity because that's one less piece of technology in your stack that developers have to reason about (no additional language just to handle the back-end, lowering the barrier-to-entry for Frontend Javascripters).
          3. npm. (largest module ecosystem in existence, and still growing).
          If people celebrate NodeJS for the above reasons, then they certainly are not "overrating" it. It deserves such praise. However, if someone tries to oversell by making it out to be perfect in every other way (which it is not), then sure, that's overrating it. But that's largely a matter of certain individuals, and not the technology in question. In and of itself, it's one serious piece of work.
        `,
        data: new Date(),
        author: {
          profileIamge: 'christian.jpg',
          name: 'Ramon Carroll',
          desc: 'Programmer'
        },
        upvote: 2,
        downvote: 0,
        comment: 0
      }
    },
    {
      id: 2,
      category: 'Android Application Development',
      title: 'How do you make an Android app?',
      views: 8,
      follow: 10,
      date: new Date()
    },
    {
      id: 3,
      category: 'JavaScript',
      title: 'Where can I find some interactive tutorials and coding challenges for AngularJS?',
      views: 180,
      follow: 5,
      date: new Date(),
      bestAnswer: {
        content: `
          There are lots of interactive tutorials out there that follow the same method of freecodecamp and some of them are better considering their interface (cause you will pay for the content), some of them:
          Learn AngularJS : in Code Academy, a very good website but to be honest with you, this tutorial is a little bit off the grid, I don't perhaps because I learnt more about AngularJS in the last months, and that's why I feel like the tutorial is tricky some how, or because I needed more knowledge than the basis to accomplish what I was doing in that time. Anyhow, ti's interactive and it's 100% FFC's way of interativity (there is no sense of challenge in this tutorial, just easy pace learning).
          Shaping up with Angular.js : This one in the other hand from Code School is a good course to learn Angular, and the interactivity is higher than the other website but you can just finish the intro (Shaping with AngularJS) for free, then you should pay.
          Unlimited, online training for IT, Developer and Creative pros: I think you should take a look at some courses here in Pluralsight about AngularJS, there are some incredible courses (not interactive) but you can always follow the instructor by writing code in Plunkr like most of them does. I recommend, the "Best practice with anuglar" course, "Fundamental of directives in angular", and "write clean code with angular", these are the best courses I ever watched about angular in this website, perhaps new courses about Angular 2 will come out and some of them will be fantastic, who knows? You will ask it's paid and who would pay for geezers lecturing without any interaction in 2016? If you head to Visual Studio Dev Essentials  you can get 6 months free from Microsoft and you can enjoy exploring the courses like you want.
          There some courses in egghead.io - Learn professional JavaScript tools with Tutorial Videos & Training, Learn AngularJS Online - A Guide | Codementor , AngularJS Book , and HTML, CSS, PHP, & iOS Development Courses , AngularJS Book (pretty good one), http://www.learn-angular.org/.
          But still, you have to read the documentation (official documentation), very good and  contains some good (yet weird) examples.
        `,
        data: new Date(),
        author: {
          profileIamge: 'joe.jpg',
          name: 'Mohammed Essaid MEZERREG',
          desc: 'I am a web developer adopting new technologies!'
        },
        upvote: 3,
        downvote: 0,
        comment: 0
      }
    },
    {
      id: 4,
      category: 'Marketing',
      title: 'Why is multi level marketing frowned upon?',
      views: 2,
      follow: 2,
      date: new Date()
    },
    {
      id: 5,
      category: 'React (JS Library)',
      title: 'What\'s the best way to validate users in an SPA?',
      views: 15,
      follow: 2,
      date: new Date(),
      bestAnswer: {
        content: `
          Let's assume you have a pure SPA structure, where front-end pulls data from API and you don't mix back-end routing checks. From my experience, this is the usual with Angular, React, Ember, etc. apps.
          For the general case, the answer is quite simple. On front-end, you check specific permission and display or enable the action (button, link, ...) only to users who can use it. This should stop 99% users from doing something they shouldn't do. But to be completely safe, you have to perform same checks on the back-end, before you process API request. In requests where user attempts to do the action and can't, the API should respond with HTTP status code 401 (Unauthorized), so you can use this specific code to tell them what went wrong.
          This question is a great example of why isomorphic apps are getting so much traction. One of it's benefits is you can share the checking logic on front-end and back-end, therefore you get less duplication.
          But still, you have to read the documentation (official documentation), very good and  contains some good (yet weird) examples.
        `,
        data: new Date(),
        author: {
          profileIamge: 'joe.jpg',
          name: 'Marko Grešak',
          desc: 'uses JavaScript to make a living.'
        },
        upvote: 3,
        downvote: 0,
        comment: 0
      }
    }
  ],
  last: false,
  totalPages: 50,
  totalElements: 989,
  numberOfElements: 20,
  first: true,
  size: 20,
  number: 0
};
