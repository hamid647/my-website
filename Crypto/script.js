var btc= document.getElementById("bitcoin");
var eth= document.getElementById("ethereum");
var doge= document.getElementById("dogecoin");
var settings ={
    "async": true,
    "crossdomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
    "method": "GET",
    "headers":{}
}
$.ajax(settings).done(function (response) {
btc.innerHTML = response.bitcoin.usd;
eth.innerHTML = response.ethereum.usd;
doge.innerHTML = response.dogecoin.usd;
});
document.addEventListener('contextmenu', function (e) {
    // Disable right-click
    e.preventDefault();
  });
  
  document.addEventListener('keydown', function (e) {
    // Disable Ctrl+U
    if ((e.ctrlKey || e.metaKey) && e.keyCode === 85) {
      e.preventDefault();
    }
  });
  document.onkeydown = function (e) {
    if (e.key === 'F12') {
      e.preventDefault();
    }
  };