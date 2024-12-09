import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Layout from "../Layout";
import Landing from "../Landing";
import Products from "../Products";
import userEvent from "@testing-library/user-event";

describe("Landing header bar", () => {
  it("renders header bar and correct contents", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );
    //Expect the navbar at the top of the page to be rendered
    expect(screen.getByRole("navigation")).toBeInTheDocument();

    expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();

    expect(screen.getByRole("link", { name: /products/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /cart/i })).toBeInTheDocument();
  });
});

describe("Allows the user to navigate to the products page from main content button", () => {
  it("renders the products page when the user clicks on the products link in the main content", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path="/products" element={<Products />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    const user = userEvent.setup();

    //Expect the products page to be rendered when the user clicks on the products link
    const productLink = screen.getByText("Start shopping", {
      selector: "a.landingLink",
    });
    await user.click(productLink);

    // Check that the Products page is rendered
    expect(screen.getByText(/product page/i)).toBeInTheDocument();

    const productCardTitle1 = await screen.findByText("Mens Cotton Jacket", {
      selector: "h3.productName",
    });
    const productCardTitle2 = await screen.findByText("Mens Casual Slim Fit", {
      selector: "h3.productName",
    });
    const productCardTitle3 = await screen.findByText(
      "Opna Women's Short Sleeve Moisture",
      {
        selector: "h3.productName",
      }
    );
    expect(productCardTitle1).toBeInTheDocument();
    expect(productCardTitle2).toBeInTheDocument();
    expect(productCardTitle3).toBeInTheDocument();
  });
});
