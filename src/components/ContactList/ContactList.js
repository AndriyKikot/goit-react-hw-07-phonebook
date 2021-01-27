import { useSelector, useDispatch } from 'react-redux';

import { deleteContact } from '../../redux/contacts/contacts-operations';
import { filterContacts } from '../../redux/contacts/contacts-selectors';
import ContactListItem from './ContactListItem';

import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(filterContacts);
  const dispatch = useDispatch();

  if (contacts.length === 0) return null;
  return (
    <ul className={styles.contact__list}>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          deleteContact={() => dispatch(deleteContact(id))}
        />
      ))}
    </ul>
  );
};

export default ContactList;
