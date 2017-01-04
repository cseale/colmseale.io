(function() {
  // print welcome message
  var welcome = `
-------------------------------------------------

These are all the files on record for subject:

Full Name: Colm Fintan Seale
Occupation: Software Enginner

Created with help from codepen and inspriation from the Fallout series. For something more standard (Zzzzzz), search for Colm on LinkedIn or Github.

-------------------------------------------------


Please use the arrows and select one of following options:`;

var experience = `
ALTOCLOUD (Since Sept 2016)
SOFTWARE ENGINEER

Web and Mobile Application Engineer: Developing applications for customer messaging, data visualisations, designing content and advertising and general administration. Using AngularJS, React, React Native, WebSockets, Service Workers, NodeJS.


FIDELITY INVESTMENTS (2012 - 2016)
SENIOR SOFTWARE ENGINEER / SCRUM MASTER

Full Stack Engineer: Architected and developed a Reporting and DaaS Platform End-To-End from early project inception through to production and maintainence on a distributed agile team.

Front-End Tech Lead: Created Single Page Web Apps using AngularJS 1.X and modern javascript tooling.

Backend: Designed and developed a microservices architecture through introducing Docker and latest Spring Technologies like Spring Boot, Spring Cloud, Spring Data REST, Spring Batch etc. Experience with HDFS and Oracle.

Build and Release Engineer: Increased our DevOps capabilities by developing a Continuous Deployment strategy through Jenkins, Nexus and custom UNIX scripts to manage our multiple services and migration to Docker containers.

`;

  var projects = `
NASA OPEN MCT (Contributor)

Open MCT is a next-generation mission control framework for visualization of data on desktop and mobile devices. It is developed at NASA's Ames Research Center, and is being used by NASA for data analysis of spacecraft missions, as well as planning and operation of experimental rover systems.

https://github.com/nasa/openmct


STORJ (Contributor)

Storj is a platform, cryptocurrency, and suite of decentralized applications that allows you to store data in a secure and decentralized manner. Your files are encrypted, shredded into little pieces called 'shards', and stored in a decentralized network of computers around the globe. No one but you has a complete copy of your file, not even in an ecrypted form.
`;

var education = `
B.E in Electronic and Computer Engineering.
Studied at National University of Ireland, Galway.
2008 - 2012.
Graduated with 1st Class Honours.
`;

var contact = `
There are 3 main ways to get in touch with Colm:

Email: colm.seale@gmail.com
LinkedIn: https://www.linkedin.com/in/colm-seale-977a2b4b
Github: https://github.com/cseale
`;

var credits = `
Thanks to Christopher Anderton and the Fallout games for the inspriation for the site.
Check out the CodePen here: https://codepen.io/deluxive/pen/lxEGs
`;

  var options = ['Experience', 'Education', 'Projects', 'Contact Colm','Credits'];

  var pages = [{
    id: 'welcome',
    message: welcome
  }, {
    id: 'experience',
    message: experience
  }, {
    id: 'education',
    message: education
  }, {
    id: 'projects',
    message: projects
  }, {
    id: 'contact',
    message: contact
  }, {
    id: 'credits',
    message: credits
  }];

  var currentSelector = 0;

  function printPage(page) {
    document.getElementById('message').innerHTML = page.message;
  }

  function printOptions() {
    var string = '';
    for (var i = 0; i < options.length; i++) {
      string = string + (i === currentSelector ? '<div class="option selected">' : '<div class="option">');
      string = string + options[i];
      string = string + '</div>';
    }
    document.getElementById('options').innerHTML = string;
  }

  function printQuit() {
    document.getElementById('options').innerHTML = '<div class="option selected">Press the ANY key to go back</div>';
  }

  function handleKeyDown(event) {
    switch(event.keyCode){
      case 38:
        handleUp();
        break;
      case 40:
        handleDown();
        break;
      case 13:
        printPage(pages[currentSelector + 1]);
        printQuit();
        break;
      default:
        printPage(pages[0]);
        printOptions();
        break;
    }

    function handleDown() {
      if (currentSelector < options.length - 1) {
        currentSelector++;
      }
      printOptions();
    }

    function handleUp() {
      if (currentSelector > 0) {
        currentSelector--;
      }
      printOptions();
    }
  }

  document.getElementById('content').onkeydown = handleKeyDown;

  // go
  document.getElementById('content').focus();
  printPage(pages[currentSelector]);
  printOptions();
})();
