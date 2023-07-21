function configureListeners() {
    let images = document.getElementsByTagName('img');
    // select img elements  


     for (var i = 0; i < images.length; i++) { 
        document.getElementById(images[i].id).addEventListener('mouseover', addOpacity, false)        
        document.getElementById(images[i].id).addEventListener('mouseout', removeOpacity, false)     
        // iterate over images and add mouseover event listeners      
    } 
}

function addOpacity(event) {
    // add appropriate CSS class
    event.target.classList.add('opacity');
    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
   //remove appropriate CSS class
   event.target.classList.remove('opacity');

    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault(); 
   
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1':
            colorName = 'Lime Green';
            price = 14.99;
            break;
          case 'pn2':
            colorName = 'Medium Brown';
            price = 11.14;
            break;
          case 'pn3':
            colorName = 'Royal Blue';
            price = 22.99;
            break;
          case 'pn4':
            colorName = 'Solid Black';
            price = 4.99;
            break;
          case 'pn5':
            colorName = 'Solid Cyan';
            price = 8.22;
            break;
          case 'pn6':
            colorName = 'Solid Purple';
            price = 11.99;
            break;
          case 'pn7':
            colorName = 'Solid Red';
            price = 13.42;
            break;
          case 'pn8':
            colorName = 'Solid White';
            price = 21.98;
            break;
          case 'pn9':
            colorName = 'Solid Yellow';
            price = 14.99;
            break;
          default:
    }
        updatedPrice(colorName, price);
}
    
function updatePrice(colorName, price) {
    {       
        let colorPrice = document.getElementById('color-price');// select element with corresponding id
        // display price
        
        let color = document.getElementById('color-name');// select element with corresponding id
        //display color name
    }

    configureListeners();
