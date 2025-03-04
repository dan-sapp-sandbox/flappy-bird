"use client";

import * as ex from "excalibur";

export const Resources = {
  // Relative to /public in vite

  // Images
  BirdImage: new ex.ImageSource("/flappy-bird/images/bird-4.png"),
  PipeImage: new ex.ImageSource("/flappy-bird/images/pipe.png", {
    wrapping: ex.ImageWrapping.Clamp, // Clamp is the default
  }),
  GroundImage: new ex.ImageSource(
    "/flappy-bird/images/ground.png",
    {
      wrapping: ex.ImageWrapping.Repeat,
    },
  ),

  // Sounds
  FlapSound: new ex.Sound("/flappy-bird/sounds/flap.wav"),
  FailSound: new ex.Sound("/flappy-bird/sounds/fail.wav"),
  ScoreSound: new ex.Sound("/flappy-bird/sounds/score.wav"),

  // Music
  BackgroundMusic: new ex.Sound(
    "/flappy-bird/sounds/two_left_socks.ogg",
  ),
} as const;
