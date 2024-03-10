import Logics from "../logics";
import Daemon from "../daemon";
import Magician from "../magician";


test("проверяем подсчёт коэффицента урона от расстояния => distanseAttack", () => {
    const cal = new Logics();

    expect(cal.distanceAttack(1)).toBe(1);
    expect(cal.distanceAttack(2)).toBe(0.9);
    expect(cal.distanceAttack(3)).toBe(0.8);
    expect(cal.distanceAttack(4)).toBe(0.7);
    expect(cal.distanceAttack(5)).toBe(0.6);
})

test("проверяем подсчёт конечного урона => attackFinal", () => {
    expect(new Logics(1).attackFinal()).toBe(100);
    expect(new Logics(2).attackFinal()).toBe(90);
    expect(new Logics(3).attackFinal()).toBe(80);
    expect(new Logics(4).attackFinal()).toBe(70);
    expect(new Logics(5).attackFinal()).toBe(60);
})

test("проверяем урон с дурманом => dope", () => {
    expect(new Logics(1).dope()).toBe(100);
    expect(new Logics(3).dope()).toBe(72);
    expect(new Logics(4).dope()).toBe(60);
    expect(new Logics(5).dope()).toBe(48);
})

test("проверяем вызов гетера attack", () => {
    expect(new Logics(1).attack).toBe(100);
    expect(new Logics(2).attack).toBe(90);
    expect(new Logics(3).attack).toBe(80);
    expect(new Logics(4).attack).toBe(70);
    expect(new Logics(5).attack).toBe(60);
})