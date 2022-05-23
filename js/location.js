var keysClick=document.getElementById('keysClick'),
reportsClick=document.getElementById('reportsClick'),
kLink=document.getElementById('kLink'),
rLink=document.getElementById('rLink'),
keys=document.getElementById('keys'),
reports=document.getElementById('reports'),
kIcon=document.images[0],
rIcon=document.images[1];


keysClick.onclick=function(){
  kIcon.src="images/Group -2.png"
  rIcon.src="images/Path 7.png"

    keys.classList.add('d-block')
    reports.classList.remove('d-block')
  
    keysClick.style.background='#0484D5'
    kLink.style.color='#fff'
    reportsClick.style.background='#fff'
    rLink.style.color='#000'
  }
  reportsClick.onclick=function(){
    kIcon.src="images/Group 2.png"
    rIcon.src="images/Path -1.png"

    keys.classList.remove('d-block')
    keys.classList.add('d-none')
    reports.classList.add('d-block')
    
 
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