import nutritionist from "../models/nutritionist.js"

class NutritionistController {
    static async listNutritionists(req, res) {
        try {
            const nutritionistsList = await nutritionist.find({});
            res.status(200).json(nutritionistsList);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - request failed` });
        }
    };

    static async loginNutritionist(req, res) {
        try {             // check if the user exists 
            const user = await nutritionist.findOne({ email: req.body.email });
            if (user) {
                // check if password matches 
                const result = req.body.password === user.password;
                if (result) {
                    res.status(201).json({ message: `Authentication successful` })
                } else {
                    res.status(400).json({ error: "Incorrect password" });
                }
            } else {
                res.status(400).json({ error: "User does not exist" });
            }
        } catch (error) {
            res.status(400).json({ error });
        }
    };

    static async listNutritionistsById(req, res) {
        try {
            const id = req.params.id;
            const foundNutritionist = await nutritionist.findById(id);
            res.status(200).json(foundNutritionist);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failure in updating Nutritionist` });
        }
    };

    static async deleteNutritionist(req, res) {
        try {
            const id = req.params.id;
            await nutritionist.findByIdAndDelete(id);

            res.status(200).json({ message: "Nutritionist successfully deleted" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failure in deleting Nutritionist` });
        }
    };

    static async updateNutritionist(req, res) {
        try {
            const id = req.params.id;
            const updatedNutritionist = await nutritionist.findByIdAndUpdate(id, req.body);
            res.status(200).json(updatedNutritionist);

        } catch (error) {
            res.status(500).json({ message: `${error.message} - request failure for Nutritionist` });
        }
    };

    static async registerNutritionist(req, res) {
        try {
            const newNutritionist = await nutritionist.create(req.body);
            res.status(201).json({ message: "Successfully created.", nutritionist: newNutritionist });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failure to register nutritionist` });
        }
    }
};

export default NutritionistController;

