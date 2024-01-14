// ------------------------dropDownOfProfile-----------------------------------
let profileImg = document.getElementById("navimg").onclick = function () {
    console.log("hello")
}
$(document).ready(function() {
    var profileMenu = $("#profileMenu");
    var profileImg = $("#navimg").on("click", function() {
      profileMenu.toggleClass("open-menu");
    });
  });

// ------------------------------------dropDownOfSearchInput------------------------------------
  let local = $(document).ready(function() {
    var searchMenu = $("#searcData")
    var searchInput = $("#searchInput").on("click", function() {
      searchMenu.toggleClass("open-menu");
      searchMenu.css("box-shadow", "2px 2px 20px black");
      
    });
  })
  localStorage.setItem("toggleSearch", JSON.stringify(local));
  if(localStorage.getItem("toggleSearch")) {
    var count1 = document.getElementById(count1);
     count1 = JSON.parse(localStorage.getItem("toggleSearch"))
  }
  
//  ----------------------------------dropDownInSmallScreen----------------------------------------
  $(document).ready(function() {
    $('#searchForm').on('submit', function(e) {
      e.preventDefault(); // Prevent form submission

      var searchTerm = $('#searchInput').val(); // Get the search term

      // Perform the search
      $('.searchable').hide(); // Hide all elements with the class 'searchable'
      $('.searchable:contains(' + searchTerm + ')').show(); // Show elements containing the search term
    });
  });

// =====================================the ActionsOnSearchInput=======================================
const elementDiv = document.querySelector('#searcData');
const elementInput = document.querySelector('input#searchInput.form-control.me-2');
let localData;
async function fetchText() {
  let response = await fetch('data.json');
  let data = await response.json();
  localData = data;
  
}
  async function main() {
    await fetchText();
    elementInput.addEventListener("keyup", (event) => {
      elementDiv.innerHTML = "";
      for(let i = 0; i < localData.length ; i++) {
        if(localData[i].name.toUpperCase().includes(elementInput.value.toUpperCase())) {
          var getImg = localData[i].url;
          var imgElment = document.createElement("img");
          imgElment.src = getImg;
          imgElment.style.width = "30px";
          imgElment.style.height = "30px";
          imgElment.style.borderRadius = "50%";
          // imgElment.style.position = "absolute";
          // imgElment.style.right = "5px";
          // imgElment.style.top = "20px";
          let nameOfPerson = document.createTextNode(localData[i].name);
          // nameOfPerson.style.position = "absolute";
          // nameOfPerson.style.right = "15px"
          elementDiv.appendChild(nameOfPerson);

          // elementDiv.appendChild(document.createTextNode(localData[i].name));
          elementDiv.appendChild(imgElment);
          
        }
        if(elementInput.value === "") {
          elementDiv.innerHTML = "";
        }
        
      }
    })
    localStorage.setItem("localData", JSON.stringify(localData));
    if(localStorage.getItem("localData")) {
     JSON.parse(localStorage.getItem("localData"))
    }
    
}
let mainFun = main()
// localStorage.setItem("mainFunction", JSON.stringify(mainFun));
// JSON.parse(localStorage.getItem("mainFunction"))

// ================================logOut================================
let logOut = document.getElementById("logOut").onclick = function () {
  var confirmLogout = confirm("Are you sure that you want to log out?");
  if (confirmLogout) {
    window.location.href = 'signIn.html';
    history.replaceState(null, null, "signIn.html");
  }
}






