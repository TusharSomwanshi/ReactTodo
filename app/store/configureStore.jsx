var redux = require('redux');
var {searchTextReducer,showCompletedReducer,todosReducer} = require('reducers');

export var configure = () =>{
  var combineReducer = redux.combineReducer({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  });

  var store = redux.createStore(reducer, redux.compose(
    windows.devToolsExtension ? windows.devToolsExtension() : f => f
  ));

  return store;
};
