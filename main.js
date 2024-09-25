// Array to store NFT'S
let CollectNFT = [];

// Function to create and store NFT objects
function mintNFT(name, description, imageUrl) {
    // Create NFT object with metadata
    let nft = {
        name: name,
        description: description,
        imageUrl: imageUrl
    };

    // Store the NFT in the collection
    CollectNFT.push(nft);
}

// Function to print all NFTs' details
function listNFTs() {
    console.log("LIST OF NFT'S");
    CollectNFT.forEach((nft, index) => {
        console.log(`NFT ${index + 1}:`);
        console.log(`Name: ${nft.name}`);
        console.log(`Description: ${nft.description}`);
        console.log(`Image URL: ${nft.imageUrl}`);
        console.log("\n▥▥▥▥▥▥▥▥▥▥▥▥▥▥▥▥▥▥▥▥▥▥▥▥▥▥▥▥▥▥▥▥▥▥▥▥▥▥▥▥▥▥▥▥▥▥▥▥▥▥▥▥▥▥▥▥▥\n");
    });
}

// Function to get the total number of NFTs minted
function getTotalSupply() {
    return CollectNFT.length;
}

// Minting NFTs using the array data
let nftData = [
    { name: "Draco", description: "Dragon of the Year", imageUrl: "https://www.tecnicasreunidas.es/wp-content/uploads/2024/02/ai-generated-8479245_1920.jpg" },
    { name: "Goku", description: "Dragon Ball Z Main Character", imageUrl: "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/01/dragon-ball-goku-yell.jpg" },
    { name: "Pucca", description: "Chinese Cartoon", imageUrl: "https://resizing.flixster.com/8p99wlET8mCd_9JbmH2Zm_NGY-E=/1100x618/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p278397_i_h10_ab.jpg" },
    { name: "Bob", description: "Gru's Minion", imageUrl: "https://ih1.redbubble.net/image.3502500045.9692/flat,750x,075,f-pad,750x1000,f8f8f8.jpg" },
    { name: "Nezuko", description: "From the series, Demon Slayer", imageUrl: "https://i.pinimg.com/736x/6e/e1/a6/6ee1a67e1c3e6b7601e4f63c67d89d80.jpg" }
];

// Loop through the array and mint each NFT
nftData.forEach(nft => {
    mintNFT(nft.name, nft.description, nft.imageUrl);
});

// Call functions to display the results
listNFTs();
console.log(`Total NFTs minted: ${getTotalSupply()}`);
