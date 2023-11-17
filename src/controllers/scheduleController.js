import schedule from "../models/schedule.js"

class scheduleController {
    static async listSchedules(req, res) {
        try {
            const schedulesList = await schedule.find({});
            res.status(200).json(schedulesList);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - request failed` });
        }
    };

    static async listSchedulesById(req, res) {
        try {
            const id = req.params.id;
            const foundschedule = await schedule.findById(id);
            res.status(200).json(foundschedule);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failure in updating the schedule` });
        }
    };

    static async deleteSchedule(req, res) {
        try {
            const id = req.params.id;
            await schedule.findByIdAndDelete(id);

            res.status(200).json({ message: "schedule successfully deleted" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failure in deleting the schedule` });
        }
    };

    static async updateSchedule(req, res) {
        try {
            const id = req.params.id;
            await schedule.findByIdAndUpdate(id, req.body);
            res.status(200).json(foundschedule);

        } catch (error) {
            res.status(500).json({ message: `${error.message} - request failure for the schedule` });
        }
    };

    static async registerSchedule(req, res) {
        try {
            const newschedule = await schedule.create(req.body);
            res.status(201).json({ message: "successfully created.", schedule: newschedule });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failure to register schedule` });
        }
    }
};

export default scheduleController;
