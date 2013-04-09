###
=========================
DO NOT EDIT THIS FILE!!!!
=========================
###

class window.TaskListView extends Backbone.View

  className: 'container'

  $el: $ """
    <div class='container'>
      <div>Remaining tasks: <span class='tasks-remaining'></span></div>
      <br />
      <div class='task-list'></div>
    </div>
  """

  initialize: ->

    # instantiate the tasks collection, with some initial tasks
    @collection = new Tasks taskData

    # listen to the collection for changes
    @collection.bind 'add', @render, @
    @collection.bind 'completed', @render, @

    @render()

  render: ->
    # clear the task list before re-draw
    @$('.task-list').children().detach()
    # re-draw the list of tasks by mapping over @collection
    @$('.task-list').append @collection.incompleteItems().map (task)-> new TaskView(task).render()

    # update span to show num of tasks remaining by calling tasksRemaining() on collection
    @$('.tasks-remaining').html @collection.tasksRemaining()

    @$el