export const selectLibary = (libaryID) => {
  return {
    type: 'select_library',
    payload: libraryID
  };
};
