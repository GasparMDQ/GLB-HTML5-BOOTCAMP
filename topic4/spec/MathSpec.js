describe("Math", function() {
  var MathApi;
  beforeEach(function() {
    MathApi = MathAPI;
  });

  it("Round should be able to round to 0 decimals", function (){
    expect(MathApi.round(1.3,1)).toBe(1);
  });

  it("Round should be able to round up when decimals are => 0.5", function (){
    expect(MathApi.round(1.5,1)).toBe(2);
  });

  it("Round should be able to round into 0.5 steps", function (){
    expect(MathApi.round(1.267,0.5)).toBe(1.5);
  });

  it("Ceil should round up 1.1 to 2", function (){
    expect(MathApi.ceil(1.1,1)).toBe(2);
  });

  it("Ceil should round up 1.1 with step 2 to 2", function (){
    expect(MathApi.ceil(1.1,2)).toBe(2);
  });

  it("Ceil should round up 2.1 with step 2 to 4", function (){
    expect(MathApi.ceil(2.1,2)).toBe(4);
  });

  it("Ceil should round up 2 to 2", function (){
    expect(MathApi.ceil(2,1)).toBe(2);
  });

  it("Clamp should return max if value is greater than max", function (){
    expect(MathApi.clamp(8,3,5)).toBe(5);
  });

  it("Clamp should return min if value is lesser than min", function (){
    expect(MathApi.clamp(1,3,5)).toBe(3);
  });

  it("Clamp should return value if value is between min and max", function (){
    expect(MathApi.clamp(4,3,5)).toBe(4);
  });

it("CountSteps should return 3 steps for a value of 12 taken by 4", function (){
    expect(MathApi.countSteps(12,4)).toBe(3);
  });

it("CountSteps should return 2 steps for a value of 12 taken by 4 with a max steps of 2", function (){
    expect(MathApi.countSteps(12,4,2)).toBe(1); //First Step = 0, Second = 1
  });

it("CountSteps should return 3 steps for a value of 12 taken by 4 with no max steps", function (){
    expect(MathApi.countSteps(12,4)).toBe(3); 
  });

  it("Floor should round up 1.1 to 1", function (){
    expect(MathApi.floor(1.1,1)).toBe(1);
  });

  it("Floor should round up 1.1 with step 2 to 0", function (){
    expect(MathApi.floor(1.1,2)).toBe(0);
  });

  it("Floor should round up 2.1 with step 2 to 2", function (){
    expect(MathApi.floor(2.1,2)).toBe(2);
  });

  it("Floor should round up 2 to 2", function (){
    expect(MathApi.floor(2,1)).toBe(2);
  });

  it("inRange should return false for values(-6,1,10)", function (){
    expect(MathApi.inRange(-6,1,10)).toBeFalsy();
  });

  it("inRange should return false for values(5,1,10)", function (){
    expect(MathApi.inRange(5,1,10)).toBeTruthy();
  });

  it("inRange should return false for values(12,1,10)", function (){
    expect(MathApi.inRange(12,1,10)).toBeFalsy();
  });

  it("inRange should return false for values(12,1,10,2)", function (){
    expect(MathApi.inRange(12,1,10,2)).toBeTruthy();
  });

  it("inRange should return false for values(13,1,10,2)", function (){
    expect(MathApi.inRange(13,1,10,2)).toBeFalsy();
  });

  it("Lerp should return 5 for a ratio of 0.5 ranging from 0 to 10", function (){
    expect(MathApi.lerp(0.5,0,10)).toBe(5);
  });

  it("Lerp should return 7.5 for a ratio of 0.75 ranging from 0 to 10", function (){
    expect(MathApi.lerp(0.75,0,10)).toBe(7.5);
  });

  it("Loop should return 10 for a value of -1 with a min of 0 and a max of 10", function (){
    expect(MathApi.loop(-1, 0, 10)).toBe(10);
  });

  it("Loop should return 1 for a value of 1 with a min of 0 and a max of 10", function (){
    expect(MathApi.loop(1, 0, 10)).toBe(1);
  });

  it("Loop should return 5 for a value of 5 with a min of 0 and a max of 10", function (){
    expect(MathApi.loop(5, 0, 10)).toBe(5);
  });

  it("Loop should return 9 for a value of 9 with a min of 0 and a max of 10", function (){
    expect(MathApi.loop(9, 0, 10)).toBe(9);
  });

  it("Loop should return 10 for a value of 10 with a min of 0 and a max of 10", function (){
    expect(MathApi.loop(10, 0, 10)).toBe(10);
  });

  it("Loop should return 0 for a value of 11 with a min of 0 and a max of 10", function (){
    expect(MathApi.loop(11, 0, 10)).toBe(0);
  });

  it("Norm should return 0.5 for a value of 50 with a min of 0 and a max of 100", function (){
    expect(MathApi.norm(50,0,100)).toBe(0.5);
  });

  it("Norm should return 0.75 for a value of 75 with a min of 0 and a max of 100", function (){
    expect(MathApi.norm(75,0,100)).toBe(0.75);
  });

});
