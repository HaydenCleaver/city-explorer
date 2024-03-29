# City Explorer

**Author**: Hayden Cleaver <br>
**Version**: 1.4.6
<!-- (increment the patch/fix version number if you make more commits past your first submission) -->

## Overview
This application allows users to search a city and retrieve the latitude/longitude of the city as well as a map of the city center.

## Getting Started

1. Install React on local computer and create repository.
2. Install React-Boostrap and Axios on local repository.
3. Create LocationIQ account and retrieve API key.
4. Create `.env` file in root folder of repo.
5. Add API key to `.env` file in following format:
    * `REACT_APP_CITY_KEY=<YOUR KEY>`
    * ensure there are no spaces
6. Add `.env` to `.gitignore` file.
7. `npm start`

## Architecture

Application utilizes React, React-Bootstrap and Axios libraries, and LocationIQ API for map data.

![Day 5: Modularization](/img/Lab10.jpg)
![Day 4: Refactor Whiteboard](/img/Lab9.png)]
![Day 3: Expanded API Whiteboard](/img/Lab8.png)
![Day 2: Back-End Whiteboard](/img/Lab7Board.png)
![Day 1: Front-End Whiteboard](/img/Lab6Board.png)

## Change Log

07/18/2022 10:30pm - Application supports search functionality and renders lat/long.

07/19/2022 12:00am - Map image of area now added to data rendered.

07/19/2022 12:30am - Error alert is now displayed if no input is entered into search field.

07/20/2022 5:50pm - Weather forecast data is displayed upon searching the correct city (limited to server json data).

07/25/2022 1:30am - Movie request feature which pulls data and renders it from TMDB API has been added.

<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an example:

01-01-2001 4:59pm - Application now has a fully-functional express server, with a GET route for the location resource. -->

## Credit and Collaborations

Resources:
* [NPM Axios](https://www.npmjs.com/package/axios#handling-errors)

* [React-Bootstrap](https://react-bootstrap.github.io/)

* [LocationIQ](https://locationiq.com/)

Credit: <br>
Thanks to DAY1 partner [Joshua Frazer](https://github.com/Frazmatic) for assisting me with the error data feature. <br>
<!-- Give credit (and a link) to other people or resources that helped you build this application. -->

## Feature #1: Search Locations

Estimate of time needed to complete: 1 hr

Start time: 8:00pm

Finish time: 10:30pm

Actual time needed to complete: 2.5 hrs

## Feature #2: Map

Estimate of time needed to complete: 2 hrs

Start time: 10:45 pm

Finish time: 12 am

Actual time needed to complete: 1.25 hrs

## Feature #3: Error Alert

Estimate of time needed to complete: 1 hr

Start time: 12 am

Finish time: 12:30 am

Actual time needed to complete: 30 minutes

## Feature #4: Weather Forecast Data from Server

Estimate of time needed to complete: 1 hr

Start time: 5:00 pm

Finish time: 5:50 pm

Actual time needed to complete: 50 min

## Feature #5: Movie Request and Render

Estimate of time needed to complete: 1 hr

Start time: 12:00am

Finish time: 1:30am

Actual time needed to complete: 1.5 hrs

## Refactor/Modularize

Estimate of time needed to complete: 45 minutes

Start time: 6:00pm

Finish time: 7:00pm

Actual time needed to complete: 1 hr
