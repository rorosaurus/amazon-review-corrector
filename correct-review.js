// collect the percentages of each star rating
var percent5 = parseInt(document.getElementsByClassName("5star histogram-review-count")[0].innerHTML);
var percent4 = parseInt(document.getElementsByClassName("4star histogram-review-count")[0].innerHTML);
var percent3 = parseInt(document.getElementsByClassName("3star histogram-review-count")[0].innerHTML);
var percent2 = parseInt(document.getElementsByClassName("2star histogram-review-count")[0].innerHTML);
var percent1 = parseInt(document.getElementsByClassName("1star histogram-review-count")[0].innerHTML);

// compute the real average
var realAverage = ((percent5*5)+(percent4*4)+(percent3*3)+(percent2*2)+(percent1*1))/100;
// round it
realAverage = Math.round(realAverage * 10)/10;

// write the new average out
document.getElementsByClassName("arp-rating-out-of-text")[0].innerHTML = realAverage + " out of 5 stars"

// replace the star icons, according the same rounding that Amazon already uses
var starClassName = "a-star-medium-5";

if (realAverage < 0.3) starClassName = "a-star-medium-0";
else if (realAverage < 0.8) starClassName = "a-star-medium-0-5";
else if (realAverage < 1.3) starClassName = "a-star-medium-1";
else if (realAverage < 1.8) starClassName = "a-star-medium-1-5";
else if (realAverage < 2.3) starClassName = "a-star-medium-2";
else if (realAverage < 2.8) starClassName = "a-star-medium-2-5";
else if (realAverage < 3.3) starClassName = "a-star-medium-3";
else if (realAverage < 3.8) starClassName = "a-star-medium-3-5";
else if (realAverage < 4.3) starClassName = "a-star-medium-4";
else if (realAverage < 4.8) starClassName = "a-star-medium-4-5";

document.getElementsByClassName("averageStarRating")[0].className = "a-icon a-icon-star-medium " + starClassName + " averageStarRating";

// remember to test this on the product page AND the review page
// remember we shouldn't break other product's reviews
// update stars at top (and inside the popup)
// update stars and text at bottom
//document.getElementById("histogramTable").getElementsByClassName("a-link-normal")