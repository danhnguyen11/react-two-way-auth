export default (state = [], action) => {
    switch (action.type) {
      case 'FETCH_QUOTE':
        //console.log(action.payload)      
        return action.payload;
      default:
        return state;
    }
};