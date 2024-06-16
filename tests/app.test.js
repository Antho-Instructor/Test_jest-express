const request = require("supertest");

const app = require("../src/app");

describe("GET /api/wilders", () => {
	it("should return an array of wilders", async () => {
		const res = await request(app).get("/api/wilders");
		expect(res.statusCode).toEqual(200);
		expect(res.body).toEqual([
			{
				id: 1,
				name: "Yavuz",
			},
			{
				id: 2,
				name: "Ayoub",
			},
			{
				id: 3,
				name: "Benoît",
			},
			{
				id: 4,
				name: "Anthony",
			},
		]);
	});

	it("The first element should be Yavuz", async () => {
		const res = await request(app).get("/api/wilders");
		expect(res.body[0].name).toEqual("Yavuz");
	});
});
