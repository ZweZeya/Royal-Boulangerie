import React from "react";
import Layout from "./Layout";
import Place from "./Place";

export default function Locations() {

    // List of branches
    const placeList = [
        {
            name: "Jurong Pont",
            address: "1 Jurong West Central 2, Singapore 648868",
            tel: "6950 8134",
            url: "https://www.google.com/maps/place/Jurong+Point/@1.3397443,103.6979964,15z/data=!3m2!4b1!5s0x31da0fecd25e0a09:0xd320a963d92f0250!4m5!3m4!1s0x31da0fecdb0cd66b:0x2d89b202b512e598!8m2!3d1.3397443!4d103.7067297"
        },
        {
            name: "JEM",
            address: "50 Jurong Gateway Rd, Singapore 608549",
            tel: "6225 5536",
            url: "https://www.google.com/maps/place/Jem/@1.3331334,103.7349028,15z/data=!3m2!4b1!5s0x31da100f1da1564d:0xb7a0bbbacd532790!4m5!3m4!1s0x31da100f1e276d6f:0xebabee6918ce19b8!8m2!3d1.3331334!4d103.7436361"
        },
        {
            name: "ION Orchard",
            address: "2 Orchard Turn, Singapore 238801",
            tel: "6238 8288",
            url: "https://www.google.com/maps/place/ION+Orchard/@1.3039288,103.8232179,15z/data=!3m2!4b1!5s0x31da198de9a5f9df:0x1c5546ca117e8960!4m5!3m4!1s0x31da198de9aaaabb:0x996bdb092f510665!8m2!3d1.3039288!4d103.8319512"
        },
        {
            name: "NEX",
            address: "23 Serangoon Central, Singapore 556083",
            tel: "6416 6366",
            url: "https://www.google.com/maps/place/NEX/@1.3506853,103.8632578,15z/data=!3m1!4b1!4m5!3m4!1s0x31da17a6ad801a79:0x25d5947401889c42!8m2!3d1.3506853!4d103.8719911"
        },
        {
            name: "Tampines Mall",
            address: "4 Tampines Central 5, Singapore 529510",
            tel: "6788 8370",
            url: "https://www.google.com/maps/place/Tampines+Mall/@1.352451,103.9359399,15z/data=!3m2!4b1!5s0x31da3d0474a4da9d:0x79064f59f682c229!4m5!3m4!1s0x31da3d11ea5fd9f3:0x76160e94737b7b41!8m2!3d1.352451!4d103.9446732"
        },
        {
            name: "Northpoint City",
            address: "930 Yishun Ave 2, Singapore 769098",
            tel: "6754 2300",
            url: "https://www.google.com/maps/place/Northpoint+City/@1.4293478,103.8271338,15z/data=!3m2!4b1!5s0x31da146fa6f1f141:0xaa7671850a1fbee0!4m5!3m4!1s0x31da1536e4fe14f5:0xa09b38053717b429!8m2!3d1.4293478!4d103.8358671"
        }
    ];

    // Creating JSX elements for each location
    const placeElements = placeList.map(
        place => 
        <Place
            name={place.name}
            address={place.address}
            tel={place.tel}
            url={place.url}
        />
    );

    return (
        <Layout>
            <h1 class="locations-title">Find Us</h1>
            <div>
                {placeElements}
            </div>
            <hr />
        </Layout>
    )
}