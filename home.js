let myCart = document.querySelector('#cart'),
    cancelCart = document.querySelector('.cancel-cart');
myCart.addEventListener('click', showCartcard);

cancelCart.addEventListener('click', hideCart);

function showCartcard(e){
    e.preventDefault();
    if(myCart){
        let cartCard = document.querySelector('.cart-card .container'),
            loginCard = document.querySelector('.account');
        cartCard.style.display = "block";
        loginCard.style.display = "none";
    }
}

function hideCart(){
    if(cancelCart){
        let cartCard = document.querySelector('.cart-card .container');
        cartCard.style.display = "none";
    }
}

const newArrivalcheck = document.getElementById('new-arrivals'),
      onSalecheck = document.getElementById('on-sale'),
      menCheck = document.getElementById('men'),
      womenCheck = document.getElementById('women'),
      accessoriesCheck = document.getElementById('accessories'),
      paintingsCheck = document.getElementById('paintings'),
      clothingCheck = document.getElementById('clothing'),
      bagCheck = document.getElementById('bags');
newArrivalcheck.addEventListener('change', function(){
    if(newArrivalcheck.checked){
        let newArrivalProd = document.querySelector('.new-arrivals'),
            onSaleProd = document.querySelector('.on-sale'),
            menProd = document.querySelector('.menprod'),
            womenProd = document.querySelector('.womenprod'),
            accessoriesProd = document.querySelector('.accessoriesprod'),
            paintingsProd = document.querySelector('.paintings'),
            clothingProd = document.querySelector('.clothing'),
            bagProd = document.querySelector('.bag');
        newArrivalProd.style.display = "flex";
        onSaleProd.style.display = "none";
        menProd.style.display = "none";
        womenProd.style.display = "none";
        accessoriesProd.style.display = "none";
        paintingsProd.style.display = "none";
        clothingProd.style.display = "none";
        bagProd.style.display = "none";
        onSalecheck.checked = false;
        menCheck.checked = false;
        womenCheck.checked = false;
        accessoriesCheck.checked = false;
        paintingsCheck.checked = false;
        clothingCheck.checked = false;
        bagCheck.checked = false;
    }else{
        let newArrivalProd = document.querySelector('.new-arrivals');
        newArrivalProd.style.display = "flex";
    }
});

onSalecheck.addEventListener('change', function(){
    if(onSalecheck.checked){
        let newArrivalProd = document.querySelector('.new-arrivals'),
            onSaleProd = document.querySelector('.on-sale'),
            menProd = document.querySelector('.menprod'),
            womenProd = document.querySelector('.womenprod'),
            accessoriesProd = document.querySelector('.accessoriesprod'),
            paintingsProd = document.querySelector('.paintings'),
            clothingProd = document.querySelector('.clothing'),
            bagProd = document.querySelector('.bag');
        newArrivalProd.style.display = "none";
        onSaleProd.style.display = "flex";
        menProd.style.display = "none";
        womenProd.style.display = "none";
        accessoriesProd.style.display = "none";
        paintingsProd.style.display = "none";
        clothingProd.style.display = "none";
        bagProd.style.display = "none";
        newArrivalcheck.checked = false;
        menCheck.checked = false;
        womenCheck.checked = false;
        accessoriesCheck.checked = false;
        paintingsCheck.checked = false;
        clothingCheck.checked = false;
        bagCheck.checked = false;
    }else{
        let onSaleProd = document.querySelector('.on-sale');
        onSaleProd.style.display = "none";
        let newArrivalProd = document.querySelector('.new-arrivals');
        newArrivalProd.style.display = "flex";
    }
});

menCheck.addEventListener('change', function(){
    if(menCheck.checked){
        let newArrivalProd = document.querySelector('.new-arrivals'),
            onSaleProd = document.querySelector('.on-sale'),
            menProd = document.querySelector('.menprod'),
            womenProd = document.querySelector('.womenprod'),
            accessoriesProd = document.querySelector('.accessoriesprod'),
            paintingsProd = document.querySelector('.paintings'),
            clothingProd = document.querySelector('.clothing'),
            bagProd = document.querySelector('.bag');
        newArrivalProd.style.display = "none";
        onSaleProd.style.display = "none";
        menProd.style.display = "flex";
        womenProd.style.display = "none";
        accessoriesProd.style.display = "none";
        paintingsProd.style.display = "none";
        clothingProd.style.display = "none";
        bagProd.style.display = "none";
        newArrivalcheck.checked = false;
        onSalecheck.checked = false;
        womenCheck.checked = false;
        accessoriesCheck.checked = false;
        paintingsCheck.checked = false;
        clothingCheck.checked = false;
        bagCheck.checked = false;
    }else{
        let menProd = document.querySelector('.menprod');
        menProd.style.display = "none";
        let newArrivalProd = document.querySelector('.new-arrivals');
        newArrivalProd.style.display = "flex";
    }
});


womenCheck.addEventListener('change', function(){
    if(womenCheck.checked){
        let newArrivalProd = document.querySelector('.new-arrivals'),
            onSaleProd = document.querySelector('.on-sale'),
            menProd = document.querySelector('.menprod'),
            womenProd = document.querySelector('.womenprod'),
            accessoriesProd = document.querySelector('.accessoriesprod'),
            paintingsProd = document.querySelector('.paintings'),
            clothingProd = document.querySelector('.clothing'),
            bagProd = document.querySelector('.bag');
        newArrivalProd.style.display = "none";
        onSaleProd.style.display = "none";
        menProd.style.display = "none";
        womenProd.style.display = "flex";
        accessoriesProd.style.display = "none";
        paintingsProd.style.display = "none";
        clothingProd.style.display = "none";
        bagProd.style.display = "none";
        newArrivalcheck.checked = false;
        onSalecheck.checked = false;
        menCheck.checked = false;
        accessoriesCheck.checked = false;
        paintingsCheck.checked = false;
        clothingCheck.checked = false;
        bagCheck.checked = false;
    }else{
        let womenProd = document.querySelector('.womenprod');
        womenProd.style.display = "none";
        let newArrivalProd = document.querySelector('.new-arrivals');
        newArrivalProd.style.display = "flex";
    }
});

