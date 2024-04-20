import axios from "axios";

const API_URL = "http://localhost:8080/contacts";

export async function saveContact(contact) {
  return await axios.post(API_URL, contact);
}

export async function getContacts(page = 0, size = 10) {
  return await axios.get(`${API_URL}?page=${page}&size=${size}`);
}

export async function getContact(id) {
  return await axios.get(`${API_URL}/${id}`);
}

export async function updatePhoto(formData) {
  return await axios.put(`${API_URL}/photo`, formData);
}

export async function deleteContact(id) {
  console.log("delete api registered");
  return await axios.delete(`${API_URL}/${id}`);
}

//updatContact not needed due to saveContact
// export async function updateContact(contact) {
//   return await axios.post(API_URL, contact);
// }
