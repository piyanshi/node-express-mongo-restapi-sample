module.exports = mongoose => {
    let recordSchema = mongoose.Schema(
        {
            key: String,
            value: String,
            createdAt: Date,
            counts: Array
        }
    );

    recordSchema.method("toJSON", function() {
        const { _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Record = mongoose.model(
        "record",
        recordSchema,
        'records'
    );

    return Record;
};
