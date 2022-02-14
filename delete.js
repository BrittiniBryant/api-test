pm.test("Can Successfully Delete", function () {
    pm.response.to.have.status(204);
});

//The above test is NOT supposed to return any content in the body, so don't be alarmed.
