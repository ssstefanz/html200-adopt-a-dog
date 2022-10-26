//fuctions for dog prices/shopping cart
let total = 0;

function dogCost(price) {
  total = total + Number(price);
  alert(total.toFixed(2));
  let p = total.toFixed(2);
  $("#cart-total").html("$" + p);
}

function dogInfo (name, cost, breed) {
  alert(`Name: "${name}"  Cost: "${cost}"  Breed: "${breed}"`);
}

$(function() {
  console.log('DOM is ready, javascript loading!')


  // hover effect for dog tiles - fade images
  $('.box3 img').mouseenter(function(){
    $(this).fadeTo('slow', .5)
  }).mouseleave(function(){
    $(this).fadeTo('fast', 1)
  })

/*  // hover effect for dog tiles - grow
  $('.box3').mouseenter(function(){
    $(this)
      .height(function(i, height) { return height + 10; })
      .width(function(i, width) { return width + 10; });
    }).on('mouseleave', function() {
    $(this)
      .height(function(i, height) { return height - 10; })
      .width(function(i, width) { return width - 10; });
  }); */

  // object with blog post content
  const blogPosts = [
    {
      hed: 'Traveling With Your Dog',
      bod1: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.',
      bod2: 'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.',
      bImg: 'images/blog-1.jpg',
      iText: 'A person looks out over the a desert canyon while hugging a dog'
    },
    {
      hed: 'How to Walk Multiple Dogs',
      bod1: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.',
      bod2: 'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.',
      bImg: 'images/blog-2.jpg',
      iText: 'Several dogs are on leashes in a city square'
    },
    {
      hed: 'Teach Your Dog to Fetch',
      bod1: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.',
      bod2: 'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.',
      bImg: 'images/blog-3.jpg',
      iText: 'A person teaches their dog fetch in the twilight'
    }
  ]

  const host = 'file:///Users/stefantmilne/Desktop/uw/java-rwd/adopt-a-dog/html200-adopt-a-dog/';
  const gitHost = 'https://ssstefanz.github.io/html200-adopt-a-dog/';

  if (window.location.href == host + 'blog.html' || window.location.href == gitHost + 'blog.html') {
    //declare variables for text and photo positions
    const headers = document.getElementsByClassName('box4');
    const blogPhotos = document.getElementsByClassName('b-box1');

    //for loop cycles through bp object
    for (let i = 0; i < blogPosts.length; i += 1) {
      const post = blogPosts[i];
      const box4s = headers[i];
      const blogPhoto = blogPhotos[i];

      //set header elements and assign them text
      const hed = document.createElement('h4');
      hed.textContent = post.hed;

      //set body paragraph elements and assign them text
      const bod1 = document.createElement('p');
      bod1.textContent = post.bod1;

      const bod2 = document.createElement('p');
      bod2.textContent = post.bod2;

      //set img elements and assign attributes
      const photo = document.createElement('img');
      photo.setAttribute('class', 'blog-img');
      photo.setAttribute('src', post.bImg);
      photo.setAttribute('alt', post.iText);

      //append text/imgs to appropriate boxes
      box4s.appendChild(hed);
      box4s.appendChild(bod1);
      box4s.appendChild(bod2);
      blogPhoto.appendChild(photo)
    }
  }


  if (window.location.href == host + 'checkout.html' || window.location.href == gitHost + 'checkout.html') {
    // an alert on the checkout page
    //const form = document.querySelector('form');
    const submitButton = document.createElement('input');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('value', 'Submit');
    submitButton.setAttribute('class', 's-button');
    submitButton.textContent = 'Checkout';
    form.appendChild(submitButton);

    //add variables for form fields
    const nameInput = $('#name');
    const emailInput = $('#email');
    const streetInput = $('#street');
    const cityInput = $('#city');
    const stateInput = $('#state');
    const zipInput = $('#zip');
    const pickupInput = $('#pickup');

    //add event listener for sumbit button
    $('#form').submit(function(event) {
      event.preventDefault();
      alert('Thank you. The form has been received.');
      console.log('name: ' + nameInput.val());
      console.log('email: ' + emailInput.val());
      console.log('street: ' + streetInput.val());
      console.log('state: ' + stateInput.val());
      console.log('zip: ' + zipInput.val());
      console.log('pickup: ' + pickupInput.val());
    });
  }
});
