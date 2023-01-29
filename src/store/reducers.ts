import { IListItem } from './types';

interface IState {
  listItems: IListItem[];
}

interface IAction {
  type: string;
  payload: IListItem;
}

const initialState: IState = {
  listItems: []
};

const rootReducer = (state = initialState, action: IAction) => {
  console.log('state: ', state);
  console.log('action: ', action);
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state, todos: [...state.listItems, action.payload] };
    case 'DELETE_TODO':
      return { ...state, todos: state.listItems.filter(todo => todo.id !== action.payload.id) };
    default:
      return state;
  }
};

export { rootReducer };
