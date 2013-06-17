// Generated by CoffeeScript 1.6.3
(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.Tasks = (function(_super) {
    __extends(Tasks, _super);

    function Tasks() {
      _ref = Tasks.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Tasks.prototype.model = Task;

    Tasks.prototype.tasksRemaining = function() {
      return this.without.apply(this, this);
    };

    Tasks.prototype.incompleteItems = function() {
      return this.where({
        complete: false
      });
    };

    return Tasks;

  })(Backbone.Collection);

}).call(this);

/*
//@ sourceMappingURL=Tasks.map
*/
