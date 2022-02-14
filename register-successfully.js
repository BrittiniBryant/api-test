pm.test("User Was Registered Successfully", function () {
    pm.response.to.have.status(200);
});

pm.test("ID Matches Example Documentation", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.id).to.eql(4);
});
