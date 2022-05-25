const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const galleryList = document.querySelector('.gallery')


// const imagesList = [];

// for(let image of images){
//   const li = document.createElement('li');

//   const imageItem = document.createElement('img');
//   li.append(imageItem);
//   imagesList.push(li);

//   imageItem.setAttribute('src', image.url);
//   imageItem.alt = image.alt;
//   imageItem.width = 350;
    
// }

// //оформлення галереї флексбоксами
// galleryList.style.display = "flex";
// galleryList.style.flexDdirection = "row";
// galleryList.style.flexWrap = "wrap";
// galleryList.style.alignItems ='flex-start';
// galleryList.style.justifyContent = "space-between"

// galleryList.append(...imagesList)


const galleryList = document.querySelector('.gallery')


const imagesList = [];

for(let image of images){
  const li = document.createElement('li');
 
  const imageItem = document.createElement('img');
  li.append(imageItem);
  imagesList.push(li);

  imageItem.setAttribute('src', image.url);
  imageItem.alt = image.alt;
  imageItem.width = 350;

    
}

//оформлення галереї флексбоксами
galleryList.style.display = "flex";
galleryList.style.flexDdirection = "row";
galleryList.style.flexWrap = "wrap";
galleryList.style.alignItems ='flex-start';
galleryList.style.justifyContent = "space-between"

galleryList.append(...imagesList)