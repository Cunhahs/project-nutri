import patient from "../models/patient.js"

class PatientController {
    static async listPatients(req, res) {
        try {
            const patientsList = await patient.find({});
            res.status(200).json(patientsList);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - request failed` });
        }
    };

    static async listPatientsById(req, res) {
        try {
            const id = req.params.id;
            const foundPatient = await patient.findById(id);
            res.status(200).json(foundPatient);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failure in updating the patient` });
        }
    };

    static async deletePatient(req, res) {
        try {
            const id = req.params.id;
            await patient.findByIdAndDelete(id);

            res.status(200).json({ message: "Patient successfully deleted" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failure in deleting the patient` });
        }
    };

    static async updatePatient(req, res) {
        try {
            const id = req.params.id;
            await patient.findByIdAndUpdate(id, req.body);
            res.status(200).json(foundPatient);

        } catch (error) {
            res.status(500).json({ message: `${error.message} - request failure for the patient` });
        }
    };

    static async registerPatient(req, res) {
        try {
            const newPatient = await patient.create(req.body);
            res.status(201).json({ message: "successfully created.", patient: newPatient });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failure to register patient` });
        }
    }
};

export default PatientController;
