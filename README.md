# amazon-review-corrector

## What

This Chrome extension loads when you open an Amazon product or review page, calculating and displaying the true raw average of the reviews.

## Why

What you think are Amazon's product review averages are not raw averages as you might expect.  They use a machine-learned model without providing the details of the weighting, which is not transparent.  It seems to agressively dismiss older reviews and place superficial emphasis on "verified purchases".

The end result appears to be that some products (including Amazon partners) are rated significantly higher than what customers actually rate them.

## Motivation

I wrote this extension to automate my own sanity checking of Amazon's product reviews, so I can continue to trust review information at a glance.

## Example

Consider the following Xfinity offering.

https://smile.amazon.com/Xfinity-Internet-Mbps-12-month-term/product-reviews/B01B6ZHZGE/

![Xfinity Review Screenshot](xfinity-review-screenshot.png)

````
5 star: 8%
4 star: 2%
3 star: 1%
2 star: 2%
1 star: 87%
````

Amazon's reported rating: ````3.8/5 stars````

Actual average: ````((5*8)+(4*2)+(3*1)+(2*2)+(1*87))/100 = 142/100 = 1.4/5 stars````

Amazon reports a rating 2.4 stars higher than actually reflected by reviews.  Since star ratings are rounded, it shows 2.5 more stars than the actual average.  It's off by half the width of the entire range of values!

## Amazon's reasoning
![Machine-learned Model](machine-learning-model.png)

````"Amazon calculates a product’s star ratings using a machine learned model instead of a raw data average. The machine learned model takes into account factors including: the age of a review, helpfulness votes by customers and whether the reviews are from verified purchases."````
