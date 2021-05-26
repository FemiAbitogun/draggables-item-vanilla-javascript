{/* <div class="empty-boxes">
<div class="item" draggable="true"></div>
</div>
<div class="empty-boxes"></div>
<div class="empty-boxes"></div>
<div class="empty-boxes"></div> */}

let emptyBox = document.querySelectorAll('.empty-boxes');
let item = document.querySelector('.item');

// adding event listener to item
item.addEventListener('dragstart', dragStart);
item.addEventListener('dragend', dragStop);


const dragDrop =function (){
    this.appendChild(item);
    console.log(this);
};



// adding event listener to empty boxes
emptyBox.forEach(box => {
    box.addEventListener('dragover', dragOver);
    box.addEventListener('drop',  dragDrop);
      
})



//............................
function dragStop() {
    this.classList.remove("start");
}

function dragStart() {

    this.classList.add("start");
}



// droping on empty boxes......
function dragOver(e) {
    e.preventDefault();
}

// function dragDrop(e) {

//     this.appendChild(item)
//     console.log(this)
// }