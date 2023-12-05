import appoiment from "../models/appoiment.js"
import diet from "../models/diet.js"

class appoimentController {

    static async registerAppoiment(req, res) {
        console.log('Tentativa de cadastro de ', req.body.diet)
        try {
            const newDiet = await diet.create(req.body.diet);
            const newAppoiment = await appoiment.create({ ...req.body, appoiment_date: new Date, diet_id: newDiet._id });
            res.status(201).json({ message: "successfully created.", appoiment: newAppoiment, diet: newDiet });
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: `${error.message} - failure to register appoiment` });
        }
    };

    static async updateAppoiment(req, res) {
        try {
            const id = req.params.id;
            const updatedAppoiment = await appoiment.findByIdAndUpdate(id, req.body);
            res.status(200).json(updatedAppoiment);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - request failure for the appoiment` });
        }
    };

    static async deleteAppoiment(req, res) {
        try {
            const id = req.params.id;
            await appoiment.findByIdAndDelete(id);

            res.status(200).json({ message: "appoiment successfully deleted" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failure in deleting the appoiment` });
        }
    };

    static async listAppoiments(req, res) {
        const patientID = req.params.patient_id;
        try {
            const appoimentsList = await appoiment.find({ patient_id: patientID });
            console.log(appoimentsList)
            res.status(200).json(appoimentsList);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - request failed` });
        }
    };

    static async listAppoimentById(req, res) {
        try {
            const id = req.params.id;
            const foundAppoiment = await appoiment.findById(id);
            res.status(200).json(foundAppoiment);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failure in updating the appoiment` });
        }
    };

};

export default appoimentController;
