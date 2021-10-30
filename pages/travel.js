import { useState, useEffect } from 'react'
import Head from 'next/head'
import { Home, InsideHeader } from "@/views/index"
import { useSelector, useDispatch } from 'react-redux'
import { formDataSave_r } from "@/redux/actions"
const Default = () => {
    const { formData } = useSelector(({ formData }) => formData);

    const dispatch = useDispatch()
    console.log("formData", formData)

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        instagtamUsername: "",
        country: "Türkiye",
        usingProduct: "false",
        memberProduct: "false",
        size: "",
        description: ""
    })

    const onChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const onSubmit = () => {
        dispatch(formDataSave_r(form))
    }

    useEffect(() => {
        console.log("formData", formData)
    }, [formData])

    return (
        <div className="">
            <Head>
                <title>Yolculuğa Çık</title>
            </Head>
            <InsideHeader title="Yolculuğa Başla" />
            <div className="w-2/3 lg:w-1/3 mx-auto">
                <h1 className="text-3xl font-bold mt-6 mb-3">Adım 1</h1>
                <div>
                    <h3 className="formSubTitle">Kişisel Bilgiler</h3>
                    <div className="formItems">
                        <input placeholder="İsim" name="name" onChange={(e) => onChange(e)} />
                        <input placeholder="E-Posta Adresi" name="email" onChange={(e) => onChange(e)} />
                        <input placeholder="Telefon" name="phone" onChange={(e) => onChange(e)} />
                        <input placeholder="Instagram Kullanıcı Adınız" name="instagtamUsername" onChange={(e) => onChange(e)} />
                    </div>
                </div>
                <div>
                    <h3 className="formSubTitle">Hangi Ülkede Yaşıyorsun?</h3>
                    <select name="country" onChange={(e) => onChange(e)}>
                        <option value="Türkiye">Türkiye</option>
                        <option value="ABD">ABD</option>
                        <option value="UK">UK</option>
                    </select>
                </div>
                <div>
                    <h3 className="formSubTitle">Daha önce Herbalife ürünü kulandın mı?</h3>
                    <label className="inline-flex items-center mt-2">
                        <input name="usingProduct" value={true} checked={form.usingProduct == "true" ? true : false} onChange={(e) => onChange(e)} type="checkbox" className="form-checkbox h-8 w-8 text-green-600 " />
                        <span className="mx-3 font-bold">Evet</span>
                    </label>
                    <label className="inline-flex items-center mt-2">
                        <input name="usingProduct" value={false} checked={form.usingProduct == "false" ? true : false} onChange={(e) => onChange(e)} type="checkbox" className="form-checkbox h-8 w-8 text-green-600 " />
                        <span className="mx-3 font-bold">Hayır</span>
                    </label>
                </div>
                <div>
                    <h3 className="formSubTitle">Daha önce Herbalife üyesi oldun mu?</h3>
                    <label className="inline-flex items-center mt-2">
                        <input name="memberProduct" value={true} checked={form.memberProduct == "true" ? true : false} onChange={(e) => onChange(e)} type="checkbox" className="form-checkbox h-8 w-8 text-green-600 " />
                        <span className="mx-3 font-bold">Evet</span>
                    </label>
                    <label className="inline-flex items-center mt-2">
                        <input name="memberProduct" value={false} checked={form.memberProduct == "false" ? true : false} onChange={(e) => onChange(e)} type="checkbox" className="form-checkbox h-8 w-8 text-green-600 " />
                        <span className="mx-3 font-bold">Hayır</span>
                    </label>
                </div>
                <div>
                    <h3 className="formSubTitle">İdeal vücut ölçün nedir? </h3>
                    <div className="formItems  grid-cols-1">
                        <input placeholder="Ölçünüzü Yazınız" name="size" onChange={(e) => onChange(e)} />
                    </div>
                </div>
                <div>
                    <button type="button" onClick={() => onSubmit()} className="w-full text-center bg-black py-2 text-white mt-8">
                        Gönder
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Default