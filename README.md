# Sumi

![Travis CI Build Status](https://travis-ci.org/elishaterada/sumi.svg?branch=master)

Sumi is a framework agnostic Storybook components inspired by Japanese sumi-e art style.

All components simply exports encapsulated CSS classes, allowing the use in any JS frameworks.

Import them as you like, customize the style, and use the exported classes on your JS components.

## Philosophy

Sumi is intended to provide a simple, user-friendly, and accessible UI component styles that is portable via CSS-in-JS technique.

The theme is composed of white, shades of gray, and black. This is the perfect theme to let your content (text and image) shine.

- Keep the original theme and let your content (text and image) shine.
- Use it as a starting point for your theme customization.
- Defer the design decision and focus on rapid prototyping.

See [Demo](https://elishaterada.github.io/sumi/).

## Setup

- `npm install`
- `npm start`

## Customize

### Base Styles & Utilities

Base style definitions and utilities are found in [/src/styles](src/styles). This is where you want to control globally applied styles that gets imported in the main components.

### Components

Components can be found in [/src/components](src/components). Many of them are dependent on base style and utilities.

### Stories

Stories document components you build found in [/stories](stories). Use them as you see fit for you and your team.

## Develop

This project includes a simple node script that generates number of files based on [boilerplate](boilerplate) to save you time.

- `npm run create ComponentName`

## Test

Edit the generated test file that can be found in [__tests__](__tests__). This projects uses [Jest](https://facebook.github.io/jest/) for both snapshot testing and unit testing.

- `npm test`
