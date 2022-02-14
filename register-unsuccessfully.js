pm.test("Account Was NOT Registered", function () {
    pm.response.to.have.status(400);
});

pm.test("Missing Password Error", function () {
    pm.response.to.have.body({"error":"Missing password"});
});

//Errors should come back
