import { InvalidUuidError, Uuid } from "../uuid.vo"
import { validate as uuidValidate } from 'uuid';

describe("Uuid Unit Tests", () => {

    const validateSpy = jest.spyOn(Uuid.prototype as any, 'validate')

    test("should throw an error when uuid is invalid", () => {
        expect(() => {
            new Uuid("invalid-uuid");
        }).toThrowError(new InvalidUuidError());
        expect(validateSpy).toHaveBeenCalledTimes(1);
    })

    test("should create a valid uuid", () => {
        const uuid = new Uuid();
        expect(uuid.id).toBeDefined();
        expect(uuidValidate(uuid.id)).toBe(true);
        expect(validateSpy).toHaveBeenCalledTimes(1);
    })

    test("should accept a valid uuid", () => {
        const uuid = new Uuid("1b112186-dae9-4985-885b-b723b7eb51c4")
        expect(uuid.id).toBe('1b112186-dae9-4985-885b-b723b7eb51c4')
        expect(validateSpy).toHaveBeenCalledTimes(1);
    })
})