

let files = [
  { name: 'Report', format: 'PDF', size: '2MB' },
  { name: 'Data', format: 'CSV', size: '1.2MB' },
  { name: 'Presentation', format: 'PPT', size: '5MB' },
  { name: 'Image', format: 'JPG', size: '500KB' },
  { name: 'Archive', format: 'ZIP', size: '20MB' }
];

const addFileBtn = document.querySelector("#addFileBtn");
const fileTableBody = document.querySelector("#fileTableBody");
const fileModal = document.querySelector("#fileModal");
const modalTitle = document.querySelector("#modalTitle");
const fileForm = document.querySelector("#fileForm");
const fileName = document.querySelector("#fileName");
const fileFormat = document.querySelector("#fileFormat");
const fileSize = document.querySelector("#fileSize");
const closeModal = document.querySelector(".close");

let editMode = false;
let currentIndex = null;

generateList();

function generateList() {
  fileTableBody.innerHTML = '';
  for (let i = 0; i < files.length; i++) {
   fileTableBody.innerHTML += `
       <tr>
             <td>${files[i].name}</td>
             <td>${files[i].format}</td>
             <td>${files[i].size}</td>
             <td>
                 <button onclick="editFiles(${i})">Edit</button>
                 <button onclick="removeFiles(${i})">Delete</button>
             </td>
         </tr>
     `;
   };
 }

addFileBtn.addEventListener("click", () => {
  modalTitle.textContent = "Add File";
  fileForm.reset();
  editMode = false;
  fileModal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
  fileModal.style.display = "none";
});


fileForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!editMode) {
    files.push({
      name: fileName.value,
      format: fileFormat.value,
      size: fileSize.value,
    });
  } else {
    files[currentIndex] = {
      name: fileName.value,
      format: fileFormat.value,
      size: fileSize.value,
    };
    editMode = false;
  }

  fileModal.style.display = "none";
  generateList();
});


function editFiles(index) {
  currentIndex = index;
  modalTitle.textContent = "Edit File";
  fileName.value = files[index].name;
  fileFormat.value = files[index].format;
  fileSize.value = files[index].size;
  editMode = true;
  fileModal.style.display = "flex";
}


function removeFiles(index) {
  files.splice(index, 1);
  generateList();
}