accessoriesCheck.addEventListener('change', function(){
    if(accessoriesCheck.checked){
        let newArrivalProd = document.querySelector('.new-arrivals'),
            onSaleProd = document.querySelector('.on-sale'),
            menProd = document.querySelector('.menprod'),
            womenProd = document.querySelector('.womenprod'),
            accessoriesProd = document.querySelector('.accessoriesprod'),
            paintingsProd = document.querySelector('.paintings'),
            clothingProd = document.querySelector('.clothing'),
            bagProd = document.querySelector('.bag');
        newArrivalProd.style.display = "none";
        onSaleProd.style.display = "none";
        menProd.style.display = "none";
        womenProd.style.display = "none";
        accessoriesProd.style.display = "flex";
        paintingsProd.style.display = "none";
        clothingProd.style.display = "none";
        bagProd.style.display = "none";
        newArrivalcheck.checked = false;
        onSalecheck.checked = false;
        menCheck.checked = false;
        womenCheck.checked = false;
        paintingsCheck.checked = false;
        clothingCheck.checked = false;
        bagCheck.checked = false;
    }else{
        let accessoriesProd = document.querySelector('.accessoriesprod');
        accessoriesProd.style.display = "none";
        let newArrivalProd = document.querySelector('.new-arrivals');
        newArrivalProd.style.display = "flex";
    }
});

paintingsCheck.addEventListener('change', function(){
    if(paintingsCheck.checked){
        let newArrivalProd = document.querySelector('.new-arrivals'),
            onSaleProd = document.querySelector('.on-sale'),
            menProd = document.querySelector('.menprod'),
            womenProd = document.querySelector('.womenprod'),
            accessoriesProd = document.querySelector('.accessoriesprod'),
            paintingsProd = document.querySelector('.paintings'),
            clothingProd = document.querySelector('.clothing'),
            bagProd = document.querySelector('.bag');
        newArrivalProd.style.display = "none";
        onSaleProd.style.display = "none";
        menProd.style.display = "none";
        womenProd.style.display = "none";
        accessoriesProd.style.display = "none";
        paintingsProd.style.display = "flex";
        clothingProd.style.display = "none";
        bagProd.style.display = "none";
        newArrivalcheck.checked = false;
        onSalecheck.checked = false;
        menCheck.checked = false;
        womenCheck.checked = false;
        accessoriesCheck.checked = false;
        clothingCheck.checked = false;
        bagCheck.checked = false;
    }else{
        let paintingsProd = document.querySelector('.paintings');
        paintingsProd.style.display = "none";
        let newArrivalProd = document.querySelector('.new-arrivals');
        newArrivalProd.style.display = "flex";
    }
});

clothingCheck.addEventListener('change', function(){
    if(clothingCheck.checked){
        let newArrivalProd = document.querySelector('.new-arrivals'),
            onSaleProd = document.querySelector('.on-sale'),
            menProd = document.querySelector('.menprod'),
            womenProd = document.querySelector('.womenprod'),
            accessoriesProd = document.querySelector('.accessoriesprod'),
            paintingsProd = document.querySelector('.paintings'),
            clothingProd = document.querySelector('.clothing'),
            bagProd = document.querySelector('.bag');
        newArrivalProd.style.display = "none";
        onSaleProd.style.display = "none";
        menProd.style.display = "none";
        womenProd.style.display = "none";
        accessoriesProd.style.display = "none";
        paintingsProd.style.display = "none";
        clothingProd.style.display = "flex";
        bagProd.style.display = "none";
        newArrivalcheck.checked = false;
        onSalecheck.checked = false;
        menCheck.checked = false;
        womenCheck.checked = false;
        accessoriesCheck.checked = false;
        paintingsCheck.checked = false;
        bagCheck.checked = false;
    }else{
        let clothingProd = document.querySelector('.clothing');
        clothingProd.style.display = "none";
        let newArrivalProd = document.querySelector('.new-arrivals');
        newArrivalProd.style.display = "flex";
    }
});

bagCheck.addEventListener('change', function(){
    if(bagCheck.checked){
        let newArrivalProd = document.querySelector('.new-arrivals'),
            onSaleProd = document.querySelector('.on-sale'),
            menProd = document.querySelector('.menprod'),
            womenProd = document.querySelector('.womenprod'),
            accessoriesProd = document.querySelector('.accessoriesprod'),
            paintingsProd = document.querySelector('.paintings'),
            clothingProd = document.querySelector('.clothing'),
            bagProd = document.querySelector('.bag');
        newArrivalProd.style.display = "none";
        onSaleProd.style.display = "none";
        menProd.style.display = "none";
        womenProd.style.display = "none";
        accessoriesProd.style.display = "none";
        paintingsProd.style.display = "none";
        clothingProd.style.display = "none";
        bagProd.style.display = "flex";
        newArrivalcheck.checked = false;
        onSalecheck.checked = false;
        menCheck.checked = false;
        womenCheck.checked = false;
        accessoriesCheck.checked = false;
        paintingsCheck.checked = false;
        clothingCheck.checked = false;
    }else{
        let bagProd = document.querySelector('.bag');
        bagProd.style.display = "none";
        let newArrivalProd = document.querySelector('.new-arrivals');
        newArrivalProd.style.display = "flex";
    }
});

