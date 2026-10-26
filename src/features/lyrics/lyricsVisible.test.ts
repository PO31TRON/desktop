import { afterEach, describe, expect, it } from "vitest";
import { useLyricsStore } from "./store/lyricsStore";

describe("Lyrics visibility", () => {
  afterEach(() => {
    useLyricsStore.getState().setLyricsVisible(true);
  });

  it("shows lyrics by default", () => {
    useLyricsStore.getState().setLyricsVisible(true);

    expect(useLyricsStore.getState().lyricsVisible).toBe(true);
  });

  it("hides lyrics when visibility is disabled", () => {
    useLyricsStore.getState().setLyricsVisible(false);

    expect(useLyricsStore.getState().lyricsVisible).toBe(false);
  });

  it("shows lyrics again when visibility is enabled", () => {
    useLyricsStore.getState().setLyricsVisible(false);
    useLyricsStore.getState().setLyricsVisible(true);

    expect(useLyricsStore.getState().lyricsVisible).toBe(true);
  });

  it("preserves visibility after lyrics state reset", () => {
    useLyricsStore.getState().setLyricsVisible(false);
    useLyricsStore.getState().reset();

    expect(useLyricsStore.getState().lyricsVisible).toBe(false);
  });
});