let arr = [

    {
        id : 1,
        name : 'hamza',
        job : 'web designer',
        img : "1.jpg",
        content : 'orem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, officia. Itaque, sed expedita. Reiciendis ad deserunt possimus, tempore voluptatem ipsa perferendis ipsum numquam corporis doloribus optio dolorum quis tempora nostrum?'

    },
    {
        id : 2,
        name : 'Ahmar',
        job : 'SEO Developer',
        img : "images.jpg",
        content : 'This handy tool helps you create dummy text for all your layout needs.'

        

    },
    {
        id : 3,
        name : 'Awais',
        job : 'web developer',
        img : "download.jpg",
        content : 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, '

    },
    {
        id : 4,
        name : 'Ali',
        job : 'Android Developer',
        img : "2.jpg",
        content : 'Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.'

    },

]



let images = document.getElementById('images');
let heading3 = document.getElementById('heading3');
let heading5 = document.getElementById('heading5');
let content = document.getElementById('content');
let next = document.getElementById('next-btn');
let prev = document.getElementById('prev-btn');
let btn = document.getElementById('btn');

let currentItem = 0;
// window.addEventListener("DOMContentLoaded", function () {
//     let item = arr[currentItem];
    
//     heading3.innerHTML = item.name;
//     heading5.innerHTML = item.job;
//      images.src = item.img;
//     content.innerHTML = item.content;


// },
next.addEventListener('click',function () {
    let item = arr[currentItem];
    
    heading3.innerHTML = item.name;
    heading5.innerHTML = item.job;
     images.src = item.img;
    content.innerHTML = item.content;
    currentItem++
    if (currentItem > arr.length-1) {
        currentItem = 0;
    }
}),

prev.addEventListener('click',function () {
  
      let item = arr[currentItem];
    heading3.innerHTML = item.name;
    heading5.innerHTML = item.job;
     images.src = item.img;
    content.innerHTML = item.content;
    currentItem--
    if (currentItem < 0) {
      currentItem =  arr.length -1 ;
    }
})