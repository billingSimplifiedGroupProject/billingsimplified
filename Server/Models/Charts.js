var mongoose = require('mongoose');

var ChartSchema = new mongoose.Schema({

    chart: {
        practiceId: {type:Schema.Types.ObjecId, ref:"Practice"},
        date: {type: Date, default: Date.now},
        graphData:{
            totalAR: {
                current: Number,
                thirtySixty: Number,
                sixtyNinety: Number,
                ninetyUp: Number,
            },
            insuranceAR: {
                current: Number,
                thirtySixty: Number,
                sixtyNinety: Number,
                ninetyUp: Number,
            },
            patientAR: {
                current: Number,
                thirtySixty: Number,
                sixtyNinety: Number,
                ninetyUp: Number,
            },
            patients: {
                totalPatients: Number,
                newPatients: Number
            },
            billed: {
                totalBilled: Number,
                billedPerPatient: Number
            }
        }
      }

})
module.exports = mongoose.model('Data', ChartSchema);
