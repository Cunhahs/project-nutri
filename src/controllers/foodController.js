import food from "../models/food.js"

class foodController {
    static async listFoods(req, res) {
        try {
            const foodsList = await food.find({});
            res.status(200).json(foodsList);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - request failed` });
        }
    };

    static async listFoodsById(req, res) {
        try {
            const id = req.params.id;
            const foundfood = await food.findById(id);
            res.status(200).json(foundfood);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failure in updating the food` });
        }
    };

    static async deleteFood(req, res) {
        try {
            const id = req.params.id;
            await food.findByIdAndDelete(id);

            res.status(200).json({ message: "food successfully deleted" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failure in deleting the food` });
        }
    };

    static async updateFood(req, res) {
        try {
            const id = req.params.id;
            await food.findByIdAndUpdate(id, req.body);
            res.status(200).json(foundfood);

        } catch (error) {
            res.status(500).json({ message: `${error.message} - request failure for the food` });
        }
    };

    static async registerFood(req, res) {
        try {
            const newfood = await food.create(req.body);
            res.status(201).json({ message: "successfully created.", food: newfood });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failure to register food` });
        }
    }
};

export default foodController;
