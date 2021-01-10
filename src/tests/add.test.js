const add = (a,b) => a + b;

test("Add numbers", () => {
    expect(add(1,3)).toBe(4);
});