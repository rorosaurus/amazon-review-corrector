var percent5 = parseInt(document.getElementsByClassName("5star histogram-review-count")[0].innerHTML);
var percent4 = parseInt(document.getElementsByClassName("4star histogram-review-count")[0].innerHTML);
var percent3 = parseInt(document.getElementsByClassName("3star histogram-review-count")[0].innerHTML);
var percent2 = parseInt(document.getElementsByClassName("2star histogram-review-count")[0].innerHTML);
var percent1 = parseInt(document.getElementsByClassName("1star histogram-review-count")[0].innerHTML);

var realAverage = ((percent5*5)+(percent4*4)+(percent3*3)+(percent2*2)+(percent1*1))/100;

document.getElementsByClassName("arp-rating-out-of-text")[0].innerHTML = realAverage + " out of 5 stars"

