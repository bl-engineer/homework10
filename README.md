# homework10: Team Profile Generator

## Your Task

Your task is to build a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. Testing is key to making code maintainable, so you’ll also write a unit test for every part of your code and ensure that it passes each test.

Because this application won’t be deployed, you’ll need to provide a link to a walkthrough video that demonstrates its functionality and all of the tests passing. You’ll need to submit a link to the video AND add it to the readme of your project.

> **Note**: There is no starter code for this assignment.

## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```


```md
.
├── __tests__/             //jest tests
│   ├── Employee.test.js
│   ├── Engineer.test.js
│   ├── Intern.test.js
│   └── Manager.test.js
├── dist/                  // rendered output (HTML) and CSS style sheet      
├── lib/                   // classes
├── src/                   // template helper code 
├── .gitignore             // indicates which folders and files Git should ignore
├── index.js               // runs the application
└── package.json           
```


## Review

You are required to submit the following for review:

* A walkthrough video that demonstrates the functionality of the application and passing tests.

* A sample HTML file generated using your application.

* The URL of the GitHub repository, with a unique name and a readme describing the project.


## Result: Team Profile Generator

<img width="1274" alt="Screen Shot 2022-10-05 at 10 40 20 PM" src="https://user-images.githubusercontent.com/15242022/194206174-8a14e081-14fb-4fb6-a91c-5dae92601e85.png">


## Walkthrough video link:
https://drive.google.com/file/d/15oRcJiCHnwHkCGZ0Ank3XIlgrTPDkmVz/view

# A sample HTML file generated using my application:

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Team Profile</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;400&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <nav class="navbar" id="navbar">
        <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
    </nav>
</header>
  <main>
    <div class="container">
      
  <div class="col-4 mt-4">
    <div class="card h-100">
      <div class="card-header">
        <h3>Jared</h3>
        <h4>Manager</h4>
      </div>
      <div class="card-body">
        <p class="id">ID: 1</p>
        <p class="email">Email: <a href="mailto:jared@fakemail.com">jared@fakemail.com</a></p>
        <p class="office">Office Number: 1</p>
      </div>
    </div>
  </div>
  
  <div class="col-4 mt-4">
    <div class="card h-100">
      <div class="card-header">
          <h3>Alec</h3>
          <h4>Engineer</h4>
      </div>
      <div class="card-body">
        <p class="id">ID: 2</p>
        <p class="email">Email: <a href="mailto:alec@fakemail.com">alec@fakemail.com</a></p>
        <p class="github">Github: <a href="https://github.com/bl-engineer">bl-engineer</a></p>
      </div>
    </div>
  </div>
  
  <div class="col-4 mt-4">
    <div class="card h-100">
      <div class="card-header">
          <h3>Grace</h3>
          <h4>Engineer</h4>
      </div>
      <div class="card-body">
        <p class="id">ID: 3</p>
        <p class="email">Email: <a href="mailto:grace@gmail.com">grace@gmail.com</a></p>
        <p class="github">Github: <a href="https://github.com/gchoi2u">gchoi2u</a></p>
      </div>
    </div>
  </div>
  
  <div class="col-4 mt-4">
    <div class="card h-100">
      <div class="card-header">
          <h3>Jhon</h3>
          <h4>Engineer</h4>
      </div>
      <div class="card-body">
        <p class="id">ID: 4</p>
        <p class="email">Email: <a href="mailto:jhon@yahoo.fr">jhon@yahoo.fr</a></p>
        <p class="github">Github: <a href="https://github.com/johnlo">johnlo</a></p>
      </div>
    </div>
  </div>
  
  <div class="col-4 mt-4">
    <div class="card h-100">
      <div class="card-header">
        <h3>Tammer</h3>
        <h4>Intern</h4>
      </div>
      <div class="card-body">
        <p class="id">ID: 5</p>
        <p class="email">Email:<a href="mailto:tammer@fakemail.com">tammer@fakemail.com</a></p>
        <p class="school">University: GeorgTech</p>
      </div>
    </div>
  </div>
  
    </div>
  </main>
</body>
</html>

```

---
© Done by: Bocar Ly
Assigment: Week 10 Homework 


[Github_URL](https://github.com/bl-engineer/homework10/)
