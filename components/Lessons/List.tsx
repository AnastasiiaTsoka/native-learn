import { images } from "@/constants/images";
export interface ListProps{
    id: number,
    title: string,
    img: any,
};

export const List = [
    {id:1, title:'Alphabet',img: images.alphabet },
    {id:2, title:'Welcome',img: images.welcome },
    {id:3, title:'Family',img: images.family },
    {id:4, title:'Body',img: images.body },
    {id:5, title:'Fruits',img: images.fruits },
    {id:6, title:'Restaurant',img: images.restaurant },
];