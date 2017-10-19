'use strict';

module.exports = function(Product) {
    
    Product.validatesPresenceOf('Name', 'Price', 'Description');
    Product.validatesLengthOf('Name', {min: 3, max: 64, message: {min: 'Name is too short', max: 'Name is too long'}});
    Product.validateAsync('Price', validatePrice, {message: 'Price should be > 0'});
    Product.validateAsync('CountAvailable', validateCountAvailable, {message: 'Count should be > 1'});
    Product.validateAsync('DiscountPercent', validateDiscountPercent, {message: 'Minimum 10% from the price'});
    Product.validatesLengthOf('Description', {min: 3, max: 600, message: {min: 'Text too short', max: 'Use shorter text'}});
    Product.validatesLengthOf('SerialNumber', {min: 0, max: 300, message: {min: 'SerialNumber is too short', max: 'SerialNumber is too long'}});
    
function validatePrice(err, done) {
    var Price = this.Price;
    process.nextTick(function () {
        if (Price >= 0) {
        done();
        } else {
          console.log(err, "Incorrect Price: " +Price+ ", request rejected");
        }
    });
}

function validateCountAvailable(err, done) {
    var CountAvailable = this.CountAvailable;
    process.nextTick(function () {
        if (CountAvailable >= 1) {
        done();
        } else {
          console.log(err, "Incorrect CountAvailable: " +CountAvailable+ ", request rejected");
        }
    });
}

function validateDiscountPercent(err, done) {
    var DiscountPercent = this.DiscountPercent;
    process.nextTick(function () {
        if (DiscountPercent >= 0.01 && DiscountPercent <= 1) {
        done();
        } else {
          console.log(err, "Incorrect DiscountPercent: " +DiscountPercent+ ", request rejected");
        }
    });
}

};
