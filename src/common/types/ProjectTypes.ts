export interface ProjectItem {
    _id: string;
    title: string;
    links: { url: string; text: string }[];
    images?: {
        type: ImageType;
        asset: {
        _id: string;
        url: string;
        metadata: {
            dimensions: { width: number; height: number };
        };
        };
    }[];
    technologies: string[];
    myRole?: string;
    description: string;
}

export type ImageType = "desktop" | "mobile";