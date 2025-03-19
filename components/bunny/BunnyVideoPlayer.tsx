"use client";

interface BunnyVideoPlayerProps {
  videoUrl: string;
}

const BunnyVideoPlayer = ({ videoUrl }: BunnyVideoPlayerProps) => {
  return (
    <div style={{ position: "relative", paddingTop: "56.25%" }}>
      <iframe
        src={videoUrl}
        loading="lazy"
        style={{
          border: "0",
          position: "absolute",
          top: "0",
          height: "100%",
          width: "100%",
        }}
        allow="accelerometer;gyroscope;encrypted-media;picture-in-picture;"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
};

export default BunnyVideoPlayer;
