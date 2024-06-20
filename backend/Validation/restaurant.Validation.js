import joi from "joi";

export const ValidateRestaurantCity = (restaurantObject) => {
    const Schema = joi.object({
        city: joi().string().required(),
    });

    return Schema.validateAsync(restaurantObject);
};

import Joi from "joi";

export const ValidateSearchString = (data) => {
    const Schema = Joi.object({
        searchString: Joi.string().required(),
    });

    return Schema.validateAsync(data);
};
