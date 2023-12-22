const headerDiv = document.getElementById('header');
      const subHeading = document.createElement('h3');
      subHeading.id = 'sub-heading';
      subHeading.style.margin = '0';
      subHeading.style.fontStyle = 'italic';
      subHeading.textContent = 'Buy high quality organic fruits online';
      headerDiv.appendChild(subHeading);

const para = document.createElement('p');
const paraText =document.createTextNode('Total fruits: 4');
para.appendChild(paraText);
console.log(para);
const divs = document.getElementsByTagName('div');
const secondDiv = divs[1];
secondDiv.appendChild(para);

para.id = 'fruits-total';
console.log(para);