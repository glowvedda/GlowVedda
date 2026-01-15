// Imports
import vitaminCImage from '@/assets/images/Vitamin-C-Serum-1.jpg';
import salicylicSerumImage from '@/assets/images/Salicylic-Serum-1.jpg';
import sunscreenImage from '@/assets/images/Sunscreen-1.jpg';
import creamyWashImage from '@/assets/images/Creamy-Face-Wash-1.jpeg';
import salicylicWashImage from '@/assets/images/Salicylic-Face-Wash-1.jpg';

export const products = [
    {
        id: 1,
        name: "12% Vitamin C Face Serum",
        mrp: 999,
        discountedPrice: 699,
        benefits: ["Brightens Dull Skin", "Boosts Collagen", "Evens Skin Tone"],
        image: vitaminCImage,
        alt: "Glow Vedda 12% Vitamin C Face Serum bottle with orange and yellow branding",
        link: "https://www.amazon.in/GLOW-VEDDA-Brightening-Anti-Dark-Combination/dp/B0G7XVYK34/ref=sr_1_1_sspa?crid=LV10EYE14U64&dib=eyJ2IjoiMSJ9.ByTHUgWj2od4fwt4U1cTpb21yzxrNFpHm0ufyaxeEa3F9jbRTwt4n1_2DW_fAxPcuRRO6Y4yAMnbMpUaWMuujm4OsPjHS5Z4c5nZCR41v2k8033byWLkOzFFAEuPbh67mC-zFxdn5UfGboJfflmYTT8lEEoV4ftm5Zf92cLyAiaXu3ATU0EFSNj1v2pOoA-AmSD5YDe1yS4EZdmCaS9evadZYUgmkIU0f6dutgg3oJ4.vxDXTMqIF2gmxMOg0TK8Bic5HBLfD1ijnlHQyTPtbE4&dib_tag=se&keywords=glow+vedda&qid=1766475956&sprefix=glow+vedda%2Caps%2C180&sr=8-1-spons&aref=Tytq0ROeEj&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1"
    },
    {
        id: 2,
        name: "2% Salicylic Acid Face Serum",
        mrp: 799,
        discountedPrice: 549,
        benefits: ["Unclogs Pores", "Controls Oil", "Smooths Skin Texture"],
        image: salicylicSerumImage,
        alt: "Glow Vedda 2% Salicylic Acid Face Serum bottle with navy blue branding",
        link: "https://www.amazon.in/GLOW-VEDDA-Blackheads-Pigmentation-Combination/dp/B0G7X5LMJT/ref=sr_1_6?crid=LV10EYE14U64&dib=eyJ2IjoiMSJ9.ByTHUgWj2od4fwt4U1cTpb21yzxrNFpHm0ufyaxeEa3F9jbRTwt4n1_2DW_fAxPcuRRO6Y4yAMnbMpUaWMuujm4OsPjHS5Z4c5nZCR41v2k8033byWLkOzFFAEuPbh67mC-zFxdn5UfGboJfflmYTT8lEEoV4ftm5Zf92cLyAiaXu3ATU0EFSNj1v2pOoA-AmSD5YDe1yS4EZdmCaS9evadZYUgmkIU0f6dutgg3oJ4.vxDXTMqIF2gmxMOg0TK8Bic5HBLfD1ijnlHQyTPtbE4&dib_tag=se&keywords=glow+vedda&qid=1766475956&sprefix=glow+vedda%2Caps%2C180&sr=8-6"
    },
    {
        id: 3,
        name: "Sunscreen SPF 50 PA++++",
        mrp: 699,
        discountedPrice: 459,
        benefits: ["Broad Spectrum Protection", "UVA & UVB Protection", "Keeps Skin Smooth"],
        image: sunscreenImage,
        alt: "Glow Vedda Sunscreen SPF 50 tube with yellow and white branding",
        link: "https://www.amazon.in/GLOW-VEDDA-Sunscreen-Combination-Protection/dp/B0G7X937T7/ref=sr_1_5?crid=LV10EYE14U64&dib=eyJ2IjoiMSJ9.ByTHUgWj2od4fwt4U1cTpb21yzxrNFpHm0ufyaxeEa3F9jbRTwt4n1_2DW_fAxPcuRRO6Y4yAMnbMpUaWMuujm4OsPjHS5Z4c5nZCR41v2k8033byWLkOzFFAEuPbh67mC-zFxdn5UfGboJfflmYTT8lEEoV4ftm5Zf92cLyAiaXu3ATU0EFSNj1v2pOoA-AmSD5YDe1yS4EZdmCaS9evadZYUgmkIU0f6dutgg3oJ4.vxDXTMqIF2gmxMOg0TK8Bic5HBLfD1ijnlHQyTPtbE4&dib_tag=se&keywords=glow+vedda&qid=1766475956&sprefix=glow+vedda%2Caps%2C180&sr=8-5"
    },
    {
        id: 4,
        name: "Glow Vedda Face Wash - Creamy",
        mrp: 380,
        discountedPrice: 311.60,
        benefits: ["Deeply Cleanses", "Exfoliates Dead Cells", "Prevents Acne"],
        image: creamyWashImage,
        alt: "Glow Vedda Creamy Face Wash tube with green and teal branding"
    },
    {
        id: 5,
        name: "Glow Vedda Face Wash - Salicylic",
        mrp: 270,
        discountedPrice: 221.40,
        benefits: ["Oil Control", "Deep Cleansing", "Acne Prevention"],
        image: salicylicWashImage,
        alt: "Glow Vedda Salicylic Face Wash tube with teal and blue branding"
    }
];
