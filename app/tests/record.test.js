const app = require("../../server");
const supertest = require("supertest");
const mongoose = require("mongoose");
const {mongodbConfig} = require("../config/db.config.js");
const data = require("./record.test.data");
beforeEach((done) => {
    mongoose.connect(mongodbConfig.url,
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => done());
});

afterEach((done) => {
        mongoose.connection.close(() => done())
});

test("POST /api/records/find", async () => {
    await supertest(app).post("/api/records/find")
        .send(data)
        .expect(200)
        .then(async (response) => {
            // Check the response
            expect(response.body.code).toBe(0);
            expect(response.body.message).toBe("success");
            expect(response.body.records.length).toBe(25);
        });
});

/*test("PATCH /api/posts/:id", async () => {
    const post = await Post.create({ title: "Post 1", content: "Lorem ipsum" });

    const data = { title: "New title", content: "dolor sit amet" };

    await supertest(app).patch("/api/posts/" + post.id)
        .send(data)
        .expect(200)
        .then(async (response) => {
            // Check the response
            expect(response.body._id).toBe(post.id);
            expect(response.body.title).toBe(data.title);
            expect(response.body.content).toBe(data.content);

            // Check the data in the database
            const newPost = await Post.findOne({ _id: response.body._id });
            expect(newPost).toBeTruthy();
            expect(newPost.title).toBe(data.title);
            expect(newPost.content).toBe(data.content);
        });
});*/
