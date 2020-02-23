export function reducer(state = false, action) {
  switch (action.type) {
    case 'login':
      return true;
    case 'logout':
      return false;
    default:
      throw new Error();
  }
}