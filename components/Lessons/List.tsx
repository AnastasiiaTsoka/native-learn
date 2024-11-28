import { images } from "@/constants/images";
export interface ListProps{
    id: number,
    title: string,
    img: any,
};

export interface AlphabetProps{
    letter: string,
    transcription: string,
    id: string,
    sound: string,
};

export const List = [
    {id:1, title:'Alphabet',img: images.alphabet },
    {id:2, title:'Welcome',img: images.welcome },
    {id:3, title:'Family',img: images.family },
    {id:4, title:'Body',img: images.body },
    {id:5, title:'Fruits',img: images.fruits },
    {id:6, title:'Restaurant',img: images.restaurant },
];


export const Alphabet = [
    { letter: 'Aa', transcription: '/ei/', id: '1a',sound:'A' },
    { letter: 'Bb', transcription: '/bi:/', id: '2b',sound:'B' },
    { letter: 'Cc', transcription: '/si:/', id: '3c',sound:'C' },
    { letter: 'Dd', transcription: '/di:/', id: '4d',sound:'D' },
    { letter: 'Ee', transcription: '/i:/', id: '5e',sound:'E' },
    { letter: 'Ff', transcription: '/ef/', id: '6f',sound:'F' },
    { letter: 'Gg', transcription: '/dgi/', id: '7g',sound:'G' },
    { letter: 'Hh', transcription: '/eit/', id: '8h' ,sound:'H'},
    { letter: 'Ii', transcription: '/ai/', id: '9i',sound:'I' },
];
