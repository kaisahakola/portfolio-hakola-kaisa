import { IconType } from "./IconType";

export interface ProjectImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
}

export interface ProjectItemType {
    _id: string;
    title: string;
    links: { url: string; text: string, iconType: IconType }[];
    image: ProjectImage;
    technologies: string[];
    myRole?: string;
    description: string;
}

export type ImageType = "desktop" | "mobile" | null;