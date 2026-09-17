function loginUser(user, cb1) {
   console.log("getting user");
   setTimeout(() => {
      cb1({ userid: 1, name: "muneesh", age: 12 })
   }, 1000)
};

function fetchPermission(userID, cb2) {
   console.log("Fetching Permission");
   setTimeout(() => {
      cb2(["Edit = No", "View =yes", "Read = yes"]);
   }, 1000)
};

function loadDashboard(permissions, cb3) {
   console.log("Loading Dashboard");
   setTimeout(() => {
      cb3("Dashboard Loaded");
   }, 1000)
};

loginUser("Muneesh", function (userObj) {
   fetchPermission(userObj.userid, function (permissionsArray) {
      loadDashboard(permissionsArray, function (e) {
         console.log(e)
      })
   })
});