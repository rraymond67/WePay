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

\_**WePay** is a web application for online commerce. Its a place where you post items for sale and other users will be able to place bids. In order to place bids or post an item you must sign up. This application will be similar to Ebay. The search bar will help users filter through the long list of items for sale. Once they find the items they are interest in, they click on it and it will navigate them to the details page whee they eill see the item's description and the list of bidders. Users who are not sign in will still be able to navigate the website but they wont be able to place bids or post items for sale.

<br>

## MVP

- _Full CRUD on back end,_
- _3 tables (USER, ITEM, BIDS)._
- _User Authentication._
- _Search bar_
- _Full CRUD on item_

<br>

### Goals

| Day     | Deliverable                                    | Status   |
| ------- | ---------------------------------------------- | -------- |
| Feb 23  | Repo SETUP/ ReadMe/                            | Complete |
| Feb 24  | Student inputs/ Poject Approval                | Complete |
| Feb 25  | Back end setup/ Ruby on Rails                  | Complete |
| Feb 26  | Routes set up/ Back end testing                | Complete |
| Feb 27  | Front end set up/ React                        | Complete |
| Feb 28  | Axios calls / Routes testing                   | Complete |
| Mar 1st | MVP implimantation                             | Complete |
| Mar 2nd | Tailwindstyling/ add more Post MVP if possible | Complete |
| Mar 3   | Deployment/ Presentations                      |

<br>

### Libraries and Dependencies

|   Library    | Description                                                        |
| :----------: | :----------------------------------------------------------------- |
|    React     | _Front end._                                                       |
| React Router | _Front End. This will handle the routes_                           |
|    Axios     | _This will handle the connection with the Api in the back End._    |
| Tailwind Css | _This will facilitate styling the front end._                      |
| Flowbite css | _It is an extencion of tailwind. Great tool to build the Nav bar._ |

<br>

### Client (Front End)

#### Wireframes

![webimage](https://i.imgur.com/zQFePom.png)

#### Component Tree

![webpage](https://i.imgur.com/N1VDkRM.png)

#### Component Architecture

```structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Footer
          |__ Footer.jsx
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
      |__ ItemContainer.jsx
|__ services/

```

#### Time Estimates

| Task                                              | Priority | Estimated Time | Actual Time |
| ------------------------------------------------- | :------: | :------------: | :---------: |
| Repo setup / Readme,                              |    M     |      4hrs      |    6hrs     |
| Create backend/ Ruby on rails set up              |    H     |      2hrs      |    2hrs     |
| Creating Database/ Tables and columns / Seed Data |    H     |      1hrs      |     2hr     |
| Model routes and controllers                      |    H     |      4hrs      |     6hr     |
| testing backend with Postman                      |    H     |      1hrs      |     1hr     |
| Create Front End/ React                           |    H     |      3hrs      |    2hrs     |
| Setting up Api services                           |    H     |      1hrs      |     1hr     |
| Create Componenets                                |    H     |      8hrs      |    12hrs    |
| Make axios calls from the Service Api             |    M     |      3hrs      |    3hrs     |
| Test Routes in the front End                      |    H     |      4hrs      |    3hrs     |
| Tailswind styling                                 |    H     |     10hrs      |    12hrs    |
| Post MVPS                                         |    L     |      4hrs      |    2hrs     |
| Clean up                                          |    L     |      5hrs      |     1hr     |
| Total                                             |    H     |      50rs      |    53hrs    |

<br>

### Server (Back End)

#### ERD Model

![Imgur](https://i.imgur.com/JxqAFVJ.png)

<br>

---

## Post-MVP

- _Pop up Alert to let user know the new item has been succesfully posted,_
- _Limited amounts of bids. You can only bid 3 times on the same perticulat item._
- _Pop up alert when item has been deleted and edited_
- _Pop up alert when the user place a bid_

---

## Code Showcase

```
import React from 'react'
import Wepay from '../images/wepay.jpeg'
import { Link } from 'react-router-dom'

export default function Home(props) {
  return (
    <div className="w-full border-blue-700">
    <div className="flex flex-wrap items-center px-20 py-20 md:flex-nowrap">
        <div className="flex flex-col justify-center flex-grow w-full ">
          <img className="-mt-20 scale-50" src={Wepay}></img>
        <h1 class="mb-20 w-full text-3xl text-center text-red-900">Welcome to WePay. Your favorate bidding destination for everything and anything E-commerce.
        Sign up to become one of our many vendors who chose this website to sell there items to the highest bidder.
        Log in to place your bid on the item you want for a chance to win</h1>
          <button class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline">
          <Link to="/items">BUY</Link>
        </button>
          <button to="/items" class="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline">
            {props.currentUser ?

              <Link to="/items/create">SELL</Link>
              :
              <Link to="/register">SELL</Link>
            }
          </button>
        </div>
    </div>
    </div>
  )
}

```

## Code Issues & Resolutions

> The navigation bar was a challenge. I wanted to incorporate a hamburger menu that was responsive the size of the screen. I eventually found Flowbite that help facilitate the process.
> The search bar was also a challenge in many ways. Firstly, it would not filter the items properly so I had to define another variable that would also take in the oncoming data from the back end. I used one to stored the data and the other one to filter the data in case the user unteracts with the search bar. The second problem was with the initial state (useState) of the filter data which would not populate the page wih any item. I had to set up the initial state to undefined and use a turnary oporation when the page first loads so that the page could be populated with the items.
