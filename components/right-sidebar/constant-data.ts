import { Dot, FilePlus, LucideIcon } from "lucide-react";

type SimilaritySearchAnalysisPlanDataType = {
  id: number;
  icon: LucideIcon | null;
  data: {
    title: string;
    icon: LucideIcon | null;
  };
};

export const similaritySearchAnalysisPlanData: SimilaritySearchAnalysisPlanDataType[] =
  [
    {
      id: 1,
      icon: Dot,
      data: {
        title: "Provide your data file",
        icon: FilePlus,
      },
    },
    {
      id: 2,
      icon: null,
      data: {
        title: "Load the data and display the first few rows",
        icon: null,
      },
    },
    {
      id: 3,
      icon: null,
      data: {
        title: "Specify the per-processing with similarity search data",
        icon: null,
      },
    },
    {
      id: 4,
      icon: Dot,
      data: {
        title: "Parse the specified column as a determine outcomes",
        icon: null,
      },
    },
    {
      id: 5,
      icon: null,
      data: {
        title: "Goal and reinforcement learning analysis",
        icon: null,
      },
    },
    {
      id: 6,
      icon: Dot,
      data: {
        title: "Specify any post processing steps needed for better outcome",
        icon: null,
      },
    },
  ];
