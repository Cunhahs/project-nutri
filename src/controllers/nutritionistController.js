import nutritionist from "../models/nutritionist.js"
import { crypto } from "../util/crypto.js";

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
        try {
            const user = await nutritionist.findOne({ email: req.body.email });

            if (!user || !(await crypto.match(req.body.password, user.password))) {
                return res.status(401).json({ error: "Email or password is incorrect" });
            }

            res.status(200).json({ message: `Authentication successful` });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

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
            const encryptedPassword = crypto.encode(req.body.password);
            const newNutritionist = await nutritionist.create({ ...req.body, password: encryptedPassword, });
            res.status(201).json({ message: "Successfully created.", nutritionist: newNutritionist });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failure to register nutritionist` });
        }
    }
};

export default NutritionistController;

