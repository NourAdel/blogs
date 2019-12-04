import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: action.payload.title,
          content: action.payload.content
        },
      ];
    case 'delete':
      return state.filter(post => post.id !== action.payload);
    default:
      return state;
  }
};
const addPost = dispatch => {
  return (title, content) => {
    dispatch({type: 'add', payload:{title, content}});
  };
};

const deletePost = dispatch => {
  return id => {
    dispatch({type: 'delete', payload: id});
  };
};

export const {Context, Provider} = createDataContext(
  blogReducer,
  {addPost, deletePost},
  [],
);
