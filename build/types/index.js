"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionType = exports.ListingType = void 0;
var ListingType;
(function (ListingType) {
    ListingType["Apartment"] = "APARTMENT";
    ListingType["House"] = "HOUSE";
})(ListingType || (exports.ListingType = ListingType = {}));
var TransactionType;
(function (TransactionType) {
    TransactionType["Rent"] = "RENT";
    TransactionType["Buy"] = "BUY";
})(TransactionType || (exports.TransactionType = TransactionType = {}));
