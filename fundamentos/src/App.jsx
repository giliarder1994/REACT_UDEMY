import './App.css'
import FirstComponent from './components/FirstComponent';
import MyComponent from './components/MyComponent';
import TemplateExpressions from './components/TemplateExpression';
import Events from './components/Events';
import Challenge from './components/Challenge';



function App() {

  return (
    <div>
      <h1>Hello Mundo!</h1>
      <FirstComponent/>
      <TemplateExpressions/>
      <MyComponent/>
      <Events/>
      <Challenge/>
    </div>
      
  )
}

export default App
