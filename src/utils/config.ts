import * as ex from "excalibur";

export const Config = {
  BirdStartPos: ex.vec(200, 300),
  BirdAcceleration: 1200,
  BirdJumpVelocity: -800,
  BirdMinVelocity: -500,
  BirdMaxVelocity: 500,
  PipeSpeed: 200,
  PipeInterval: 1600,
  PipeGap: 175,
} as const;
