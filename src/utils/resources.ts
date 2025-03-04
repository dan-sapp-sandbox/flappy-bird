"use client";

import * as ex from "excalibur";

export const Resources = {
  // Images
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
  HelicopterImage5: new ex.ImageSource(
    "/flappy-bird/images/helicopter/helicopter_5.png",
  ),
  HelicopterImage6: new ex.ImageSource(
    "/flappy-bird/images/helicopter/helicopter_6.png",
  ),
  HelicopterImage7: new ex.ImageSource(
    "/flappy-bird/images/helicopter/helicopter_7.png",
  ),
  HelicopterImage8: new ex.ImageSource(
    "/flappy-bird/images/helicopter/helicopter_8.png",
  ),
  PipeImage: new ex.ImageSource(
    "/flappy-bird/images/brick2.png",
    {
      wrapping: ex.ImageWrapping.Repeat,
    },
  ),
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
  BackgroundMusic: new ex.Sound("/flappy-bird/sounds/song.mp3"),
} as const;
