import { IconType } from "./IconType";

export interface ProjectImage {
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
    images: ProjectImage[];
    technologies: string[];
    myRole?: string;
    description: string;
    placement: number;
}

export type ImageType = "desktop" | "mobile" | null;