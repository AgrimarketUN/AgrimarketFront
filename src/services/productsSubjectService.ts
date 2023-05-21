import { Product } from "@/models";
import { SubjectManager } from "@/utils";

export const productsSubjectService = new SubjectManager<Product[]>();