"use client";
import * as ex from "excalibur";
import { Resources } from "./resources";
import { Config } from "./config";
import { Level } from "./level";
import { Pipe } from "./pipe";
import { Ground } from "./ground";

export class Bird extends ex.Actor {
  playing = false;
  jumping = false;
  startSprite!: ex.Sprite;
  upAnimation!: ex.Animation;
  downAnimation!: ex.Animation;
  constructor(private level: Level) {
    super({
      pos: Config.BirdStartPos,
      radius: 8,
      // rotating box double counts
      // width: 16,
      // height: 16,
      color: ex.Color.Yellow,
    });
  }

  override onInitialize(): void {
    this.startSprite = new ex.Sprite({
      image: Resources.HelicopterImage1,
      sourceView: {
        x: 0,
        y: 0,
        width: 120,
        height: 32,
      },
    });
    this.upAnimation = new ex.Animation({
      frames: [
        {
          graphic: new ex.Sprite({
            image: Resources.HelicopterImage1,
            sourceView: {
              x: 0,
              y: 0,
              width: 120,
              height: 32,
            },
          }),
          duration: 10,
        },
        {
          graphic: new ex.Sprite({
            image: Resources.HelicopterImage2,
            sourceView: {
              x: 0,
              y: 0,
              width: 120,
              height: 32,
            },
          }),
          duration: 10,
        },
        {
          graphic: new ex.Sprite({
            image: Resources.HelicopterImage3,
            sourceView: {
              x: 0,
              y: 0,
              width: 120,
              height: 32,
            },
          }),
          duration: 10,
        },
        {
          graphic: new ex.Sprite({
            image: Resources.HelicopterImage4,
            sourceView: {
              x: 0,
              y: 0,
              width: 120,
              height: 32,
            },
          }),
          duration: 10,
        },
        {
          graphic: new ex.Sprite({
            image: Resources.HelicopterImage5,
            sourceView: {
              x: 0,
              y: 0,
              width: 120,
              height: 32,
            },
          }),
          duration: 10,
        },
        {
          graphic: new ex.Sprite({
            image: Resources.HelicopterImage6,
            sourceView: {
              x: 0,
              y: 0,
              width: 120,
              height: 32,
            },
          }),
          duration: 10,
        },
        {
          graphic: new ex.Sprite({
            image: Resources.HelicopterImage7,
            sourceView: {
              x: 0,
              y: 0,
              width: 120,
              height: 32,
            },
          }),
          duration: 10,
        },
        {
          graphic: new ex.Sprite({
            image: Resources.HelicopterImage8,
            sourceView: {
              x: 0,
              y: 0,
              width: 120,
              height: 32,
            },
          }),
          duration: 10,
        },
      ],
    });
    this.downAnimation = new ex.Animation({
      frames: [
        {
          graphic: new ex.Sprite({
            image: Resources.HelicopterImage1,
            sourceView: {
              x: 0,
              y: 0,
              width: 120,
              height: 32,
            },
          }),
          duration: 10,
        },
        {
          graphic: new ex.Sprite({
            image: Resources.HelicopterImage2,
            sourceView: {
              x: 0,
              y: 0,
              width: 120,
              height: 32,
            },
          }),
          duration: 10,
        },
        {
          graphic: new ex.Sprite({
            image: Resources.HelicopterImage3,
            sourceView: {
              x: 0,
              y: 0,
              width: 120,
              height: 32,
            },
          }),
          duration: 10,
        },
        {
          graphic: new ex.Sprite({
            image: Resources.HelicopterImage4,
            sourceView: {
              x: 0,
              y: 0,
              width: 120,
              height: 32,
            },
          }),
          duration: 10,
        },
        {
          graphic: new ex.Sprite({
            image: Resources.HelicopterImage5,
            sourceView: {
              x: 0,
              y: 0,
              width: 120,
              height: 32,
            },
          }),
          duration: 10,
        },
        {
          graphic: new ex.Sprite({
            image: Resources.HelicopterImage6,
            sourceView: {
              x: 0,
              y: 0,
              width: 120,
              height: 32,
            },
          }),
          duration: 10,
        },
        {
          graphic: new ex.Sprite({
            image: Resources.HelicopterImage7,
            sourceView: {
              x: 0,
              y: 0,
              width: 120,
              height: 32,
            },
          }),
          duration: 10,
        },
        {
          graphic: new ex.Sprite({
            image: Resources.HelicopterImage8,
            sourceView: {
              x: 0,
              y: 0,
              width: 120,
              height: 32,
            },
          }),
          duration: 10,
        },
      ],
    });

    // Register
    this.graphics.add("down", this.downAnimation);
    this.graphics.add("up", this.upAnimation);
    this.graphics.add("start", this.startSprite);

    this.graphics.use("start");

    this.on("exitviewport", () => {
      this.level.triggerGameOver();
    });
  }

  private isInputActive(engine: ex.Engine) {
    return (engine.input.keyboard.isHeld(ex.Keys.Space) ||
      engine.input.pointers.isDown(0));
  }

  override onPostUpdate(engine: ex.Engine): void {
    if (!this.playing) return;

    // if the space bar or the first pointer was down
    if (!this.jumping && this.isInputActive(engine)) {
      this.vel.y += Config.BirdJumpVelocity;
      this.jumping = true;
      this.graphics.use("up");
      // rewind
      this.upAnimation.reset();
      this.downAnimation.reset();
      // play sound effect
      Resources.FlapSound.play();
    }

    if (!this.isInputActive(engine)) {
      this.jumping = false;
    }

    this.vel.y = ex.clamp(
      this.vel.y,
      Config.BirdMinVelocity,
      Config.BirdMaxVelocity,
    );

    // The "speed" the bird will move relative to pipes
    this.rotation = ex.vec(Config.PipeSpeed, this.vel.y / 5).toAngle();

    if (this.vel.y > 0) {
      this.graphics.use("down");
    }
  }

  start() {
    this.playing = true;
    this.pos = Config.BirdStartPos; // starting position
    this.acc = ex.vec(0, Config.BirdAcceleration); // pixels per second per second
  }

  reset() {
    this.pos = Config.BirdStartPos; // starting position
    this.stop();
  }

  stop() {
    this.playing = false;
    this.vel = ex.vec(0, 0);
    this.acc = ex.vec(0, 0);
  }

  override onCollisionStart(_self: ex.Collider, other: ex.Collider): void {
    if (
      other.owner instanceof Pipe ||
      other.owner instanceof Ground
    ) {
      this.level.triggerGameOver();
    }
  }
}
