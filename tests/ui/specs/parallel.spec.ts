/// <reference path='../steps.d.ts' />
Feature('Parallel test execution demo');

Before(I => {
    I.amOnPage('/');
});

Scenario('Test chunking is managed at the .spec level @parallel', I => {
});
