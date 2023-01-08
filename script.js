const boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {
   box.addEventListener( 'mousemove', () =>{
        console.log('box clicked')
        box.setAttribute('style', 'background-color:black;');
        
    })
})