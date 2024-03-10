import Daemon from "../daemon";

test("Проверяем установку сеттера и геттер с дурманом => stoned", () => {
    const daem = new Daemon(2, true);

    // проверка геттера
    expect(daem.stoned).toBe(true);
    // проверка сеттера
    daem.stoned = false;
    expect(daem.stoned).toBe(false);
})

test("вызываем атаку и наносим урон с дурманом => get attack", () => {
    const daem = new Daemon(2, true);
    expect(daem.attack).toBe(85);
})

test("вызываем атаку и наносим урон без дурмана => get attack", () => {
    const daem = new Daemon(2, false);
    expect(daem.attack).toBe(90)
})