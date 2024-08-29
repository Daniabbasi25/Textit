import { ContactListType, Contact } from "@/modules/contact/contactTypes";

export const insertContact = (
  contactList: ContactListType[],
  contact: Contact
): ContactListType[] => {
  const allContacts = [...contactList]; // Create a copy to avoid mutating the original array
  const firstLetter = contact.name[0].toUpperCase();

  // Find the section corresponding to the first letter of the contact's name
  const section = allContacts.find(
    (section) => section.alphabet === firstLetter
  );

  if (section) {
    // If the section exists, insert the contact into the data array
    section.data.push(contact);

    // Sort the data array to keep it alphabetically ordered
    section.data.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    // If the section doesn't exist, create a new one and insert the contact
    allContacts.push({
      alphabet: firstLetter,
      data: [contact],
    });

    // Sort the allContacts array to maintain alphabetical order of sections
    allContacts.sort((a, b) => a.alphabet.localeCompare(b.alphabet));
  }

  return allContacts;
};
