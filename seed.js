const mongoose=require('mongoose');
const Product = require('./models/Product');
let products=[
    {
        name:"Wipro Garnet 9W Invertor LED 4 hours Bulb Emergency Light  (White)",
        img:"https://rukminim2.flixcart.com/image/832/832/xif0q/emergency-light/z/o/m/-original-imagrzvg6gvhwyzr.jpeg?q=70",
        price:679,
        discription:"Built in Rechargeable Battery ; Battery backup upto 4 hrs ;100-264 VAC provides safety against voltage fluctuations in AC Mode",
        author:"659e6eb100786f1963f9a358"
    },
    {
        name:"DIGISMART Autum Hexa Premium 380 RPM High Speed 28Watt With LED Light Inverter Technology 5 Star 1200 mm BLDC Motor with Remote 6 Blade Ceiling Fan  (Brown, Pack of 1)",
        img:"https://rukminim2.flixcart.com/image/832/832/xif0q/fan/j/k/b/-original-imagws57ha5hw77z.jpeg?q=70",
        price:4490,
        discription:"Give a new and complete look to your room by adding a stylish DIGISMART AUTUM HEXA BLDC fan with LED LIGHT from our wide range. Digismart build innovative products that provide meaningful solutions to consumer needs. Dust-Free ceiling Fans Digismart fans help you stay cool and comfortable at all times. This motor gives instant drive to the appliance which avoids any delay when you switch on the fan. We provide a wide variety of sizes, designs, colors and aesthetics across the different types of Decorative Ceiling Fans with an aerodynamic design to provide you to get amazing air delivery! Its aerodynamically designed blades and heavy-duty motor establish the truth that you will experience efficient air circulation without any trouble and anti-dust technology to reduce dust collection by 50%. Low-density helps make this silent ceiling fan lightweight to provide a superior air throw and long-lasting durability. The powerful motor works at 380 RPM, producing high-speed airflow for your comfort, while the premium quality material allows for better heat dissipation for efficiency. Consumes only 28W(at Full speed). Runs 3 times longer on an inverter battery as compared to an ordinary fan, the AUTUM operates at speeds upto 380 RPM and delivers air at the rate of 225 CMM. Runs consistently at the same speed even with fluctuating input voltage. Enjoy silent operation of fan through intelligent BLDC motor. For warranty claims or any product related issues please email at info@activaappliances.com or call 9999427599",
        author:"659e6eb100786f1963f9a358"
    },
    {
        name:"Maharaja Whiteline Quato - Quartz Room Heater",
        img:"https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-room-heater/g/m/9/quato-quartz-heater-maharaja-whiteline-800-original-imagjyjvyqyruy93.jpeg?q=70",
        price:1399,
        discription:" Winter season is fast approaching and it's time get ready to face it. Other than wrapping in extra woolen blankets, a wise choice could be to get a room heater. So get this quartz room heater from Maharaja Whiteline and heat different rooms of your home to fight the freezing cold. Smart and compact. This smart and compact room heater warms up an entire room, making it the most versatile heating choice. It is certified by ISI, so you can be sure of its durability. Portable One of the advantages of this room heater is its portability because you can easily carry it from one room to another and enjoy customized heating. Two Heat Settings. This room heater features two heat settings, so you could adjust to 400W for lower and 800W for higher temperature in your room. Tip over switch. The room heater also does not require any installation, you just need plug-in and it will start working instantly. The tip-over switches allow you to adjust it according to your convenience. Quartz Tubes.Since this room heater comes with quartz tubes, you need turn it on to get its full effect. The temperature of these quartz tubes is higher than that of other heaters, thus making it a durable option. Energy-saving. This room heater will not only heat the room but also helps optimize energy consumption.",
        author:"659e6eb100786f1963f9a358"
    },
    {
        name:"DIGISMART 6 L Gas Water Geyser (AQUA LPG GAS GEYSER, IVORY) ",
        img:"https:rukminim2.flixcart.com/image/832/832/xif0q/water-geyser/t/m/d/2019-aqua-0-digismart-6-original-imagt3tauc4zkqv9.jpeg?q=70",
        price:3600,
        discription:"A good quality product.",
        author:"659e6eb100786f1963f9a358"
    },
    {
        name:"Mi star water proof copper blue 2000 2000 W Shock Proof Immersion Heater Rod  (water)",
        img:"https://rukminim2.flixcart.com/image/832/832/xif0q/immersion-rod/m/e/8/2000-diamond-rb06-2000-mi-star-original-imag7hnfhttkaspk.jpeg?q=70",
        price:404,
        discription:"Important information This product is subject to new features and technology. This new design is a symbol of robustness. In this, we have designed a hanger loop in which hanger loop can be used in water 2 point 5 inches less than the normal immersion road. I have not found yet, by using this product you can save your energy, water, money and precious time.",
        author:"659e6eb100786f1963f9a358"
    },
    {
        name:"USHA QH 4302 Quartz Room Heater",
        img:"https://rukminim2.flixcart.com/image/612/612/xif0q/room-heater/1/m/w/-original-imagvfybzxvwdvp7.jpeg?q=70",
        price:1149,
        discription:"Meant for Spot Heating; Voltage/Frequency: 230V/50Hz/1 Phase Room Size: Upto 150 sq ft; Ideal for a small room only, i.e., up to 120 sq. ft Safety tip over switch cuts off the heater in case it tilts or falls; Powder coated finish to prevent corrosion Designed for low power consumption; There are two heating positions to suit your comfort Customer Care Number: 18001033111; Warranty: 1 year on product; Power: 400 and 800 watts.",
        author:"659e6eb100786f1963f9a358"
    },
    {
        name:"Prestige Atlas Electric Kettle  (1.5 L, Blue, Silver)",
        img:"https://rukminim2.flixcart.com/image/832/832/knt7zbk0/electric-kettle/5/g/j/atlas-1-8l-stainless-steel-electric-kettle-atlas-1-8-pkoss-1-8-original-imag2egygrbg2jq4.jpeg?q=70",
        price:699,
        discription:"Make your morning coffees and teas in a jiffy with this electric kettle from Prestige. The ergonomically designed handle and sleek body adds aesthetic appeal to your kitchen. The single-touch lid locking feature allows you to lock the lid with just a single touch. Moreover, the power indicator light turns on every time this appliance comes on.",
        author:"659e6eb100786f1963f9a358"
    },
    {
        name:"SANFI VICTORIA AUTOMATIC 1000 W Dry Iron  (Blue)",
        img:"https://rukminim2.flixcart.com/image/832/832/xif0q/iron/m/l/s/victoria-automatic-sanfi-original-imagnc4hnqgwdamw.jpeg?q=70",
        price:279,
        discription:"SANFI-ENJOY LIFESTYLE We are one of the leading consumer companies in India with a 50+ years old brand legacy. SANFI is a dynamic, young and innovative brand with a legacy of exclusivity and premiumization. We build innovative products that provide meaningful solutions to all your needs. Ironing clothes regularly is now easy and quick, thanks to the efficient and powerful SANFI Victoria Automatic Dry Iron. Its lightweight body is designed for rendering comfort for users while ironing a large number of clothes. Also, fitted with an ergonomic handle, this dry iron can be held and used with comfort. Furthermore, its golden non-stick soleplate glides on the garments with ease, allowing convenient and fast ironing. SANFI Victoria automatic dry iron offers some fantastic features and benefits like lower energy consumption, faster heating, american heritage coating which ensure great performance. Built with an overheating safety mechanism, this dry iron safely functions even when you continuously use it at high temperatures. Ironing Made Safe! Press your clothes with the finesse of a professional with this innovative dry iron from SANFI. If you use this dry iron by SANFI, you will not only enjoy ironing but also get the work done in no time. Aside from the selector knob that regulates temperature, the golden non-stick coating on sole plate installed in this iron is fabric-friendly. Also, the thermal fuse helps you prevent overheating, Features a Non-Stick Coating on Sole Plate The non-stick coated sole plate is a thick, triangular shaped slab. It forms the base of this iron. The double layered sole plate smoothly drifts along the cloth safely. Selector Knob for Easy Grip The selector knob is essential for regulating the amount of heat you require while ironing. This iron comes with a selector knob that has a fine grip and helps you control the temperature effortlessly. Pilot Light is Easily Visible The pilot light indicator on the handle of this iron helps you comprehend whether the iron has heated up or not. Once it switches off, it is an indication that the iron has reached its highest point of heating. Thereafter, it begins to cool down, 360 Swivel Cord for Flexibility.",
        author:"659e6eb100786f1963f9a358"
    },
    {
        name:"ZunVolt Power MG5 500 Mixer Grinder (3 Jars, White)",
        img:"https://rukminim2.flixcart.com/image/832/832/xif0q/mixer-grinder-juicer/t/p/v/power-zunvolt-original-imagz629gj32pqqz.jpeg?q=70",
        price:1359,
        discription:"Upgrade your kitchen appliances collection with the ZunVolt Mixer Grinder 500W. Its jar is made up of high-quality steel for durable and efficient functionality. It has a super-efficient motor and three speed-control settings that deliver great performance for daily kitchen needs. Its stylish design upgrades your kitchen and makes cooking even more fun!.",
        author:"659e6eb100786f1963f9a358"
    }        
];
async function SeedDB(){
    await Product.deleteMany(Product.find());
    await Product.insertMany(products);
    console.log("Data Inserted");
}
module.exports=SeedDB;