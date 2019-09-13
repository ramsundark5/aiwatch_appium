describe("Running a sample test", () => {
    beforeEach(() => {
        $("~cameraHome").waitForDisplayed(11000, false)
    });
  
    it("Should increase the count by 1", () => {
        $("~addCameraFAB").click();
    });
});