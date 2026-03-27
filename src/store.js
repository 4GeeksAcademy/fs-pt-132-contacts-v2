export const initialStore=()=>{
  return{
    message: null,
    contactsData: {},
    selected: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ]
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){

    case 'selectedContact': 
    return {
      ...store,
      selected: store.contactsData.contacts.find(el=> el.id == action.payload.id)
    }

    case 'updateContactsData':
      return{
        ...store,
        contactsData: action.payload.data
      }


    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    default:
      throw Error('Unknown action.');
  }    
}
