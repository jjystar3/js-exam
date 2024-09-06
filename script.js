function registerBook(){

  let inputCategory = document.getElementById("category");
  let inputBookName = document.getElementById("bookname");
  let inputPrice = document.getElementById("bookprice");

  if (inputCategory.value === "") {
    alert("카테고리를 선택해주세요");
    return;
  }
  if (inputBookName.value === "") {
    alert("도서명을 입력해주세요");
    return;
  }
  if (inputPrice.value === "") {
    alert("가격을 입력해주세요");
    return;
  }
  
  let table = document.getElementById("book-list-tbody");
  let existingTr = table.getElementsByTagName("tr");
  let tr = document.createElement("tr");

  for (i = 0; i < existingTr.length; i++) {
    let tds = existingTr[i].querySelectorAll("td");
    if(tds[1].textContent === inputCategory.value && tds[2].textContent === inputBookName.value){
      alert("같은 카테고리 안에 동일한 책이 등록되어 있습니다.");
      return;
    }
  }

  let num = document.createElement("td");
  num.textContent = table.children.length + 1;

  let category = document.createElement("td");
  category.textContent = inputCategory.value;

  let bookName = document.createElement("td");
  bookName.textContent = inputBookName.value;

  let price = document.createElement("td");
  price.textContent = inputPrice.value + "원";

  let deleteTh = document.createElement("td");
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "삭제";
  deleteBtn.addEventListener("click", () => {
    tr.remove();
  });

  deleteTh.appendChild(deleteBtn);

  tr.appendChild(num);
  tr.appendChild(category);
  tr.appendChild(bookName);
  tr.appendChild(price);
  tr.appendChild(deleteTh);
  table.appendChild(tr);

  alert("도서가 성공적으로 등록되었습니다.");
}

function sortTable(sortType) {
  let table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("book-list-tbody");
  switching = true;

  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 0; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("td")[3];
      y = rows[i + 1].getElementsByTagName("td")[3];
      
      if(sortType === "ascending"){
        if (parseInt(x.textContent) > parseInt(y.textContent)) {
          shouldSwitch = true;
          break;
        }
      }else if(sortType === "descending"){
        if (parseInt(x.textContent) < parseInt(y.textContent)) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

function searchTable(){
  let searchText = document.getElementById("search-input");
  let filter = searchText.value.toUpperCase();
  let table = document.getElementById('book-list-tbody');
  let tr = table.getElementsByTagName('tr');

  for (i = 0; i < tr.length; i++) {
    let tds = tr[i].querySelectorAll('td');
    let txtValue = tds[2].textContent;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  }
}