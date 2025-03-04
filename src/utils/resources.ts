"use client";

import * as ex from "excalibur";

export const Resources = {
  // Images
  BirdImage: new ex.ImageSource("/flappy-bird/images/bird-4.png"),
  HelicopterImage1: new ex.ImageSource(
    "/flappy-bird/images/helicopter/helicopter_1.png",
  ),
  HelicopterImage2: new ex.ImageSource(
    "/flappy-bird/images/helicopter/helicopter_2.png",
  ),
  HelicopterImage3: new ex.ImageSource(
    "/flappy-bird/images/helicopter/helicopter_3.png",
  ),
  HelicopterImage4: new ex.ImageSource(
    "/flappy-bird/images/helicopter/helicopter_4.png",
  ),
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
  FlapSound: new ex.Sound("/flappy-bird/sounds/zoom.mp3"),
  FailSound: new ex.Sound("/flappy-bird/sounds/snake.mp3"),
  ScoreSound: new ex.Sound("/flappy-bird/sounds/hit.mp3"),

  // Music
  BackgroundMusic: new ex.Sound(
    "/flappy-bird/sounds/song.mp3",
  ),
} as const;
