const db = require("../models"),
    Record = db.records,
    {createResponse, CODE} = require("../lib/util"),
    moment = require("moment");

// filter all records from the db collection.
exports.findAll = async (req, res) => {
    const data = req?.body || {};
    const {startDate, endDate, minCount, maxCount } = data;
    if(!startDate || !endDate ) return res.status(400).send(createResponse(CODE.INVALID_PARAM, "Invalid/missing request params"));
    const matchQuery = {
     ...((startDate && startDate) ? {"createdAt":{"$gte":new Date(moment.utc(startDate).startOf('day')),"$lte":new Date(moment.utc(endDate).endOf('day'))}}:{})
    };
    const projection =  {
        totalCount: { $sum: "$counts"},
        key: 1,
        createdAt: 1,
        _id:0
    };
    const aggregate = Record.aggregate([
        {$match:matchQuery},
        {$project:projection},
        {$match:{totalCount:{$gte:minCount, $lte:maxCount}}}
        ])
        .then(data => {
            let response = createResponse(CODE.SUCCESS, "success", data)
            return res.send(response);
        })
        .catch(err => {
            return res.status(500).send(createResponse(CODE.FAIL, "failed to fetch data"));
        });
    ;
};
