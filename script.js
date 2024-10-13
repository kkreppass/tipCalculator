document.getElementById('inputForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
    const numberInput = document.getElementById('numberInput').value;
    const dropdownMenu = document.getElementById('dropdownMenu').value;
    const dropdownMenu1 = document.getElementById('dropdownMenu1').value;
  

    const resultContainer = document.getElementById('resultContainer');
  
    if (numberInput && dropdownMenu) {//값 올바른지 겁사
      console.log(dropdownMenu);
      resultContainer.textContent = `${Math.round(tip(numberInput,dropdownMenu)[0]*country(dropdownMenu1)*10)/10}$――――――${Math.round(tip(numberInput,dropdownMenu)[1]*country(dropdownMenu1)*10)/10}$`;
    } else {
      resultContainer.textContent = 'Please enter a number and select an option.';
    }
    resultContainer.style.opacity = 1;
    document.getElementById("imgBox1").style.opacity = 1;
  });
  function tip(howmuch, type) {
    if(type==1)//식당
    {return [howmuch*15/100, howmuch*20/100]}
    if(type==2)//
    {return [howmuch*10/100, howmuch*20/100]}
    if(type==3)//
    {return [howmuch*10/100, howmuch*20/100]}
    if(type==4)//
    {return [howmuch*10/100, howmuch*20/100]}
  }
  function country(type) {
    if(type==1) return 1;
    if(type==2) return 1/2;
    if(type==3) return 3/4;
    if(type==4) return 3/4;
    if(type==5) return 1/2;
    if(type==6) return 1/2;
    if(type==7) return 3/4;
    if(type==8) return 3/4;
    if(type==9) return 1/2;
  }