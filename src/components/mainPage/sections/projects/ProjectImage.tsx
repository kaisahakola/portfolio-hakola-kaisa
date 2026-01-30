import { useState } from "react";
import { ImageType } from "../../../../common/types/ProjectTypes";
import { urlFor } from "../../../../sanity/client";

interface ProjectImageProps {
  image: any;
}

const ProjectImage = ({ image }: ProjectImageProps) => {
  const [orientation, setOrientation] = useState<ImageType | null>(null);

  const handleLoad = (img: HTMLImageElement) => {
    setOrientation(
      img.naturalWidth > img.naturalHeight ? "desktop" : "mobile"
    );
  };

  return (
    <img
      src={urlFor(image).url()}
      alt={image.alt ?? "Project image"}
      className={`project-image ${orientation ? `image-${orientation}` : ""}`}
      onLoad={(e) => handleLoad(e.currentTarget)}
    />
  );
};

export default ProjectImage;
