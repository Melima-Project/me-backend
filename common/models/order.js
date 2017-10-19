'use strict';

module.exports = function(Order) {
    Order.validatesPresenceOf('Table', 'Count', 'SpecialWishes');
    Order.validatesLengthOf('Name', {min: 2, max: 64, message: {min: 'Name is too short', max: 'Name is too long'}});
    Order.validateAsync('Price', validatePrice, {message: 'Price should be > 0'});
    Order.validateAsync('CountAvailable', validateCountAvailable, {message: 'Count should be > 1'});
    Order.validateAsync('DiscountPercent', validateDiscountPercent, {message: 'Minimum 10% from the price'});
    Order.validatesLengthOf('Description', {min: 3, max: 600, message: {min: 'Text too short', max: 'Use shorter text'}});
    Order.validatesLengthOf('SerialNumber', {min: 0, max: 300, message: {min: 'SerialNumber is too short', max: 'SerialNumber is too long'}});
    Order.validateAsync('Table', validateTable, {message: 'Table should be >= 1'});
    Order.validateAsync('Count', validateCount, {message: 'Count should be >= 1'});
    Order.validatesLengthOf('ClientName', {min: 3, max: 64, message: {min: 'Name is too short', max: 'Name is too long'}});
    Order.validatesLengthOf('ClientLastName', {min: 3, max: 64, message: {min: 'LastName is too short', max: 'LastName is too long'}});
    Order.validatesLengthOf('PhoneNumber', {min: 6, max: 15, message: {min: 'Too short phone number', max: 'Too long for phone number'}});
    Order.validatesLengthOf('SpecialWishes', {min: 3, max: 600, message: {min: 'Text too short', max: 'Use shorter text'}});

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
        if (DiscountPercent >= 0.1 && DiscountPercent <= 1) {
        done();
        } else {
          console.log(err, "Incorrect DiscountPercent: " +DiscountPercent+ ", request rejected");
        }
    });
}

function validateTable(err, done) {
    var Table = this.Table;
    process.nextTick(function () {
        if (Table >= 1 && Table <= 100000) {
        done();
        } else {
          console.log(err, "Incorrect Table: " +Table+ ", request rejected");
        }
    });
}

function validateCount(err, done) {
    var Count = this.Count;
    process.nextTick(function () {
        if (Count >= 1) {
        done();
        } else {
          console.log(err, "Incorrect Count: " +Count+ ", request rejected");
        }
    });
}

};
