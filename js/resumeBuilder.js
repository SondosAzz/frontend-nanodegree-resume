
var formattedContacts2=[];
var bio = {
   name : "Sondos",
   role : "Web Developer",
   contacts : {
     mobile: "0560000000",
     email: "sondosazzouz@gmail.com",
     github: "sondosazz",
     twitter: "@sondosazz",
     location: "Jeddah, Saudi Arabia"
   },
   welcomeMessage : "Lorem ipsum dolor sit amet,",
   skills : ["Problem Solving","Team work","hard working","html/css"],
   bioPic : "images/bioPic.jpeg",
   display : function(){
     var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",this.welcomeMessage);
     var formattedBioPic = HTMLbioPic.replace("%data%",this.bioPic);
     $("#header").prepend(HTMLheaderRole.replace("%data%",this.role));
     $("#header").prepend(HTMLheaderName.replace("%data%",this.name));
     for(var i in bio.contacts){
        formattedContacts = HTMLcontactGeneric.replace("%contact%",i).replace("%data%",this.contacts[i]);
        formattedContacts2.push(formattedContacts);
        $("#topContacts").append(formattedContacts);
     }
     $("#header").append(formattedWelcomeMsg);
     $("#header").append(formattedBioPic);
     $("#header").append(HTMLskillsStart);
     for ( var i=0; i<bio.skills.length;i++){
      var formattedSkills = HTMLskills.replace("%data%", this.skills[i]);
       console.log(bio.skills[i]);
        $("#header").append(formattedSkills);
     }
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
    location: "Yokohama, Japan",
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
    url: "www.Coursera.org"

  },
  {
    title: "Course3",
    school: "Udacity",
    dates: "2016-2017",
    url: "www.Udacity.com"
    }
  ],
  display : function displayEducation(){
    $("#education").append(HTMLschoolStart);
    education.schools.forEach(function(school,i,arr){
      var formattedname = HTMLschoolName.replace("%data%",school.name);
      var formattedLoc = HTMLschoolLocation.replace("%data%",school.location);
      var formattedDegree = HTMLschoolDegree.replace("%data%",school.degree);
      var formattedmajor = HTMLschoolMajor.replace("%data%",school.majors);
      var formattedDates = HTMLschoolDates.replace("%data%",school.dates);
      $("#education").append(formattedname+formattedDegree);
      $("#education").append(formattedDates);
      $("#education").append(formattedLoc);
      $("#education").append(formattedmajor);
    });

    $("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(course,i,arr){
      var formattedTitle = HTMLonlineTitle.replace("%data%",course.title);
      var formattedSchool = HTMLonlineSchool.replace("%data%",course.school);
      var formattedDates = HTMLonlineDates.replace("%data%",course.dates);
      var formattedURL = HTMLonlineURL.replace("%data%",course.url);
      $("#education").append(formattedTitle+formattedSchool);
      $("#education").append(formattedDates);
      $("#education").append(formattedURL);
    });
  }
};

var work = {
  jobs : [{
    employer: "RGW",
    title: "Intern",
    location: "Jeddah, Saudi Arabia",
    dates: "2015-2016",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus."
  },
  {
    employer: "Noon",
    title: "Intern",
    location: "Jeddah, Saudi Arabia",
    dates: "Sep 2014- Mar 2015",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus."
  }
  ],
  display : function displayWork()
  {
    $("#workExperience").append(HTMLworkStart);
    work.jobs.forEach(function(job,i,arr){
      var formattedEmp = HTMLworkEmployer.replace("%data%",job.employer);
      var formattedTitle = HTMLworkTitle.replace("%data%",job.title);
      var formattedHTMLworkDates = HTMLworkDates.replace("%data%",job.dates);
      var formattedLoc = HTMLworkLocation.replace("%data%",job.location);
      var formattedDes = HTMLworkDescription.replace("%data%",job.description);

      $("#workExperience").append(formattedEmp + formattedTitle);
      $("#workExperience").append(formattedHTMLworkDates);
      $("#workExperience").append(formattedLoc);
      $("#workExperience").append(formattedDes);
    });
  }
};

var projects = {
  projects : [{
    title: "animal card",
    dates: "2017",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
    images: ["images/proj1-1.png","images/proj1-2.jpg"]
  },
  {
    title: "portfolio",
    dates: "2017",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
    images: ["images/proj1-2.jpg","images/proj2-2.jpeg"]
  }
  ],
  display : function(){
    $("#projects").append(HTMLprojectStart);
    projects.projects.forEach(function(proj,i,arr){
      var formattedTitle = HTMLprojectTitle.replace("%data%",proj.title);
      var formatteddates = HTMLprojectDates.replace("%data%",proj.dates);
      var formattedDes = HTMLprojectDescription.replace("%data%",proj.description);
      //var formattedImages = HTMLprojectImage.replace("%data%",proj.images);

            $("#projects").append(formattedTitle);
            $("#projects").append(formatteddates);
            $("#projects").append(formattedDes);
      for (var i=0;i<proj.images.length;i++){
        var formattedImages = HTMLprojectImage.replace("%data%",proj.images[i]);
        $("#projects").append(formattedImages)
      }
    });
  }
};

function displayMap(){
  $("#mapDiv").append(googleMap);
}
function displayFooter(){

     $("#footerContacts").append(formattedContacts2);

}
//Display All Sections
bio.display();
work.display();
projects.display();
education.display();
displayMap();
displayFooter();
