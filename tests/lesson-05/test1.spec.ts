import { test } from "@playwright/test";

test("điền registration form", async ({ page }) => {
  // vào page material.playwrightvn.com
  await page.goto("https://material.playwrightvn.com/");

  // click vào link bài học 1
  await page.locator("//a[@href='01-xpath-register-page.html']").click();

  //fill username
  await page.locator("//input[@id='username']").fill("Nguyen Minh Ha");

  //fill email
  await page.locator("//input[@id='email']").fill("minhha231998@gmail.com");

  // click on gender radio button
  await page.locator("//input[@id='male']").check();

  // click on hobby = "Traveling"
  await page.locator("//input[@id='traveling']").check();

  // Click on option Music for interest
  await page
    .locator('//select[@id ="interests"]')
    .selectOption({ label: "Music" });

  // Click on option United Kingdom for Country field
  await page
    .locator('//select[@id ="country"]')
    .selectOption({ label: "United Kingdom" });

  // fill date of birth
  await page.locator("//input[@id='dob']").click();
  await page
    .locator("//input[@id='dob']")
    .pressSequentially("03021998", { delay: 100 });

  //upload profile picture
  await page
    .locator("//input[@id = 'profile']")
    .setInputFiles(
      "C:/Users/Jake Nguyen/Desktop/yellow-rubber-duck-isolated-on-white-background-vector.jpg",
    );

  //fill biography
  await page.locator("//textarea[@id='bio']").fill("I have nothing to say");

  //kéo slider cho đến khi giá trị = 7
  const slider = page.locator("//input[@id='rating']");

  await slider.evaluate((el) => {
    el.value = "7";
  });

  await slider.dispatchEvent("input");
  await slider.dispatchEvent("change");

  //điền favourite color
  await page.locator("//input[@id='favcolor']").fill('#33cc74')

  //hover over me text
  await page.locator("//div[@class='tooltip']").hover();

  //click on subscribe checkbox
  await page.locator("//input[@id='newsletter']").click();

  //click on enable feature toggle button
  await page.locator("//span[@class='slider round']").check();

  //submit registration form
  await page.locator("//button[@type='submit']").click();

});
