# amazon-review-corrector

Amazon's product review averages are deceptive.  This Chrome Extension recalculates and displays the true average.

## Example

See the reviews for the following Xfinity offering: https://smile.amazon.com/Xfinity-Internet-Mbps-12-month-term/product-reviews/B01B6ZHZGE/

![Xfinity Review Screenshot](xfinity-review-screenshot.png)

````
5 star: 7%
4 star: 2%
3 star: 2%
2 star: 2%
1 star: 87%
````

Amazon's reported rating: ````3.7/5 stars````

Actual average: ````((5*7)+(4*2)+(3*2)+(2*2)+(1*87))/100 = 140/100 = 1.4/5 stars````

Amazon reports a rating 2.3 stars higher than actually reflected by reviews.

## Amazon's excuse
![Machine-learned Model](machine-learning-model.png)
