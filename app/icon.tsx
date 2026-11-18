import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: "#1a0b22", // Matches your midnight purple background
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          border: "2px solid #fb7185", // Rose-400 border
        }}
      >
        👑
      </div>
    ),
    {
      ...size,
    }
  );
}