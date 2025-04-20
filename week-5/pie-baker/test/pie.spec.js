/**
 * Author: Joe Akindele
 * Date: April-20-2025
 * File Name: pie.spec.js
 * Description: Unit tests for the bakePie function
 */

"use strict";

const { bakePie } = require("../src/pie");

describe("bakePie", () => {
  it("should return a success message when all essential ingredients are present", () => {
    const ingredients = ["flour", "sugar", "butter", "apples"];
    const result = bakePie("apple", ingredients);
    expect(result).toBe("Successfully baked an apple pie!");
  });

  it("should exit the process and log warning if 'flour' is missing", () => {
    const ingredients = ["sugar", "butter"];
    const mockExit = jest.spyOn(process, "exit").mockImplementation(() => {});
    const mockWarn = jest.spyOn(console, "warn").mockImplementation(() => {});

    bakePie("cherry", ingredients);

    expect(mockWarn).toHaveBeenCalledWith("Missing essential ingredient: flour");
    expect(mockExit).toHaveBeenCalledWith(1);

    mockExit.mockRestore();
    mockWarn.mockRestore();
  });

  it("should exit the process and log warning if 'butter' is missing", () => {
    const ingredients = ["flour", "sugar"];
    const mockExit = jest.spyOn(process, "exit").mockImplementation(() => {});
    const mockWarn = jest.spyOn(console, "warn").mockImplementation(() => {});

    bakePie("pecan", ingredients);

    expect(mockWarn).toHaveBeenCalledWith("Missing essential ingredient: butter");
    expect(mockExit).toHaveBeenCalledWith(1);

    mockExit.mockRestore();
    mockWarn.mockRestore();
  });
});
