//Project 2 code (Pagination)

const studentList = document.getElementsByClassName('student-item');
const namesPerPage = 10;

// above are the two global variables that I am using throughout the code to identify how many students that I want a page, as well as selecting the class of the <li></li> element that contains the list of 54 student names. 




const showPage = (list, page) => {       // I created an arrow function with the parameters of ('list', 'page') which coincide with my global variables.  
   let startIndex = (page * namesPerPage) - namesPerPage; // this variable ensures that the student list starts with an index of [0], meaning the first student in the list. 
   let endIndex = page * namesPerPage;                   // this piece of code ensures that on any given page that there will be no more than 10 students per page. 
      
   if (i >= startIndex && i < endIndex) { 
         list[i].style.display = 'block'; // this code will show the 10 list items on the page.
      }else {
         list[i].style.display = 'none'; // this code will hide the remaining names in the list that are not apart of the 10 that will be shown on the page. 
      }
   }

const appendPageLinks = (list) => { //I created the appendPageLinks function in order to hold the DOM manipulation code.
   let pageNumber = Math.ceil(list.length/namesPerPage); // takes the number of students (list.length) and divides that number by the number of names (namesPerPage) that are supposed to be on a page, and takes the integer directly above the value given by the math of list.length/namesPerPage. 
    const divPagination = document.createElement('div');// created a div element and stored it in the variable divPagination

   divPagination.className = 'pagination'; // set the class name of the div element that I created in the divPagination, to the value of 'pagination'
   document.querySelector('.page').appendChild(divPagination); // appended my created div element (divPagination) to the element that holds the class of (.page).

   const ul= document.createElement('ul');//created the element 'ul' and stored it in a variable ul. 

   divPagination.appendChild(ul); // appended the div element I previously made (divPagination) to a parent ul that I created directly above. 
   
   for (let i = 1; i <= pageNumber; i++) { // takes the variable that I created to store the math necessary in order to ensure that number of students in the list is divided by only 10 students per page. This code however, loops the pageNumber variable until all 54 students are accounted for on a page. 
       let li = document.createElement('li');// created a new element li, and stored it in a variable li
       let a = document.createElement('a');// created a new element 'a' and stored it in a variable a
     
       a.textContent = i; // takes that actual text content of the <a></a> element and stores the value of i in it. which was defined in the for loop
       a.href = '#'; //sets the link (href) of the anchor tag to the value of '#'
    
       if(i === 1){// this if statement says that if i (which now defines the anchor tag) to make the class of <a> 'active'. that is to say that whenever the unser is in one page to highlight the link so that they will know what page they are actually looking in. 
       a.className = 'active';
    }
      
       ul.appendChild(li);//appends the elements that I created li to the ul element that I created, and the gives the li element the child of <a>.
       li.appendChild(a);

    }


       ul.addEventListener('click', (event) => { // creates a listener and applies a click event to the listener, so that I can store the code that will instuct it to only move from link to link when it hears a click. 
          const item = event.target; //created a variable that holds that value of the event and applies it to a target to specify the type of click to listen for. its not just any random click that you want to change links, but a specific click of a link that I want to change the pages of the website. the below code also supports this comment in more detail. 
          let clickedNumber = event.target.textContent; // This the page number that the user will click on in order to navigate the list of student names. this combines the link to the target and event that is mentioned in the above comment. 
          showPage(studentList, clickedNumber); // will allow for the link to be clicked. 
          let links = document.querySelectorAll('a');
          for (let p = 0; p < links.length; p ++) {//creates for loop to store the links length (number of pages), and basically loops through each page. 
            
             links[p].className ='none'; // makes all of the links colorless except for the link that is currently being displayed on the webpage. supports this line of code as well as the one below. 
         }
    item.className ='active';
   
   });
}



showPage(studentList, 1); //calls my functions to perform what I have instructed them to do. 
 appendPageLinks(studentList);