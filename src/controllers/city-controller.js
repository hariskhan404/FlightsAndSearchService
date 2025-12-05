const { Cityservice } = require("../services/index");

const cityservice = new Cityservice();

const create = async (req, res) => {
    try {
        const city = await cityservice.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: "Successfully created a city",
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to create a city",
            err: error,
        });
    }
};

const destroy = async (req, res) => {
    try {
        const response = await cityservice.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully deleted a city",
            err: {},
        });
    } catch (error) {
        console.log(error);
         return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to delete the city",
            err: error,
        });
    }
};

const get = async (req, res) => {
    try {
        const response = await cityservice.getCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully fetched a city",
            err: {},
        });
    } catch (error) {
        console.log(error);
         return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to get the city",
            err: error,
        });
    }
};

const update = async (req, res) => {
    try {
        const response = await cityservice.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully updated a city",
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to update the city",
            err: error,
        });
    }
};

module.exports = {
    create,
    destroy,
    get,
    update,
};
