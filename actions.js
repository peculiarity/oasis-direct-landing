function toggle(hasToExpand) {
  const dropdownList = $('.DropdownList');

  if (dropdownList.hasClass('DropdownList--visible')) {
    dropdownList.removeClass('DropdownList--visible');
  } else {
    dropdownList.addClass('DropdownList--visible');
  }
}

function contractDropdownList() {
  $('.DropdownList').removeClass('DropdownList--visible');
}


$(document).ready(function () {
  let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
  }

  web3.eth.getAccounts(function (err, accounts) {


    if (!web3.eth.defaultAccount && accounts.length) {
      web3.eth.defaultAccount = accounts[0];
    }

    $('.DropdownSelected')[0].innerText = web3.eth.defaultAccount;
    const wrapper = $(".DropdownListWrapper")[0];

    const list = document.createElement("ul");

    accounts.forEach(function (account) {
      const listItem = document.createElement("li");
      listItem.innerText = account;

      listItem.addEventListener('click', function (event) {
        $('span.DropdownSelected')[0].innerText = event.target.innerText;
      });


      list.appendChild(listItem);

      wrapper.append(list);
    });
  });

});