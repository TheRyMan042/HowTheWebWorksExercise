//Ryan Hutchings
//Unit 18.1 - How The Web Works Exercise

const button = document.querySelector('.htmlButton');
const imgLocation = document.querySelector('.dancingImg');

button.addEventListener('click', () => {
  const myImage = document.createElement('img');
  myImage.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXZnZzNtdHZobnhic2RwMGRkd254NzEwNWxoeXk2M3l5dnRnbzloeiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l4Ep3mmmj7Bw3adWw/giphy.gif";

  imgLocation.append(myImage);
});