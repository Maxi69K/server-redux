import store from "./store";
import * as action_creators from "./action_creators";

const tbody = document.querySelector('tbody')
const accountsBtn = document.getElementById('accountsBtn')
const addAccountsBtn = document.getElementById('addAccountsBtn')
const accountsView = document.getElementById('accountsView')
const addAccountsView = document.getElementById('addAccountsView')
const saveBtn = document.getElementById('saveBtn')

window.addEventListener('load', () => {
  store.dispatch(action_creators.FETCH_ACCOUNTS());
  store.dispatch(action_creators.START_ACTION());
})

store.subscribe(function () {
  displayAccounts()
  changeView()
})

accountsBtn.addEventListener('click', function () {
  store.dispatch(action_creators.DISPLAY_ACCOUNTS_ACTION())
})

addAccountsBtn.addEventListener('click', function () {
  store.dispatch(action_creators.DISPLAY_ADD_ACCOUNTS_ACTION())
})

saveBtn.addEventListener('click', function () {
    let id = document.querySelector('[placeholder="id"]');
    let name = document.querySelector('[placeholder="name"]');
    let phone = document.querySelector('[placeholder="phone"]');
    let email = document.querySelector('[placeholder="email"]');

    if (id.value !== '' && name.value !== '' && phone.value !== '' && email.value !== '') {
      store.dispatch(
        action_creators.ADD_NEW_ACCOUNT_ACTION({
          id: parseInt(id.value),
          name: name.value,
          phone: phone.value,
          email: email.value,
        })
      )
      store.dispatch(action_creators.DISPLAY_ACCOUNTS_ACTION())
      id.value = ''
      name.value = ''
      phone.value = ''
      email.value = ''
    } else {
      alert('All fields are required');
    }
})

function changeView() {
  let view = store.getState().displayData.display
  if (view === 1) {
    accountsView.style.display = 'block'
    addAccountsView.style.display = 'none'
  } else {
    accountsView.style.display = 'none'
    addAccountsView.style.display = 'block'
  }
}

function displayAccounts() {
  let accounts = store.getState().accountsData.accounts;
  let text = ``
  accounts.forEach(account => {
    text += `
        <tr>
            <td>${account.id}</td>
            <td>${account.name}</td>
            <td>${account.phone}</td>
            <td>${account.email}</td>
            <td><button class="btn btn-danger delete" data-id="${
              account.id
            }">Delete</button></td>
        </tr>
        `    
  })
  tbody.innerHTML = text

  const allDeleteBtn = document.querySelectorAll('.delete');
  allDeleteBtn.forEach(deleteBtn => deleteBtn.addEventListener('click', deleteAccount))
}

function deleteAccount() {
  let id = this.getAttribute('data-id');
  store.dispatch(action_creators.DELETE_ACCOUNT_ACTION(id));
}
