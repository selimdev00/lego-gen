import { male, female, any } from "@/assets/icons";

export interface GenderOption {
  name: string;
  value: string;
  description: string;
  icon: string;
}

export const genders: GenderOption[] = [
  {
    name: "Male ♂️",
    description: "Generate male character",
    value: "male",
    icon: male,
  },
  {
    name: "Female ♀️",
    description: "Generate female character",
    value: "female",
    icon: female,
  },
  {
    name: "Who cares? 🤔",
    description: "Generate monster",
    value: "any",
    icon: any,
  },
];

export interface Character {
  Top: string | undefined;
  Head: string | undefined;
  Mouth: string | undefined;
  Glasses: string | undefined;
  Eyes: string | undefined;
  Eyebrows: string | undefined;
  Body: string | undefined;
  Background: string | undefined;
  Pet: string | undefined;
}

export interface ElementTypeItem {
  name: string;
  icon: string;
  value: string;
}

export interface Element {
  name: string;
  icon: string;
}
