let items=[
  {
    name:"Disney T-Shirt",
    pic:"A1",
    price:59.00,
    note:"Retro Donald Duck on the front",
    note2:"FABRIC DETAILS - Body: 100% Cotton"
  },
  {
    name:"Disney T-Shirt",
    pic:"A2",
    price:59.00,
    note:"Perfect with high-waisted.",
    note2:"FABRIC DETAILS - Body: 100% Cotton."
  },
  {
    name:"Disney T-Shirt",
    pic:"A3",
    price:59.00,
    note:"Perfect with high-waisted.",
    note2:"FABRIC DETAILS - Body: 100% Cotton."
  },
  {
    name:"Short Sleeve T-Shirt",
    pic:"s2",
    price:39.00,
    note:"Perfect with high-waisted.",
    note2:"FABRIC DETAILS - Body: 100% Cotton."
  },
  {
    name:"Ribbed Tank Top",
    pic:"s3",
    price:39.00,
    note:"Perfect with high-waisted.",
    note2:"Stretchy compact ribbed spandex."
  },
  {
    name:"Ribbed Tank Top",
    pic:"s4",
    price:39.00,
    note:"Perfect with high-waisted.",
    note2:"Stretchy compact ribbed spandex."
  },
  {
    name:"Ribbed Tank Top",
    pic:"s5",
    price:39.00,
    note:"Perfect with high-waisted.",
    note2:"Stretchy compact ribbed spandex."
  },
  {
    name:"Ultra Stretch Jogger Pants",
    pic:"p1",
    price:39.00,
    note:"Perfect with high-waisted.",
    note2:"Stretchy compact ribbed spandex."
  },
  {
    name:"Friend Tapered Jeans",
    pic:"p2",
    price:59.00,
    note:"Perfect with high-waisted.",
    note2:"Stretchy compact ribbed spandex."
  },
  {
    name:"Denim Jersey Pants",
    pic:"p3",
    price:59.00,
    note:"Perfect with high-waisted.",
    note2:"Stretchy compact ribbed spandex."
  },
  {
    name:"Square Sunglasses",
    pic:"g1",
    price:79.00,
    note:"Perfect with high-waisted.",
    note2:"Stretchy compact ribbed spandex."
  },
  {
    name:"The Message UV Protection Cap",
    pic:"g2",
    price:79.00,
    note:"Perfect with high-waisted.",
    note2:"Stretchy compact ribbed spandex."
  },
  {
    name:"Functional Backpack",
    pic:"g3",
    price:79.00,
    note:"Perfect with high-waisted.",
    note2:"Stretchy compact ribbed spandex."
  },
  {
    name:"Cotton Broadcloth Striped Long Sleeve Shirt",
    pic:"s6",
    price:79.00,
    note:"Perfect with high-waisted.",
    note2:"Stretchy compact ribbed spandex."
  },
  {
    name:"Cotton Broadcloth Striped Long Sleeve Shirt",
    pic:"s7",
    price:129.00,
    note:"Perfect with high-waisted.",
    note2:"Stretchy compact ribbed spandex."
  },
  {
    name:"Cotton Broadcloth Long Sleeve Shirt",
    pic:"s8",
    price:129.00,
    note:"Perfect with high-waisted.",
    note2:"Stretchy compact ribbed spandex."
  },
  {
    name:"Printed Open Collar Short Sleeve Shirt",
    pic:"s9",
    price:129.00,
    note:"Perfect with high-waisted.",
    note2:"Stretchy compact ribbed spandex."
  }


]


let addtocartbtn;

function indexdisplay(){
  let productlist=document.getElementById("indexproduct");
  let htmltag="";
  items.forEach((item,i)=>{
    htmltag="<div class='col-md-4'><div class='card'><h1>"+item.name+
    "</h1><h2>RM"+item.price+"</h2><img class='img-press' src='images/"+item.pic+".jpg' alt='tnw-logo'><p>"+item.note+"</p><p>"+item.note2+
    "</p><button type='button' class='btn btn-outline-dark add-to-cart' >Add to cart <i class='fa-solid fa-circle-down'></i></button></div></div>";
    productlist.innerHTML+=htmltag;
  });
  addtocartbtn=document.querySelectorAll(".add-to-cart");
  //console.log(addtocartbtn.length);

  for(let i=0; i<addtocartbtn.length;i++)
  {
    addtocartbtn[i].addEventListener('click',()=>{
      additem(i);
    });
  }
}
let itemincart=[]; //store the item user buy
function additem(i){
  let itemindex=localStorage.getItem('cartnumber'); //create localStorage called cartnumber
  itemindex=parseInt(itemindex); //convert to int

  if(itemindex)
  {
    itemincart=localStorage.getItem('lsitemincart');
    itemincart=JSON.parse(itemincart);
    itemincart.push(items[i]);
    itemindex++;
    localStorage.setItem('lsitemincart',JSON.stringify(itemincart));
    localStorage.setItem('cartnumber',itemindex);
    console.log(itemincart);
    cartdisplay();
  }
  else{
    itemincart[0]=items[i];
    console.log(itemincart);
    localStorage.setItem('lsitemincart',JSON.stringify(itemincart));
    localStorage.setItem('cartnumber',1);
    cartdisplay();
  }
}

function cartdisplay(){
  let cart = localStorage.getItem('cartnumber'); //find localStorage called cartnumber
  cart =parseInt(cart);
  if(cart)
  {
    document.getElementById('cartdisplay').textContent=cart;
  }
  else{
    document.getElementById('cartdisplay').textContent=0;
  }
}

window.addEventListener('load',()=>{
  cartdisplay();
});


function cartpagedisplay(){

  let cartitems=localStorage.getItem('lsitemincart'); //to find localStorage called lsitemincart
  cartitems=JSON.parse(cartitems);
  let productcontainer=document.querySelector(".product-container");

  if(cartitems && productcontainer)
  {
    productcontainer.innerHTML='';
    let totalprice=0;
    let htm="";
    cartitems.forEach((item,i)=>{
      htm="<div class ='col-lg-3'><img class='img-cart' src='images/"+item.pic+".jpg'></img></div><div class='col-lg-3'><p>"+item.name+
      "</p></div><div class='col-lg-3'>"+item.price+
      "</div><div class='col-lg-3'><label>Delete</label><input class='rdb' type='checkbox' name=></div><br><hr>";
      productcontainer.innerHTML+=htm;
      totalprice=item.price+totalprice;
    });
    document.getElementById('totalprice').innerHTML=totalprice;
    localStorage.setItem('totalprice',totalprice);


  }
  else{
    document.getElementById("delbtn").style.visibility='hidden';
    document.getElementById("plobtn").style.visibility='hidden';
  }
}
function removeitem(){
  let delbtn=document.getElementsByClassName('rdb');
  console.log(delbtn.length);
  let cartitems=localStorage.getItem('lsitemincart');
  cartitems=JSON.parse(cartitems);
  for(let i=delbtn.length-1;i>=0;i--)
  {
    if(delbtn[i].checked==true)
    {
      cartitems.splice(i,1); //delete array using splice
      localStorage.setItem("lsitemincart",JSON.stringify(cartitems));
      localStorage.setItem("cartnumber",cartitems.length);
      if(cartitems.length==0)
      {
        localStorage.clear();//clear the local storage
      }
    }
  }

  location.reload(); //reload page
}

//function clearlocalstore(){
  //localStorage.clear();//clear the local storage
//}
