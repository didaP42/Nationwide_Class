const capitalize = require('./capitalize.js');

describe("Capitalize Test Suite", () => {
	test('capitalize function exists', () => {
 		expect(typeof capitalize).toEqual('function');
    })
});

 test("manifest", () => {
     expect(capitalize("manifest")).toEqual("Manifest");
     
 })