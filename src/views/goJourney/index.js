import { useState, useEffect } from 'react'
import { Home, InsideHeader } from "@/views/index"
import { JourneyInput, JourneySelect, JourneyTextarea, JourneyCheckbox, JourneyButton } from "@/components/ui/"
import { useSelector, useDispatch } from 'react-redux'
import { formDataSave_r } from "@/redux/actions"
import { fromJSON } from 'postcss'

const GoJourney = () => {
    const { formData } = useSelector(({ formData }) => formData);
    const [step, setStep] = useState(1)
    const [validation, setValidation] = useState(false)
    const dispatch = useDispatch()

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

    const onSubmit = (e) => {

        if (form.name == "" || form.email == "" || form.phone == "" || form.instagtamUsername == "" || form.size == "") {
            setValidation(true)
        } else {
            setValidation(false)

            dispatch(formDataSave_r(form))
            setStep(step <= 2 ? step + 1 : 1)
        }
    }

    useEffect(() => {
    }, [])

    return (

        <div className=" mx-auto  px-3 pt-1 w-full sm:w-7/12">
            <form onSubmit={e => e.preventDefault()}>
                <div className={step == 1 ? "" : "hidden"}>
                    <h1 className="  text-3xl font-bold mt-16 mb-3">Adım 1</h1>
                    <div>
                        <h3 className="formSubTitle">Kişisel Bilgiler</h3>
                        <div className="formItems">
                            <JourneyInput
                                placeholder="İsim"
                                name="name"
                                onChange={onChange}
                                required
                            />
                            <JourneyInput
                                placeholder="E-Posta Adresi"
                                name="email"
                                onChange={onChange}
                                required
                            />
                            <JourneyInput
                                placeholder="Telefon"
                                name="phone"
                                onChange={onChange}
                                required
                            />
                            <JourneyInput
                                placeholder="Instagram Kullanıcı Adınız"
                                name="instagtamUsername"
                                onChange={onChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="w-full">
                        <h3 className="formSubTitle">Hangi Ülkede Yaşıyorsun?</h3>
                        <div className="w-full">
                            <JourneySelect
                                name="country"
                                onChange={onChange}
                                data={[
                                    { label: "Türkiye", value: "Türkiye" },
                                    { label: "ABD", value: "ABD" },
                                    { label: "UK", value: "UK" },
                                ]}
                            />
                        </div>
                    </div>
                    <div>
                        <h3 className="formSubTitle">Daha önce Herbalife ürünü kulandın mı?</h3>
                        <div className="inline-flex items-center mt-2" >
                            <JourneyCheckbox
                                name="usingProduct"
                                id="usingProductTrue"
                                textlabel="Evet"
                                value={true}
                                checked={form.usingProduct == "true" ? true : false}
                                onChange={onChange}
                            />
                        </div>
                        <div className="inline-flex items-center mt-2" >
                            <JourneyCheckbox
                                name="usingProduct"
                                id="usingProductFalse"
                                className="text-red-600"
                                textlabel="Hayır"
                                value={false}
                                checked={form.usingProduct == "false" ? true : false}
                                onChange={onChange}
                            />
                        </div>
                    </div>
                    <div>
                        <h3 className="formSubTitle">Daha önce Herbalife üyesi oldun mu?</h3>
                        <div className="inline-flex items-center mt-2">
                            <JourneyCheckbox
                                id="memberProductTrue"
                                name="memberProduct"
                                textlabel="Evet"
                                value={true}
                                checked={form.memberProduct == "true" ? true : false}
                                onChange={onChange}
                            />
                        </div>
                        <div className="inline-flex items-center mt-2">
                            <JourneyCheckbox
                                name="memberProduct"
                                id="memberProductFalse"
                                className="text-red-600"
                                textlabel="Hayır"
                                value={false}
                                checked={form.memberProduct == "false" ? true : false}
                                onChange={onChange}
                            />
                        </div>
                    </div>
                    <div>
                        <h3 className="formSubTitle">İdeal vücut ölçün nedir? </h3>
                        <div className="formItems  grid-cols-1">
                            <JourneyInput
                                placeholder="Ölçünüzü Yazınız"
                                name="size"
                                required
                                onChange={onChange}
                            />
                        </div>
                    </div>

                    {validation ? <div className="my-6 text-red-600 w-full text-center font-semibold">Lütfen Formu Kontrol Ediniz</div> : ""}
                    <JourneyButton
                        type="submit"
                        onClick={onSubmit}
                        text="Devam"
                        className="w-full text-center bg-black py-2 text-white mt-8"
                    />

                </div>
                <div className={` h-96 ${step == 2 ? "" : "hidden"}`}>
                    <h1 className="text-3xl font-bold mt-10 mb-3">Adım 2</h1>
                    <h3 className="formSubTitle">Bize biraz kendinden bahseder misin?</h3>
                    <JourneyTextarea
                        name="description"
                        className="w-full"
                        onChange={onChange}
                    />
                    <JourneyButton
                        type="button"
                        text="Gönder"
                        onClick={onSubmit}
                        className="w-full text-center bg-black py-2 text-white mt-8"
                    />

                </div>

                <div className={` h-96 ${step == 3 ? "" : "hidden"}`}>
                    <h1 className="text-3xl w-full font-semibold text-center mt-10 mb-3">Tamamlandı</h1>
                    {console.log(formData)}
                </div>
            </form>
        </div >
    )
}

export default GoJourney