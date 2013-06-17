class window.Tasks extends Backbone.Collection

  model: Task

  tasksRemaining: ->
    # ========YOUR CODE HERE===========
    # should return a number
    @.where({complete: false}).length

  incompleteItems: ->
    # ========YOUR CODE HERE===========
    # should return array or collection of incomplete tasks
    @.where({complete: false})
