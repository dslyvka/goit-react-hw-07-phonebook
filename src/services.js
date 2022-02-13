export const getContacts = () => {
  return fetch('https://620677d592dd6600171c0afc.mockapi.io/contacts').then(
    res => res.json(),
  );
};
