import './App.css';
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
       <Sidebar />
        <h1>Hello Templet engine</h1>
        <form action="/" method="post" enctype="multipart/form-data">
          <h3>画像をアップロードする。</h3>
          <input type="file" name ="imageFile" accept="image/*"/>
          <input type="submit" />
        </form>
      <div>
        <p>↓に保存された画像が出力されます。</p>
      </div>
    </div>
  );
}

export default App;
