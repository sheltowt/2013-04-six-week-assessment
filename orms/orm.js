var query = function(string) {
  // Assume this function takes a valid SQL query string
  // as an input, and executes that query on some database
};

userCount = 0;

var User = function(name, email) {
  this.name = name;
  this.id = id;
  this.email = email;
  count++;
};

User.prototype.constructor = User;



User.prototype.save = function() {
  // ========YOUR CODE HERE===========
  string = "INSERT INTO users (name, id, email) VALUES (" + this.name + "," + this.id + "," + this.email + ")";
  query(string);
};


// * Suppose you are provided with a `query()` function that can retrieve data from a database when given a string of valid SQL code, and a User class:
//   * [ ] Implement `User.prototype.save()`, such that it stores the current user's data to the database
//     * [ ] `User.save()` should store a user's name, id, and email
// INSERT INTO users (name, age, location) VALUES (name, age, location);