import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Custombutton from "./Components/Custombuttons";
import Custominput from "./Components/Custominput/Custominput";
import "./App.css";
const App = () => {
  const [todos, settodos] = useState([]);
  const [todotext, settodotext] = useState("");

  //Ekranda bir elementi render etmemız için bu element  süslü parantez içinde ise bunu return etmek gerekıyor..

  //İnputun içeriğini alabilmek için tutulacağı state tanımlanır.

  //Ekran ilk açıldığında çalışacak useeffect(()=>[]) içerisinde verilerimizi çağırıyoruz

  const gettodos = () => {
    axios
      .get("http://localhost:3001/todos")
      //gelen veriyi stateye aktarma
      .then((response) => settodos(response?.data))
      //Eğer APİ tarafında veya server tarafında bir sorun varsa hatayı yakalama
      .catch((error) => console.log("get hatası ", error?.message));
  };

  useEffect(() => {
    gettodos();
  }, []);

  //Ekle butonunda basıldığı anda çalışır..
  const handlesubmit = (e) => {
    //Form elementinin varsayılan özelliklerini sıfırlıyoruz..
    e.preventDefault();
    console.log("Onsubmit çalişti");

    ///yeni bir todo olusturma
    const newtodo = {
      id: new Date().getTime(),
      title: todotext,
      date: new Date().toLocaleString(),
      isDone: false,
    };

    //Axios ile kendi api mize post isteği atma
    axios
      //Yol olarak todos endpointine new todo gönderiyoruz..
      .post("http://localhost:3001/todos", newtodo)
      //Gönderkem işleminden sonra stateyide yeni todo içerecek şekilde güncellliyoruz.
      .then(() => settodos([...todos, newtodo]));

    settodotext("");
  };

  const handledelete = (id) => {
    console.log("Silme fonksiyonu çalişti");

    axios.delete(`http://localhost:3001/todos/${id}`).then(() => {
      const filtered = todos.filter((todo) => todo.id !== id);

      settodos(filtered);
    }).catch((error)=>{ console.log("SİLME HATASI OLUSTU ",error?.message)
  })
  };

  // Checkboxa tıklanınca çalışır
  const handleedit = (todoInfo) => {
    //Gönderilecek objenın güncel halını hazırlama

    let uptdatedtodo = { ...todoInfo, isDone: !todoInfo.isDone };

    //Güncel hali apiye gönderme

    axios
      .put(`http://localhost:3001/todos/${todoInfo.id}`, uptdatedtodo)
      .then(() => {
        const clonetodos = [...todos];

        const updateIndex = clonetodos.findIndex(
          (item) => item.id === todoInfo.id
        );

        clonetodos.splice(updateIndex, 1, uptdatedtodo);
        settodos(clonetodos);
      });
  };

  return (
    <div className="container">
      <h1>Yapılacaklar</h1>
      <form className="form" onSubmit={(e) => handlesubmit(e)}>
        <Custominput
          value={todotext}
          onChange={(e) => settodotext(e.target.value)}
        />
        <Custombutton type={"primary"} buttontitle={"EKLE"} />
      </form>

      <ul className="list-group mt-4">
        {todos?.map((todo) => (
          <li
            key={todo.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>
              <input
                checked={todo.isDone}
                onChange={() => handleedit(todo)}
                type="checkbox"
              />
              {todo?.isDone === true ? "Tamamlandı" : "  Devam Ediyor"}
            </span>
            <span>{todo?.title}</span>

            <Custombutton
              onClick={() => handledelete(todo?.id)}
              type={"warning"}
              buttontitle={"Sil"}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
