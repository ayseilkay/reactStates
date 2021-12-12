import { useState } from "react"
function InputExample() {
    const [form,setForm]= useState({name:"",surname:""});
    const onChangeInput = (e)=>{
        console.log(e.target.name)
        setForm({...form,[e.target.name]: e.target.value})
    }
    return (
        <div>
           Name <br/>
            <input name = "name" value={form.name} onChange= {onChangeInput} />
            <br/>
            <br/>
           Surname <br/>
            <input name="surname" value={form.surname} onChange= {onChangeInput} />
            <br/>
            {form.name} {form.surname}
        </div>
    )
}

export default InputExample


// her input icin ayrı ayrı fonksiyon tanımlmak cok iyi bir yöntem olmayabilr.Yukarıda bu durum handle edilmis olacak.

// import { useState } from "react"
// function InputExample() {
//     const [name,setName]= useState('ayse');
//     const [surname,setSurname] = useState('ilkay');
//     const onChangeName = (event)=>{
//         setName(event.target.value)
//     }
//     const onChangeSurname = (event)=>{
//         setSurname(event.target.value)
//     }
//     return (
//         <div>
//            Name <br/>
//             <input value={name} onChange= {onChangeName} />
//             <br/>
//             <br/>
//            Surname <br/>
//             <input value={surname} onChange= {onChangeSurname} />
//             <br/>
//             {name} {surname}
//         </div>
//     )
// }

// export default InputExample