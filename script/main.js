var myHeading = document.querySelector('h1');
myHeading.textContent = "YiChen's程式學習網";

var myImage = document.querySelector('img');                        //取得圖片參數

myImage.onclick = function(){                                       //當圖片被按下時
    let mySrc = myImage.getAttribute('src');                        //取得圖片的位址
    if (mySrc === 'images/dream.jpg'){                              //如果取得的位址 = 指定的位址
        myImage.setAttribute ('src','images/dram1.jpg');            //設定圖片
    }else{
        myImage.setAttribute ('src','images/dream.jpg');            //設定圖片
    }
}

var myButton = document.querySelector('button');            //取得按鈕參數


function setUserName(){                                     //一個函式
    let myName = prompt('請輸入你的名字');                    //要求使用者輸入名字
    if (!myName || myName ===null){                          //如果myName不存在 or myName為空值
        setUserName();
    }else{
    localStorage.setItem('name',myName);                    //利用localStorang的setItem儲存資料
    myHeading.innerHTML = 'yichen is ' + myName;           //指定標題   
}
}


if(!localStorage.getItem('name')){                         //檢查name是否存在
    setUserName();                                          //如果不存在執行setUserName函式
}else {
    let storedNmae = localStorage.getItem('name');          //取得名稱資訊          
    myHeading.innerHTML = 'yichen is ' + storedNmae;        //顯示名稱
}

myButton.onclick = function(){
    setUserName();                                          //執行setUserName函式
}
