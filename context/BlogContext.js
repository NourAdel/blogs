import createDataContext from './createDataContext';
import jsonServer from '../APIs/jsonServer';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'getPosts':
      return action.payload;
    case 'add':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case 'delete':
      return state.filter(post => post.id !== action.payload);
    case 'edit':
      return state.map(post => {
        if (post.id === action.payload.id) {
          return action.payload;
        } else {
          return post;
        }
      });
    default:
      return state;
  }
};
const getPosts = dispatch => {
  return async () => {
    const response = await jsonServer.get('/posts');
    dispatch({type: 'getPosts', payload: response.data});
  };
};

const addPost = dispatch => {
  return async (title, content) => {
    await jsonServer.post('/posts', {title,content});
  };
};

const deletePost = dispatch => {
  return id => {
    dispatch({type: 'delete', payload: id});
  };
};
const editPost = dispatch => {
  return (id, title, content) => {
    dispatch({type: 'edit', payload: {id, title, content}});
  };
};

export const {Context, Provider} = createDataContext(
  blogReducer,
  {addPost, deletePost, editPost, getPosts},
  [],
);
