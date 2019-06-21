/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
//const studentList = document.querySelector('student-list').children;
const studentList = document.getElementsByTagName('li');
const namesPerPage = 10;






/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/
const showPage = (list, page) => {
   let startIndex = (page * namesPerPage) - namesPerPage; // 0
   let endIndex = page * namesPerPage;                   // 9
   for (let i=0; i < list.length; i += 1) {
      if (i >= startIndex && i < endIndex) {
         list[i].style.display = ""; // this code will show the 10 list items on the page.
      }else {
         list[i].style.display = "none"; // this code will hide the remaining names in the list that are not apart of the 10 that will be shown on the page. 
      }
   }

}



/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

const appendPageLinks = (list) => {
   let pageNumber = Math.ceil(list.length/namesPerPage);

   //const divPage = document.querySelector('.page');
   const divPagination = document.createElement('div');

   divPagination.className = 'pagination';
   //document.querySelector('.page').appendChild(divPagination);

   const ul= document.createElement('ul');

   divPagination.appendChild(ul);
   document.querySelector('.page').appendChild(divPagination);

   for (let i = 1; i <= pageNumber; i+= 1) {
      let li = document.createElement('li');
      let a = document.createElement('a');
     
      a.textContent = i;
      a.href = "#";
    
      if(i === 1){
      a.className = 'active';
    }
      
      ul.appendChild(li);
      li.appendChild(a);

   }


      ul.addEventListener('click', (event) => {
         const clickedItem = event.target;
         let clickedNumber = event.target.textContent; // This the page number that the user will click on in order to navigate the list of student names.
         //let clickedItem = event.target;
         //let paginationLinkItems = document.querySelectorAll('page');
         showPage(list, clickedNumber); // will allow for the link to be clicked. 
         let links = document.querySelectorAll('a');
         for (let p = 0; p < links.length; p += 1) {
            //let links = document.querySelectorAll('a');
            links[p].className ='none';
         }
      clickedItem.className ='active';
   
   });
}



showPage(studentList, 3);
appendPageLinks(studentList);





// Remember to delete the comments that came with this file, and replace them with your own code comments.