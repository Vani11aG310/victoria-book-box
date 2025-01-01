export const ACTIONS = {
  SET_USER: 'SET_USER',
  SET_WISHLIST: 'SET_WISHLIST',
}

const dataReducer = (state, action) => {
  
  switch (action.type) {
    case ACTIONS.SET_USER: {
      return {
        ...state,
        userId: action.userId,
      };
    }

    case ACTIONS.SET_WISHLIST: {
      return {
        ...state,
        wishlistData: action.payload,
        loading: false,
      };
    }

    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
};

export default dataReducer;
