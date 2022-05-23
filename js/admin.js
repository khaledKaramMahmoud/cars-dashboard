var locationsClick=document.getElementById('locationsClick'),
customersClick=document.getElementById('customersClick'),
keysClick=document.getElementById('keysClick'),
reportsClick=document.getElementById('reportsClick'),
lLink=document.getElementById('lLink'),
cLink=document.getElementById('cLink'),
kLink=document.getElementById('kLink'),
rLink=document.getElementById('rLink'),
locations=document.getElementById('locations'),
customers=document.getElementById('customers'),
keys=document.getElementById('keys'),
reports=document.getElementById('reports'),
lIcon=document.images[0],
cIcon=document.images[1],
kIcon=document.images[2],
rIcon=document.images[3];

locationsClick.onclick=function(){
  lIcon.src="images/Group 1.png"
  cIcon.src="images/Layer_1.png"
  kIcon.src="images/Group 2.png"
  rIcon.src="images/Path 7.png"

  locations.classList.add('d-block')
  customers.classList.remove('d-block')
  keys.classList.remove('d-block')
  reports.classList.remove('d-block')
  
  locationsClick.style.background='#0484D5'
  lLink.style.color='#fff'
  customersClick.style.background='#fff'
  cLink.style.color='#000' 
  keysClick.style.background='#fff'
  kLink.style.color='#000'
  reportsClick.style.background='#fff'
  rLink.style.color='#000'
}
customersClick.onclick=function(){
  lIcon.src="images/Group -1.png"
  cIcon.src="images/Layer_-1.png"
  kIcon.src="images/Group 2.png"
  rIcon.src="images/Path 7.png"

  locations.classList.remove('d-block')
  locations.classList.add('d-none')
  customers.classList.add('d-block')
  keys.classList.remove('d-block')
  reports.classList.remove('d-block')

  locationsClick.style.background='#fff'
  lLink.style.color='#000'
  customersClick.style.background='#0484D5'
  cLink.style.color='#fff' 
  keysClick.style.background='#fff'
  kLink.style.color='#000'
  reportsClick.style.background='#fff'
  rLink.style.color='#000'
}
keysClick.onclick=function(){
  lIcon.src="images/Group -1.png"
  cIcon.src="images/Layer_1.png"
  kIcon.src="images/Group -2.png"
  rIcon.src="images/Path 7.png"

  locations.classList.remove('d-block')
  locations.classList.add('d-none')
  customers.classList.remove('d-block')
  keys.classList.add('d-block')
  reports.classList.remove('d-block')

  locationsClick.style.background='#fff'
  lLink.style.color='#000'
  customersClick.style.background='#fff'
  cLink.style.color='#000' 
  keysClick.style.background='#0484D5'
  kLink.style.color='#fff'
  reportsClick.style.background='#fff'
  rLink.style.color='#000'
}
reportsClick.onclick=function(){
  lIcon.src="images/Group -1.png"
  cIcon.src="images/Layer_1.png"
  kIcon.src="images/Group 2.png"
  rIcon.src="images/Path -1.png"

  locations.classList.remove('d-block')
  locations.classList.add('d-none')
  customers.classList.remove('d-block')
  keys.classList.remove('d-block')
  reports.classList.add('d-block')
  
  locationsClick.style.background='#fff'
  lLink.style.color='#000'
  customersClick.style.background='#fff'
  cLink.style.color='#000' 
  keysClick.style.background='#fff'
  kLink.style.color='#000'
  reportsClick.style.background='#0484D5'
  rLink.style.color='#fff'
}
// copy function in key modal
$('#copy_key_code').click(function (e) {
  e.preventDefault();
  const textToCopy = $('#copyText').text().trim();
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val(textToCopy).select();
  document.execCommand("copy");
  $temp.remove();
  // alert("Key access code is copied to clipboard: " + textToCopy)
});