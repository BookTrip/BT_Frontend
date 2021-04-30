<a href="https://imgbb.com/"><img src="https://i.ibb.co/ygfQnkR/logo.png" alt="logo" width="250" height="150" border="0"></a>

## Online Books Platform
>“The more that you read, the more things you will know. The more that you learn, the more places you’ll go”

## Our Team
| NAME | SID |
| ------ | ------ |
| Dhruv Chopra | 19103040 |
| Ayush Kumar | 19103080 |
| Vernie Thorpe | 19103081 |

## Problem Analysis
If you've ever set foot in a bookworm's bedroom, the first thing you'll notice are the books. In fact, there are probably so many books that the dusty shelves are creaking under the weight of limited-edition hardcovers and dog-eared paperbacks. This lack of space can lead people to wonder what they should do with their books.
The two main questions arise:
- How to effectively store books? (so that it takes up minimum space)
- How to carry books from place to place? (as books can usually be heavy)

## Proposed Solution
Our team has come up with an online platform as a solution to this problem. BT: BookTrip is an Online Books Platform that would play the role of a catalogue of books, which would be available for download and storage on the user’s devices. It provides the convenience of having thousands of books on a single device.
**The purpose of BT:** BookTrip is to effectively act as an online book store as well as a personalised online bookshelf. The purpose of our project is to make books available for readily, at all times and all in one place. The users will LOG-IN to their profiles and will get a host of books to choose from. The user will be able to COMMENT on and REVIEW the books he/she might have read. Books will be available for DOWNLOAD, once it has been PAYMENT has been made. 
The books in the database would be make available through a SUPPLIER, usually publishing companies. These companies would SUPPLY PRODUCTS, i.e., the books they own, and the ADMIN will add them in the database of the ONLINE BOOK PLATFORM and be made available for the users to access.

## Usage

### Env Variables
Create a .env file in then root and add the following
```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
```

### Install Dependencies (frontend & backend)
npm install
cd frontend
npm install

### Run
```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

### Seed Database
You can use the following commands to seed the database with some sample users and products as well as destroy all data
```
# Import data
npm run data:import
```

```
Sample User Logins:

admin@example.com (Admin)
123456

dhruv@example.com (Customer)
123456

ayush@example.com (Customer)
123456

vernie@example.com (Customer)
123456
```

## Languages and Tools:
<p align="left"> 
<a href="https://www.mongodb.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a> <a href="https://expressjs.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a><a href="https://reactjs.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://redux.js.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a><a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://getbootstrap.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </</p>
