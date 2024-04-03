var UserProfile = (function() {
    var username = localStorage.getItem('username') || "";
  
    var getName = function() {
      return username;
    };
  
    var setName = function(name) {
      username = name;
      localStorage.setItem('username', name);
    };
  
    return {
      getName: getName,
      setName: setName
    };
  
  })();
  
  export default UserProfile;