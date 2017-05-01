module.exports = function() {

    var faker   = require("faker");
    var _       = require("lodash");

    return {
        people: _.times(100, function (n) {
            return {
                id: n,
                name:   faker.name.findName(),
                address: faker.address.streetAddress(),
                zip: faker.address.zipCode(),
                email:  faker.internet.email(),
                avatar: faker.internet.avatar()

            };
    }),

        categories: _.times(6, function (n) {
            return {
                image: faker.random.image(),
                short_description: faker.lorem.sentence(),
                category_ID: faker.random.uuid()
            };

        }),

        sub_categories: _.times(100, function(n) {
            return {
                image: faker.random.image(),
                short_description: faker.lorem.sentence(),
                category_ID: faker.random.uuid()
            };

        }),

        search: _.times(100, function(n) {
            return {
                image: faker.random.image(),
                short_description: faker.lorem.sentence(),
                gtin13: faker.random.uuid(),
                price: faker.commerce.price()

            };

        })


    //end of return object
    };






   // functions ends
};