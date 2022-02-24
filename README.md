# WePay

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**WePay** is a web application for online commerce. Its a place where you post items for sale and other users will be able to place bids. In order to place bids or post an item you must sign up. This application will be similar to Ebay. The highest bider will be move to the top of the list. Once the owner of the item is satisfy with the bidding price. The item will be sold. 

<br>

## MVP

- _Full CRUD on back end,_
- _3 tables (USER, ITEM, BIDS)._
- _User Authentication._
- _Highest bid will move up the bidding list._
- _Search bar
- _Full CRUD on item_
- _Full CRUD on Bids

<br>

### Goals

| Day    | Deliverable                                       | Status   |
| ------ | ------------------------------------------------- | -------- |
| Feb 23 | Repo SETUP/  ReadMe/                              | Complete |
| Feb 24 | Student inputs/ Poject Approval                   | 
| Feb 25 | Back end setup/  Ruby on Rails                    |
| Feb 26 | Routes set up/ Back end testing                   |
| Feb 27 | Front end set up/ React                           | 
| Feb 28 | Axios calls / Routes testing                      | 
| Mar 1st| MVP implimantation                                | 
| Mar 2nd| Tailwindstyling/ add more Post MVP if possible    | 
| Mar 3  | Deployment/ Presentations                         | 
<br>

### Libraries and Dependencies


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Front end._ |
|   React Router   | _Front End. This will handle the routes_ |
|      Axios       | _This will handle the connection with the Api in the back End._ |
|     Tailwind Css | _This will facilitate styling the front end._ |

<br>

### Client (Front End)

#### Wireframes
![webimage](https://i.imgur.com/QmhDjVv.png)


#### Component Tree

![webpage](https://i.imgur.com/N1VDkRM.png)

#### Component Architecture

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Login.jsx
      |__ Navbar.jsx
      |__ UserCreate.jsx
      |__ Item.jsx
      |__ ItemDetails.jsx
      |__ ItemEdit.jsx
      |__ ItemCreate.jsx
      |__ Bid.jsx
      |__ BidCreate.jsx
      |__ BidEdit.jsx
      |__ BidDelete.jsx
      |__ Container/
        |__ ItemContainer.jsx
        |__ BidContanier.jsx
      
|__ services/

```

#### Time Estimates


| Task                                                  | Priority | Estimated Time | Actual Time |
| ----------------------------------------------------- | :------: | :------------: | :----------:|
| Repo setup / Readme,                                  |    M     |      4hrs      |         |
| Create backend/ Ruby on rails set up                  |    H     |      2hrs      |      |   
| Creating Database/ Tables and columns / Seed Data     |    H     |      1hrs      |     |  
| Model routes and controllers                          |    H     |      4hrs      |       |
| testing backend with Postman                          |    H     |      1hrs      |     |
| Create Front End/ React                               |    H     |      3hrs      |      |
| Setting up Api services                               |    H     |      1hrs      |       |
| Create Componenets                                    |    H     |      8hrs      |      |
| Make axios calls from the Service Api                 |    M     |      3hrs      |       |
| Test Routes in the front End                          |    H     |      4hrs      |       |
| Tailswind styling                                     |    H     |      10hrs     |        |        
| Post MVPS                                             |    L     |      4hrs      |       |
| Clean up                                              |    L     |      5hrs      |     |
| Total                                                 |    H     |      50rs      |     44hrs   | 
<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.

[ERD Sample](https://drive.google.com/file/d/1kLyQTZqfcA4jjKWQexfEkG2UspyclK8Q/view)
<br>

***

## Post-MVP

- _Pop up Alert to let user know the new item has been succesfully posted,_
- _Limited amounts of bids. You can only bid 3 times on the same perticulat item._



***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
