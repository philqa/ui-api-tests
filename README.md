# Technical Assessment

## Running Instructions

### Prerequisites

- Node 8.9+
- npm 5.6.0

### Setup & Run

UI tests have been implemented with CodeceptJS + Puppeteer. By default they'll run headlessly 
using chrome and HTML reports will be generated in `/reports/mochawesome.html`

Cucumber support has also been added along with a common/generic steps, object repository and page object 
pattern approach.

API tests have been implemented using Mocha + RequestJS with chai for assertions.

```
npm i
npm t
```

<<<<<<< HEAD

Spec UI tests can be executed separately using `npm run test:ui`

Cucumber UI tests can be executed using `npm run test:ui:cuke`

Parallel UI tests can be executed using `npm run test:ui:parallel`

API tests can be executed separately using `npm run test:api`

### Issues

You may require some libraries to be available globally depending on your npm config, namely 
CodeceptJS, TypeScript (tsc) and Mocha. These can be installed via:

```
npm i -g codeceptjs
npm i -g tsc
npm i -g mocha
```

### Answers to the questions

1. What other possible scenario would you suggest for given page? Suggest 3-5 with
your suggestion.
```
- Submitting the form without filling out the required fields and confirming the error
- Adding more user profile scenarios (e.g. Joint, No. of deps 5+, Residential Investment)
- Field validation (cannot enter special chars, letters, $ max rewrite to 9,999,999)
- Tooltips element/content checks
- Using an accessibility library/test framework
```
2. If this test was part of a much larger test suite, how would you speed it up to test
particular flow?
```
I'd either move the specs to a new sub-folder with the flow-name (if it made sense given how 
the specs were split) and create a new npm run script to only run this sub-folder. Or I'd 
using @Tags to label the Feature/Scenarios and specify it in the npm run script.
```
3. Which approaches could be used to reduce overall execution time? Describe how
they could be implemented into your code base.
```
CodeceptJS supports parallel test execution via: codeceptjs run-multiple and you can specify a profile 
within the codecept.conf.js.
There doesn't seem to be any API requests in this particular test (the calculations are 
done via JS in the client/front end), but using mocks for any scenarios that interact with 
back end services is a great way to improve front end tests.
```
4. Sometimes UI tests can fail unpredictably. For example, the page may not have
fully loaded before test automation attempts to click a button on a webpage. How
would you improve reliability of these tests without increasing execution time?
```
Implement some utility functions to recursively check for the presence of the element in the 
DOM as well as the visibility of the element prior to interacting with it. CodeceptJS does 
have support for retrying tests (although this would increase test execution time).
```
5. From your experience, what is the focus of UI Automation testing – Integration,
Functional or Acceptance testing? Briefly explain why.
```
In my experience, the focus of UI test automation has changed over time and varies depending on the motivations of
 why automated testing was implemented for each project/organisation. I think 
it's often seen as a cost saving or efficiency measure by leaders/program managers, in which 
case UI test automation is usually implemented as way of reducing acceptance testing cycles (retrospective 
automation) as these can viewed as the bottle-necks. However there are large efficiencies, in terms of finding and fixing defects earlier in the SDLC,
 to be had by building in UI test automation practices much earlier in the build/test process (progressive 
 automation). In these instances the value of UI test automation is in Integration and Functional testing 
 because those activities are the early focus of the scrum team. Doing UI test automation effectively in this stage can also 
  directly inform how much Acceptance testing is required from a risk-based perspective. I must add though that there should be a high level of 
 automated functional tests for APIs/back end services (along with ample tests at other levels of the test pyramid) that the UI interacts with before considering adding 
 large amounts of tests in the UI - these tests should be more focused on the functionality of UI elements. 
```
