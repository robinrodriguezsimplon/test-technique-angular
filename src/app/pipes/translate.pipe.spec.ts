import { EnumGender } from "../enum";
import { TranslatePipe } from "./translate.pipe";

describe("TranslatePipe", () => {
  it("create an instance", () => {
    const pipe = new TranslatePipe();
    expect(pipe).toBeTruthy();
  });
});

describe("transform", () => {
  const pipe = new TranslatePipe();
  it("should translate Male into Homme", () => {
    expect(pipe.transform(EnumGender.MALE)).toEqual("Homme");
  });
  it("should translate Female into Femme", () => {
    expect(pipe.transform(EnumGender.FEMALE)).toEqual("Femme");
  });
  it("should return same value if nothing match", () => {
    expect(pipe.transform("Test")).toEqual("Test");
  });
});
