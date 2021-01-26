import axios from 'axios';

import {
  addContactRequest,
  addContactSuccess,
  addContactError,
} from './contacts-actions';

axios.defaults.baseURL = 'http://localhost:4040';

export const addContact = (name, number) => dispatch => {
  const contact = { name, number };

  dispatch(addContactRequest);

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};
