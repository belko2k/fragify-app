import { allFragrances } from "./constants";
import men from "./men";
import women from "./women";

export const allFragranceCategoryData = {
    documentTitle: 'Shop all fragrances | FRAGIFY',
    banner: {
        title: 'All Fragrances'
    },
    fragrances: allFragrances
};
export const menCategoryData = {
    documentTitle: 'Men Fragrances | FRAGIFY',
    banner: {
        title: 'FOR HIM'
    },
    fragrances: men
};
export const womenCategoryData = {
    documentTitle: 'Women Fragrances | FRAGIFY',
    banner: {
        title: 'FOR HER'
    },
    fragrances: women
};