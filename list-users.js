pm.test("Users Are Successfully Listed", function () {
    pm.response.to.have.status(200);
});

pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});

var jsonData = pm.response.json();

pm.test("Correct Page Data", function () {  
    pm.expect(jsonData.page).to.eql(2);
    pm.expect(jsonData.total).to.eql(12);
});
