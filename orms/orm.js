var query = function(string) {
  // Assume this function takes a valid SQL query string
  // as an input, and executes that query on some database
};

var User = function(name, email) {
  this.name = name;
  this.email = email;
};

User.prototype.constructor = User;

count = 0;

User.prototype.save = function() {
  // ========YOUR CODE HERE===========
  string = "INSERT INTO users (name, id, email) VALUES (" + this.name + "," + String(count) + "," + this.email + ")";
  query(string);
};


// * Suppose you are provided with a `query()` function that can retrieve data from a database when given a string of valid SQL code, and a User class:
//   * [ ] Implement `User.prototype.save()`, such that it stores the current user's data to the database
//     * [ ] `User.save()` should store a user's name, id, and email
// INSERT INTO users (name, age, location) VALUES (name, age, location);