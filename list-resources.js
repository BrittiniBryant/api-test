pm.test("Resources Are Successfully Listed", function () {
    pm.response.to.have.status(200);
});

var jsonData = pm.response.json();

pm.test("Correct Page Data", function () {  
    pm.expect(jsonData.total).to.eql(12);
    pm.expect(jsonData.total_pages).to.eql(2)
});
