var profileClick=document.getElementById('profileClick'),
keysClick=document.getElementById('keysClick'),
reportsClick=document.getElementById('reportsClick'),
pLink=document.getElementById('pLink'),
kLink=document.getElementById('kLink'),
rLink=document.getElementById('rLink'),
profile=document.getElementById('profile'),
keys=document.getElementById('keys'),
reports=document.getElementById('reports'),
pIcon=document.images[0],
kIcon=document.images[1],
rIcon=document.images[2];


profileClick.onclick=function(){
  pIcon.src="images/Layer_-1.png"
  kIcon.src="images/Group 2.png"
  rIcon.src="images/Path 7.png"

    profile.classList.add('d-block')
    keys.classList.remove('d-block')
    reports.classList.remove('d-block')
  
    profileClick.style.background='#0484D5'
    pLink.style.color='#fff'
    keysClick.style.background='#fff'
    kLink.style.color='#000'
    reportsClick.style.background='#fff'
    rLink.style.color='#000'
  }
  keysClick.onclick=function(){
    pIcon.src="images/Layer_1.png"
    kIcon.src="images/Group -2.png"
    rIcon.src="images/Path 7.png"
  
    profile.classList.remove('d-block')
    profile.classList.add('d-none')
    keys.classList.add('d-block')
    reports.classList.remove('d-block')
    
    profileClick.style.background='#fff'
    pLink.style.color='#000'
    keysClick.style.background='#0484D5'
    kLink.style.color='#fff'
    reportsClick.style.background='#fff'
    rLink.style.color='#000'
  }
  reportsClick.onclick=function(){
    pIcon.src="images/Layer_1.png"
    kIcon.src="images/Group 2.png"
    rIcon.src="images/Path -1.png"
  
    profile.classList.remove('d-block')
    profile.classList.add('d-none')
    keys.classList.remove('d-block')
    reports.classList.add('d-block')
    
    profileClick.style.background='#fff'
    pLink.style.color='#000'
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