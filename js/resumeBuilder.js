
var bio = {
   name : "Sondos",
   role : "Web Developer",
   contacts : {
     mobile: 0560000000,
     email: "sondosazzouz@gmail.com",
     github: "sondosazz",
     location: "Jeddah, Saudi Arabia"
   },
   welcomeMessage : "Hello",
   skills : ["","","",""],
   bioPic : "images/",
   display : function displayBio(){

   }
};

var education = {
  schools : [
  {
    name: "Universety",
    location: "Jeddah, Saudi Arabia",
    degree: "Bachelor Science",
    majors:["Art","PSY"],
    dates: "2012-2016",
    url: "www.univeersity.com"
  },
  {
    name: "New Horizon",
    location: "Yokohama",
    degree: "Bachelor Science",
    majors:["Art","PSY"],
    dates: "2010-2012",
    url: "www.newhorizon.co.jp"
   }
 ],
 onlineCourses :  [
 {
   title: "Course1",
    school: "Lynda",
    dates: "2016-2017",
    url: "www.Lynda.com"
 },
 {
    title: "Course2",
    school: "Coursera",
    dates: "2016-2017",
    url: "www.univeersity.com"
  },
  {
    title: "Course3",
    school: "Udacity",
    dates: "2016-2017",
    url: "www.univeersity.com"
    }
  ],
  display : function displayEducation()
  {

  }
};

var work = {
  jobs : [{
    employer: "RGW",
    title: "Intern",
    location: "Jeddah, Saudi Arabia",
    dates: "2015-2016",
    vescription: "Intern at RGW comapny"
  },
  {
    employer: "Noon",
    title: "Intern",
    location: "Jeddah, Saudi Arabia",
    dates: "2014-2015",
    vescription: "Intern at Noon comapny"
  }
  ],
  display : function displayWork()
  {

  }
};

var projects = {
  projects : [{
    title: "animal card",
    dates: "2017",
    description: "animal card with html and css",
    images: ["images/proj1-1.jpg","images/proj1-2.jpg"]
  },
  {
    title: "portfolio",
    dates: "2017",
    description: "portfolio page",
    images: ["images/proj2-1.jpg","images/proj2-2.jpg"]
  }
  ],
  display : function displayProjects(){

  }

};
