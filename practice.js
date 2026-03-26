const { Selector } = require("testcafe");
// const allure = require("testcafe-reporter-allure");
const step = require('testcafe-reporter-allure-extended');
const allure = require("allure-js-commons");
const fs = require("fs");


fixture("My Fixture")
  .page("about:blank");



test.meta({
  ID: '727',
  SEVERITY: 'blocker',
  STORY: '543',
  TEST_RUN: 'are eita test run'
}).skip("Google Test", async t => {
  await t.navigateTo("https://www.google.com");
  await t.expect(Selector("title").innerText).eql("Googgle");
});


test.meta({
  ID: '728',
  SEVERITY: 'critical',
  STORY: '332',
})("Bing Test", async t => {

  await t.navigateTo("https://pagespeed.web.dev/");
  await t.expect(Selector("title").innerText).eql("PageSpeed Insights");
});






// test
// .meta({ ID: '727', SEVERITY: 'blocker', STORY: '543', TEST_RUN: 'are eita test run' })
// ("Automation Testing Practice Test", async t => {

//     // await allure.step("Navigate to Google", async () => {
//     //     // await t.addContext("Step", "Navigated to Google");
//     //     // process.env.ALLURE_STEP = "Navigate to Google";
//     //     await t.navigateTo("https://testautomationpractice.blogspot.com/");
//     // });

//     // await allure.step("Validate page title", async () => {
//     //     await t.expect(Selector("h1[class='title']").innerText).eql("Automation Testing Practice");
//     // });
//     await step('Add developer name to form', t, 
//     t.typeText('#developer-name', 'John Smith')
//   );

// });








test.meta({
  SEVERITY: 'normal',
  ID: 124,
  TEST_RUN: 'Jihad agent',
  STORY: 'Jihad story',
})("Test with meta", async t => {
  await t.navigateTo("https://www.example.com");
  await t.expect(Selector("title").innerText).eql("Examples Domain");
});




// test('Example test with steps', async (t) => {
//   await step('Add developer name to form', t, 
//     await t.navigateTo("https://testautomationpractice.blogspot.com/")
//   );
//   await step('Submit form and check result', t,
//     await t.expect(Selector("h1[class='title']").innerText).eql("Automation Testing Practice")
//   );
// });






