pm.test("User Was Posted Successfully", function () {
    pm.response.to.have.status(201);
});

pm.test("User's Name Showed Successfully In Response", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.name).to.eql("Neo");
});
