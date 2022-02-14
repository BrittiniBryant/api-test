pm.test("User Was Updated Successfully", function () {
    pm.response.to.have.status(200);
});

pm.test("User's Job Successfully Updated In The Response ", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.job).to.eql("Programmer");
});
