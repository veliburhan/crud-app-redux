import React, { useState } from "react";
import Header from "../components/Header";
import { useSelector, useDispatch } from "react-redux";
import "../assets/css/Navbar-style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import actionTypes from "../redux/actions/actionTypes";

const AddStudent = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { studentsState } = useSelector(state => state)


    const [number, setNumber] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [gender, setGender] = useState("")
    const [school, setSchool] = useState("React-Redux İlköğretim Okulu")
    const [stdClass, setStdClass] = useState("")
    const [hobbys, setHobbys] = useState([])
    const [booksRead, setBooksRead] = useState([])

    
    
    const editText=(text)=> {
    return text[0].toUpperCase() + text.substring(1).toLowerCase() 
    }
               


    const hundleSubmit = (event) => {
        event.preventDefault()

        if (!number || !firstName || !lastName || !school || !stdClass) {
            alert("Zorunlu alanları lütfen doldurun.")
            return
        }

        const hasStudent = studentsState.students.find(student => student.number === number)

        if (hasStudent) {
            alert(`Girdiğiniz öğrenci numarası ${hasStudent.firstName} ${hasStudent.lastName} adlı öğrenciye aittir. \nLütfen başka bir numara giriniz`)
            return
        }

        const newStudent = {
            id: String(new Date().getTime()),
            firstName:editText(firstName),
            lastName: editText(lastName),
            gender: editText(gender),
            number: number,
            school: school,
            class: stdClass.toUpperCase(),
            hobbys: hobbys,
            booksread: booksRead
        }

        axios.post("http://localhost:3005/students", newStudent)
            .then((response) => {
                dispatch({ type:actionTypes.ADD_STUDENT, payload: newStudent })
                navigate("/")
            })
            .catch((error) => { })
    };

    const handleChangeHobbys = (event => {
        if(event.target.checked){
        console.log(event.target.value)
          //const array=hobbys.splice(0,0,event.target.value)
           setHobbys([...hobbys,event.target.value])
                    
        }else{
            console.log(event.target.value," seçilmedi")
        }
    })

    const handleChangeBooks = (event => {
        if(event.target.checked){
        
          //const array=hobbys.splice(0,0,event.target.value)
          setBooksRead([...booksRead,event.target.value])
                 
        }else{
            console.log(event.target.value," seçilmedi")
        }
    })

    return (
        <div>
            <div className="header"><Header /></div>
            <div className="liste">
            <div className="container d-flex justify-content-center my-5">
                <form onSubmit={hundleSubmit} className="w-75">
                    <div className="mb-3 mt-2">
                        <label
                            htmlFor="number"
                            className="form-label">
                            Öğrenci Numarası</label>
                        <input
                            value={number}
                            onChange={(event) => setNumber(event.target.value)}
                            type="number"

                            className="form-control"
                            id="number"
                        />
                    </div>

                    <div class="mb-3 mt-2">
                        <label
                            htmlFor="firstName"
                            class="form-label">
                            Adı</label>
                        <input
                            value={firstName}
                            onChange={(event) => setFirstName(event.target.value)}
                            type="text"
                            class="form-control"
                            id="firstName"
                        />
                    </div>

                    <div class="mb-3 mt-2">
                        <label
                            htmlFor="lastName"
                            class="form-label">
                            Soyadı</label>
                        <input
                            value={lastName}
                            onChange={(event) => setLastName(event.target.value)}
                            type="text"
                            class="form-control"
                            id="lastName"
                        />
                    </div>

                    <label>Cinsiyet</label>
                    <div class="mb-3 mt-2 border gender">
                        <div className="form-check form-check-inline">
                            <input class="form-check-input ms-1 mt-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked={gender === 'Kız'} value="Kız" onClick={() => setGender('Kız')} />
                            <label class="form-check-label mt-1" for="flexRadioDefault1">
                                Kız
                            </label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input class="form-check-input ms-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked={gender === 'Erkek'} value="Erkek" onClick={() => setGender('Erkek')} />
                            <label class="form-check-label" for="flexRadioDefault2">
                                Erkek
                            </label>
                        </div>
                    </div>

                    <div class="mb-3 mt-2">
                        <label
                            htmlFor="school"
                            class="form-label">
                            Okulu</label>
                        <input
                            value={school}
                            onChange={(event) => setSchool(event.target.value)}
                            type="text"
                            class="form-control"
                            id="school"
                        />
                    </div>

                    <div class="mb-3 mt-2">
                        <label
                            htmlFor="class"
                            class="form-label">
                            Sınıfı</label>
                        <input
                            value={stdClass}
                            onChange={(event) => setStdClass(event.target.value)}
                            type="text"
                            class="form-control"
                            id="class"
                        />
                        
                    </div>

                    <div>
                        <div className="form-check">
                            <h4>Hobileri</h4>
                            <hr></hr>
                            <input className="form-check-input" type="checkbox" value="Satranç Oynamak" onChange={handleChangeHobbys} id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Satranç Oynamak
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="Fotoğrafçılık" onChange={handleChangeHobbys} id="flexCheckChecked" />
                            <label class="form-check-label" for="flexCheckChecked">
                                Fotoğrafçılık
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="Seyahat Etmek" onChange={handleChangeHobbys} id="flexCheckChecked" />
                            <label class="form-check-label" for="flexCheckChecked">
                                Seyahat Etmek
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="Kitap Okumak" onChange={handleChangeHobbys} id="flexCheckChecked" />
                            <label class="form-check-label" for="flexCheckChecked">
                                Kitap Okumak
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="Resim Yapmak" onChange={handleChangeHobbys} id="flexCheckChecked" />
                            <label class="form-check-label" for="flexCheckChecked">
                                Resim Yapmak
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="Tenis Oynamak" onChange={handleChangeHobbys} id="flexCheckChecked" />
                            <label class="form-check-label" for="flexCheckChecked">
                                Tenis Oynamak
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="Bisiklet Kullanmak" onChange={handleChangeHobbys} id="flexCheckChecked" />
                            <label class="form-check-label" for="flexCheckChecked">
                                Bisiklet Kullanmak
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="Yüzmek" onChange={handleChangeHobbys} id="flexCheckChecked" />
                            <label class="form-check-label" for="flexCheckChecked">
                                Yüzmek
                            </label>

                        </div>
                    </div>

                    <div className="mt-3">
                        <div className="form-check">
                            <h4>Okuduğu Kitaplar</h4>
                            <hr></hr>
                            <input class="form-check-input" type="checkbox" value="80 Günde Devri Alem-Jules Verne" onChange={handleChangeBooks} id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                80 Günde Devri Alem-Jules Verne
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="Sefiller-Victor Hugo" onChange={handleChangeBooks} id="flexCheckChecked" />
                            <label class="form-check-label" for="flexCheckChecked">
                                Sefiller-Victor Hugo
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="Çizgili Pijamalı Çocuk-John Boyne" onChange={handleChangeBooks} id="flexCheckChecked" />
                            <label class="form-check-label" for="flexCheckChecked">
                                Çizgili Pijamalı Çocuk-John Boyne
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="Beyaz Diş-Jack London" onChange={handleChangeBooks} id="flexCheckChecked" />
                            <label class="form-check-label" for="flexCheckChecked">
                                Beyaz Diş-Jack London
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="Troya Masalı-Azra Erhat" onChange={handleChangeBooks} id="flexCheckChecked" />
                            <label class="form-check-label" for="flexCheckChecked">
                                Troya Masalı-Azra Erhat
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="Alice Harikalar Diyarında-Lewis Carrol" onChange={handleChangeBooks} id="flexCheckChecked" />
                            <label class="form-check-label" for="flexCheckChecked">
                                Alice Harikalar Diyarında-Lewis Carrol
                            </label>
                        </div>

                        <div class="form-check">                            
                            <input class="form-check-input" type="checkbox" value="Son Adanın Çocukları-Zülfi Livaneli" onChange={handleChangeBooks} id="flexCheckChecked" />
                            <label class="form-check-label" for="flexCheckChecked">
                                Son Adanın Çocukları-Zülfi Livaneli
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="Pal Sokağı Çocukları-Ferenc Molnar" onChange={handleChangeBooks} id="flexCheckChecked" />
                            <label class="form-check-label" for="flexCheckChecked">
                                Pal Sokağı Çocukları-Ferenc Molnar
                            </label>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center mt-5">
                        <button type="submit" className="btn btn-primary w-50">Kaydet</button>
                    </div>

                </form>
            </div >
            </div>

        </div >
    )
}

export default AddStudent;