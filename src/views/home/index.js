
function Home() {
    return (
        <div className="container  mx-auto grid grid-cols-1 lg:grid-cols-2 shadow-lg rounded-lg overflow-auto">
            <div className="px-5 xl:pr-36 lg:pl-0 order-2 lg:order-1 ">
                <img src="/assets/images/homeImage.jpg" className="w-full object-cover" />
            </div>
            <div className="gap-y-10 flex flex-col px-5 lg:pr-10 order-1 lg:order-2   pt-10 lg:pt-10 xl:pt-40 mb-5">
                <h1 className=" text-4xl font-bold">Merhaba, <br /> Dünyama Hoş Geldin</h1>
                <p>Herkese Selam
                    <br />
                    <b>Ben Ferhan Cihaner,</b>
                    <br /> <br />
                    Sporu çok seviyorum ve bir Triathletim! İnsanların da daha sağlıklı ve aktif bir yaşam biçimi benimsemeleri için elimden gelen her şeyi yapmaya hazırım.
                    <br /><br />
                    Sağlıklı ve daha iyi bir dünya için benim seçtiğim yol bu! Mutlu, huzurlu ve kendini seven bireyler dünyayı daha güzel bir yere çevirir. En büyük motivasyonum da bu amaç doğrultusunda sizinle birlikte hareket edebilmek. Web sitemi gezerken umarım istediklerini karşılarım!
                    <br /><br />
                    Benimle gel ve motive ol!
                </p>
            </div>
        </div>
    )
}

export default Home
