const layersOrder = [
    { name: 'background', number: 7 },
    { name: 'cheek whiskers', number: 7 },
    { name: 'eyes', number: 7 },
    { name: 'head fur', number: 7 },
    { name: 'mouth whiskers', number: 7 },
];
  
const format = {
    width: 1000,
    height: 1000
};

const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

const defaultEdition = 20;

module.exports = { layersOrder, format, rarity, defaultEdition };