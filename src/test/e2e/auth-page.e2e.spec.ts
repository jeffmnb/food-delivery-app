import { expect, test } from "@playwright/test"

test("sign in error", async ({ page }) => {
  await page.goto("/auth", { waitUntil: "networkidle" })
  await page.getByRole("textbox").fill("test@test.com")
  await page.getByRole("button", { name: "Acessar painel" }).click()
  expect(page.getByText("Oops! revise seu email.")).toBeVisible()
})

test("sign out error", async ({ page }) => {
  await page.goto("/auth", { waitUntil: "networkidle" })
  await page.getByText("Novo estabelecimento").click()
  expect(page.getByText("Crie uma conta grátis")).toBeVisible()
  await page.getByRole("textbox").first().fill("Restautante X")
  await page.getByRole("textbox").nth(1).fill("Jeff")
  await page.locator('input[type="email"]').fill("test@test.com")
  await page.getByRole("textbox").nth(3).fill("14997400092")
  await page.getByRole("button", { name: "Finalizar cadastro" }).click()
  expect(page.getByText("Oops! revise seus dados.")).toBeVisible()
})
