pm.test("Can Login Successfully", function () {
    pm.response.to.have.status(200);
});

pm.test("Expected Token Was Received", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.token).to.eql("QpwL5tke4Pnpja7X4");
});
