
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello Templet engine</h1>
        <form action="/" method="post" enctype="multipart/form-data">
          <h3>画像をアップロードする。</h3>
          <input type="file" name ="imageFile" accept="image/*"/>
          <input type="submit" />
        </form>
      </header>
    </div>
  );
}

export default App;
